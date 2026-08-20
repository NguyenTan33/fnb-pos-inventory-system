import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import {
  INITIAL_AREAS,
  INITIAL_TABLES,
  INITIAL_CATEGORIES,
  INITIAL_PRODUCTS,
} from '../../utils/mockData';
import { Table, Product, CartOptionSelection } from '../../types';
import { formatCurrency, formatTime } from '../../utils/formatters';
import {
  LayoutGrid,
  Utensils,
  Search,
  Plus,
  Minus,
  Receipt,
  QrCode,
  CreditCard,
  Banknote,
  Send,
  Users,
  Clock,
  ChevronRight,
  Merge,
  CheckCircle2,
  X,
  Tag,
} from 'lucide-react';

export const POSTerminalPage: React.FC = () => {
  const {
    selectedTable,
    setSelectedTable,
    orderType,
    setOrderType,
    cartItems,
    addToCart,
    updateQuantity,
    clearCart,
    discountAmount,
    setDiscountAmount,
    discountType,
    setDiscountType,
    subTotal,
    calculatedDiscount,
    finalTotal,
  } = useCart();

  const [activeView, setActiveView] = useState<'floor' | 'order'>('floor');
  const [selectedAreaId, setSelectedAreaId] = useState<string>('all');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('cat-all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [customizingProduct, setCustomizingProduct] = useState<Product | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<CartOptionSelection[]>([]);
  const [productNote, setProductNote] = useState<string>('');

  const [showCheckoutModal, setShowCheckoutModal] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<'Cash' | 'QR' | 'Card'>('Cash');
  const [cashGiven, setCashGiven] = useState<number>(0);
  const [showSuccessToast, setShowSuccessToast] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<string>('');

  const [tables, setTables] = useState<Table[]>(INITIAL_TABLES);

  const filteredTables = tables.filter((t) =>
    selectedAreaId === 'all' ? true : t.areaId === selectedAreaId
  );

  const filteredProducts = INITIAL_PRODUCTS.filter((p) => {
    const matchesCategory =
      selectedCategoryId === 'cat-all' ? true : p.categoryId === selectedCategoryId;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSelectTable = (table: Table) => {
    setSelectedTable(table);
    setOrderType('DineIn');
    setActiveView('order');
  };

  const handleOpenCustomization = (product: Product) => {
    setCustomizingProduct(product);
    setSelectedOptions([]);
    setProductNote('');
  };

  const handleConfirmAddProduct = () => {
    if (!customizingProduct) return;
    addToCart(customizingProduct, selectedOptions, productNote);
    setCustomizingProduct(null);
  };

  const handleSendToKitchen = () => {
    if (cartItems.length === 0) return;
    if (selectedTable) {
      setTables((prev) =>
        prev.map((t) =>
          t.id === selectedTable.id
            ? { ...t, status: 'Occupied', totalAmount: finalTotal, occupiedAt: new Date().toISOString() }
            : t
        )
      );
    }
    setSuccessMsg('Đã gửi đơn hàng xuống Màn hình Bếp (KDS) thành công!');
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const handleCompletePayment = () => {
    if (selectedTable) {
      setTables((prev) =>
        prev.map((t) =>
          t.id === selectedTable.id
            ? { ...t, status: 'Cleaning', totalAmount: undefined, occupiedAt: undefined }
            : t
        )
      );
    }
    setShowCheckoutModal(false);
    clearCart();
    setSelectedTable(null);
    setActiveView('floor');
    setSuccessMsg('Thanh toán thành công & In hóa đơn hoàn tất!');
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)]">
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 mb-3 bg-white rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex p-1 bg-gray-100 rounded-xl">
          <button
            onClick={() => setActiveView('floor')}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeView === 'floor'
                ? 'bg-white text-emerald-700 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Sơ Đồ Bàn</span>
          </button>
          <button
            onClick={() => setActiveView('order')}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeView === 'order'
                ? 'bg-white text-emerald-700 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Utensils className="w-4 h-4" />
            <span>Thực Đơn & Order</span>
            {cartItems.length > 0 && (
              <span className="flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-emerald-600 rounded-full">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>

        {selectedTable ? (
          <div className="flex items-center space-x-2 px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Đang chọn: <strong>{selectedTable.name}</strong> ({selectedTable.areaName})</span>
            <button
              onClick={() => {
                setSelectedTable(null);
                setActiveView('floor');
              }}
              className="ml-2 text-gray-400 hover:text-rose-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="text-xs text-gray-500 font-medium hidden sm:block">
            Vui lòng chọn bàn để tạo order hoặc chọn <strong>Mang về</strong>
          </div>
        )}

        <div className="flex items-center space-x-1 bg-gray-100 p-1 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setOrderType('DineIn')}
            className={`px-3 py-1 rounded-lg transition-colors ${
              orderType === 'DineIn' ? 'bg-emerald-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            Tại Bàn
          </button>
          <button
            onClick={() => {
              setOrderType('Takeaway');
              setSelectedTable(null);
              setActiveView('order');
            }}
            className={`px-3 py-1 rounded-lg transition-colors ${
              orderType === 'Takeaway' ? 'bg-emerald-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            Mang Về
          </button>
        </div>
      </div>

      {activeView === 'floor' ? (
        <div className="flex-1 flex flex-col min-h-0 bg-white rounded-2xl border border-gray-200 p-4 shadow-sm overflow-hidden">
          <div className="flex items-center space-x-2 pb-3 overflow-x-auto no-scrollbar border-b border-gray-100">
            <button
              onClick={() => setSelectedAreaId('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                selectedAreaId === 'all'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tất cả khu vực ({tables.length})
            </button>
            {INITIAL_AREAS.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedAreaId(area.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedAreaId === area.id
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {area.name} ({area.tablesCount})
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4 my-3 text-xs font-medium text-gray-600">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span>Bàn trống</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span>Đang có khách</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span>Đã đặt trước</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-blue-400" />
              <span>Cần dọn</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 p-1">
            {filteredTables.map((t) => {
              const isOccupied = t.status === 'Occupied';
              const isReserved = t.status === 'Reserved';
              const isCleaning = t.status === 'Cleaning';

              let statusBg = 'bg-emerald-50 border-emerald-200 hover:border-emerald-500 text-emerald-900';
              let badgeBg = 'bg-emerald-500 text-white';
              let statusText = 'Sẵn sàng';

              if (isOccupied) {
                statusBg = 'bg-rose-50 border-rose-200 hover:border-rose-500 text-rose-900';
                badgeBg = 'bg-rose-500 text-white';
                statusText = 'Có khách';
              } else if (isReserved) {
                statusBg = 'bg-amber-50 border-amber-200 hover:border-amber-500 text-amber-900';
                badgeBg = 'bg-amber-500 text-white';
                statusText = 'Đã đặt';
              } else if (isCleaning) {
                statusBg = 'bg-blue-50 border-blue-200 hover:border-blue-500 text-blue-900';
                badgeBg = 'bg-blue-500 text-white';
                statusText = 'Cần dọn';
              }

              return (
                <div
                  key={t.id}
                  onClick={() => handleSelectTable(t)}
                  className={`flex flex-col justify-between p-3.5 rounded-2xl border-2 cursor-pointer transition-all duration-150 transform hover:-translate-y-1 hover:shadow-lg ${statusBg}`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-sm tracking-tight">{t.name}</span>
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${badgeBg}`}>
                        {statusText}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-[11px] opacity-75 mt-1">
                      <span className="flex items-center">
                        <Users className="w-3 h-3 mr-1" /> {t.capacity} chỗ
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-black/5">
                    {isOccupied ? (
                      <>
                        <div className="text-[11px] font-medium opacity-80">Tổng đơn:</div>
                        <div className="font-extrabold text-sm text-rose-700">
                          {formatCurrency(t.totalAmount)}
                        </div>
                        {t.occupiedAt && (
                          <div className="flex items-center text-[10px] opacity-70 mt-0.5">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{formatTime(t.occupiedAt)}</span>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="flex items-center justify-between text-xs font-semibold opacity-90">
                        <span>Đặt món</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col md:flex-row gap-4 min-h-0 overflow-hidden">
          <div className="flex-1 flex flex-col min-h-0 bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
            <div className="relative mb-3">
              <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm tên món ăn, đồ uống..."
                className="w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:outline-none"
              />
            </div>

            <div className="flex space-x-2 pb-3 overflow-x-auto no-scrollbar border-b border-gray-100">
              {INITIAL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                    selectedCategoryId === cat.id
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 p-1 mt-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() =>
                    product.options && product.options.length > 0
                      ? handleOpenCustomization(product)
                      : addToCart(product)
                  }
                  className="group flex flex-col justify-between bg-white rounded-xl border border-gray-200 p-2.5 hover:border-emerald-500 hover:shadow-md cursor-pointer transition-all duration-150"
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 mb-2">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <span className="absolute top-1 left-1 px-1.5 py-0.5 text-[9px] font-bold bg-black/60 text-white rounded">
                      {product.code}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-gray-900 line-clamp-2 leading-tight">
                      {product.name}
                    </h4>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs font-extrabold text-emerald-700">
                        {formatCurrency(product.price)}
                      </span>
                      <button className="p-1 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors">
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-80 lg:w-96 flex flex-col bg-white rounded-2xl border border-gray-200 p-4 shadow-md min-h-0">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <Receipt className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-sm text-gray-900">Chi Tiết Đơn Hàng</h3>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto py-3 space-y-2.5 divide-y divide-gray-50">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-48 text-center text-gray-400">
                  <Utensils className="w-10 h-10 mb-2 opacity-30" />
                  <p className="text-xs font-medium">Chưa có món ăn nào trong giỏ</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.cartItemId} className="pt-2 first:pt-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 pr-2">
                        <div className="text-xs font-bold text-gray-900">{item.product.name}</div>
                        {item.selectedOptions.length > 0 && (
                          <div className="text-[10px] text-gray-500 font-medium">
                            {item.selectedOptions.map((o) => o.valueName).join(', ')}
                          </div>
                        )}
                        <div className="text-xs font-semibold text-emerald-700 mt-0.5">
                          {formatCurrency(item.unitPrice)}
                        </div>
                      </div>

                      <div className="flex items-center space-x-1.5 bg-gray-100 p-1 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, -1)}
                          className="p-0.5 text-gray-600 hover:bg-white rounded"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, 1)}
                          className="p-0.5 text-gray-600 hover:bg-white rounded"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="w-16 text-right font-bold text-xs text-gray-900 ml-2">
                        {formatCurrency(item.totalPrice)}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <div className="flex justify-between text-sm font-extrabold text-gray-900 pt-1 border-t border-gray-100">
                  <span>Khách cần trả:</span>
                  <span className="text-emerald-700 text-base">{formatCurrency(finalTotal)}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={handleSendToKitchen}
                    className="flex items-center justify-center space-x-1.5 py-2.5 text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 rounded-xl transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Gửi Bếp</span>
                  </button>

                  <button
                    onClick={() => setShowCheckoutModal(true)}
                    className="flex items-center justify-center space-x-1.5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30 transition-colors"
                  >
                    <Receipt className="w-4 h-4" />
                    <span>Thanh Toán</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CUSTOMIZE MODAL */}
      {customizingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-5 border border-gray-100">
            <div className="flex items-start justify-between pb-3 border-b border-gray-100">
              <div>
                <h3 className="font-bold text-base text-gray-900">{customizingProduct.name}</h3>
                <p className="text-xs text-emerald-700 font-extrabold">
                  {formatCurrency(customizingProduct.price)}
                </p>
              </div>
              <button
                onClick={() => setCustomizingProduct(null)}
                className="p-1 text-gray-400 hover:text-gray-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4 max-h-80 overflow-y-auto">
              {customizingProduct.options?.map((opt) => (
                <div key={opt.id}>
                  <label className="block text-xs font-bold text-gray-700 mb-2">
                    {opt.name}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {opt.values.map((val) => {
                      const isSelected = selectedOptions.some(
                        (so) => so.optionId === opt.id && so.valueId === val.id
                      );
                      return (
                        <button
                          key={val.id}
                          type="button"
                          onClick={() => {
                            setSelectedOptions((prev) => {
                              const filtered = prev.filter((so) => so.optionId !== opt.id);
                              return [
                                ...filtered,
                                {
                                  optionId: opt.id,
                                  optionName: opt.name,
                                  valueId: val.id,
                                  valueName: val.name,
                                  extraPrice: val.extraPrice,
                                },
                              ];
                            });
                          }}
                          className={`p-2 rounded-xl text-xs font-medium border text-left transition-all ${
                            isSelected
                              ? 'bg-emerald-50 border-emerald-600 text-emerald-800 font-bold'
                              : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <div>{val.name}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-2 pt-3 border-t border-gray-100">
              <button
                onClick={() => setCustomizingProduct(null)}
                className="flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl"
              >
                Hủy
              </button>
              <button
                onClick={handleConfirmAddProduct}
                className="flex-1 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30"
              >
                Thêm Vào Giỏ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CHECKOUT MODAL */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <h3 className="font-extrabold text-base text-gray-900">Thanh Toán Hóa Đơn</h3>
                <p className="text-xs text-gray-500">
                  {selectedTable ? `Bàn: ${selectedTable.name}` : 'Đơn mang về'}
                </p>
              </div>
              <button
                onClick={() => setShowCheckoutModal(false)}
                className="p-1 text-gray-400 hover:text-gray-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Phương Thức Thanh Toán
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setPaymentMethod('Cash')}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                      paymentMethod === 'Cash'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-800 font-bold'
                        : 'bg-gray-50 border-gray-200 text-gray-700'
                    }`}
                  >
                    <Banknote className="w-6 h-6 mb-1 text-emerald-600" />
                    <span className="text-xs">Tiền Mặt</span>
                  </button>

                  <button
                    onClick={() => setPaymentMethod('QR')}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                      paymentMethod === 'QR'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-800 font-bold'
                        : 'bg-gray-50 border-gray-200 text-gray-700'
                    }`}
                  >
                    <QrCode className="w-6 h-6 mb-1 text-teal-600" />
                    <span className="text-xs">Chuyển Khoản QR</span>
                  </button>

                  <button
                    onClick={() => setPaymentMethod('Card')}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                      paymentMethod === 'Card'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-800 font-bold'
                        : 'bg-gray-50 border-gray-200 text-gray-700'
                    }`}
                  >
                    <CreditCard className="w-6 h-6 mb-1 text-blue-600" />
                    <span className="text-xs">Thẻ POS</span>
                  </button>
                </div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex justify-between items-center">
                <span className="text-xs font-semibold text-emerald-900">Tổng tiền cần thu:</span>
                <span className="text-lg font-black text-emerald-700">
                  {formatCurrency(finalTotal)}
                </span>
              </div>
            </div>

            <div className="flex space-x-2 pt-3 border-t border-gray-100">
              <button
                onClick={() => setShowCheckoutModal(false)}
                className="flex-1 py-3 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl"
              >
                Quay Lại
              </button>
              <button
                onClick={handleCompletePayment}
                className="flex-1 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-600/30"
              >
                Xác Nhận & In Hóa Đơn
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessToast && (
        <div className="fixed bottom-20 right-5 z-50 flex items-center p-4 bg-gray-900 text-white rounded-2xl shadow-2xl border border-gray-800 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
          <span className="text-xs font-bold">{successMsg}</span>
        </div>
      )}
    </div>
  );
};
