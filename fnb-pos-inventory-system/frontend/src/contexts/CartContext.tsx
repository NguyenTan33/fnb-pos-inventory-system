import React, { createContext, useContext, useState } from 'react';
import { CartItem, Product, CartOptionSelection, Table } from '../types';

interface CartContextType {
  selectedTable: Table | null;
  setSelectedTable: (table: Table | null) => void;
  orderType: 'DineIn' | 'Takeaway' | 'Delivery';
  setOrderType: (type: 'DineIn' | 'Takeaway' | 'Delivery') => void;
  cartItems: CartItem[];
  addToCart: (product: Product, selectedOptions?: CartOptionSelection[], note?: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;
  discountAmount: number;
  setDiscountAmount: (amount: number) => void;
  discountType: 'amount' | 'percent';
  setDiscountType: (type: 'amount' | 'percent') => void;
  subTotal: number;
  calculatedDiscount: number;
  finalTotal: number;
  customerPhone: string;
  setCustomerPhone: (phone: string) => void;
  customerName: string;
  setCustomerName: (name: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [orderType, setOrderType] = useState<'DineIn' | 'Takeaway' | 'Delivery'>('DineIn');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [discountType, setDiscountType] = useState<'amount' | 'percent'>('amount');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');

  const addToCart = (product: Product, selectedOptions: CartOptionSelection[] = [], note: string = '') => {
    const extraPriceSum = selectedOptions.reduce((sum, opt) => sum + opt.extraPrice, 0);
    const unitPrice = product.price + extraPriceSum;

    const optionsKey = selectedOptions.map(o => `${o.optionId}:${o.valueId}`).sort().join('|');
    const cartItemId = `${product.id}-${optionsKey}-${note}`;

    setCartItems(prev => {
      const existing = prev.find(item => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map(item =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * unitPrice }
            : item
        );
      }
      return [
        ...prev,
        {
          cartItemId,
          product,
          quantity: 1,
          selectedOptions,
          note,
          unitPrice,
          totalPrice: unitPrice,
        },
      ];
    });
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            return {
              ...item,
              quantity: newQty,
              totalPrice: newQty * item.unitPrice,
            };
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (cartItemId: string) => {
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setCartItems([]);
    setDiscountAmount(0);
    setCustomerPhone('');
    setCustomerName('');
  };

  const subTotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  const calculatedDiscount =
    discountType === 'percent'
      ? Math.round((subTotal * discountAmount) / 100)
      : Math.min(discountAmount, subTotal);

  const finalTotal = Math.max(0, subTotal - calculatedDiscount);

  return (
    <CartContext.Provider
      value={{
        selectedTable,
        setSelectedTable,
        orderType,
        setOrderType,
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        discountAmount,
        setDiscountAmount,
        discountType,
        setDiscountType,
        subTotal,
        calculatedDiscount,
        finalTotal,
        customerPhone,
        setCustomerPhone,
        customerName,
        setCustomerName,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
