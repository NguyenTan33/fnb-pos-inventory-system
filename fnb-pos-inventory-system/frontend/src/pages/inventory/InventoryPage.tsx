import React, { useState } from 'react';
import { INITIAL_INVENTORY } from '../../utils/mockData';
import { InventoryItem } from '../../types';
import { formatCurrency, formatDateTime } from '../../utils/formatters';
import {
  Boxes,
  AlertTriangle,
  Search,
  Plus,
  CheckCircle2,
  X,
  Truck,
} from 'lucide-react';

export const InventoryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'items' | 'orders'>('items');
  const [inventoryList, setInventoryList] = useState<InventoryItem[]>(INITIAL_INVENTORY);
  const [searchQuery, setSearchQuery] = useState('');

  const [showAddModal, setShowAddModal] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemCode, setNewItemCode] = useState('');
  const [newItemUnit, setNewItemUnit] = useState('kg');
  const [newItemStock, setNewItemStock] = useState(10);
  const [newItemPrice, setNewItemPrice] = useState(50000);

  const filteredItems = inventoryList.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: InventoryItem = {
      id: `inv-${Date.now()}`,
      code: newItemCode || `RM00${inventoryList.length + 1}`,
      name: newItemName,
      unit: newItemUnit,
      minStock: 5,
      currentStock: Number(newItemStock),
      unitPrice: Number(newItemPrice),
      category: 'Nguyên liệu pha chế',
      lastUpdated: new Date().toISOString(),
    };
    setInventoryList([newItem, ...inventoryList]);
    setShowAddModal(false);
    setNewItemName('');
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-800 rounded-xl">
            <Boxes className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-gray-900">Quản Lý Kho & Nguyên Liệu</h2>
            <p className="text-xs text-gray-500 font-medium">Theo dõi tồn kho thực tế, nhập kho và định lượng món</p>
          </div>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Thêm Nguyên Liệu Mới</span>
        </button>
      </div>

      <div className="flex space-x-2 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('items')}
          className={`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${
            activeTab === 'items'
              ? 'border-emerald-600 text-emerald-700'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Danh Mục Nguyên Liệu ({inventoryList.length})
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${
            activeTab === 'orders'
              ? 'border-emerald-600 text-emerald-700'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Đơn Nhập Kho (PO)
        </button>
      </div>

      {activeTab === 'items' && (
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-3">
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm tên nguyên liệu hoặc mã nguyên liệu..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  <th className="p-3">Mã NL</th>
                  <th className="p-3">Tên Nguyên Liệu</th>
                  <th className="p-3">Đơn Vị Tính</th>
                  <th className="p-3">Tồn Kho Hiện Tại</th>
                  <th className="p-3">Đơn Giá Nhập</th>
                  <th className="p-3">Trạng Thái</th>
                  <th className="p-3 text-right">Cập Nhật</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                {filteredItems.map((item) => {
                  const isLowStock = item.currentStock <= item.minStock;
                  return (
                    <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="p-3 font-bold text-gray-800">{item.code}</td>
                      <td className="p-3 font-bold text-gray-900">{item.name}</td>
                      <td className="p-3 font-medium text-gray-600">{item.unit}</td>
                      <td className="p-3 font-extrabold text-gray-900">
                        {item.currentStock} {item.unit}
                      </td>
                      <td className="p-3 font-semibold text-emerald-700">
                        {formatCurrency(item.unitPrice)}
                      </td>
                      <td className="p-3">
                        {isLowStock ? (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800">
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            Sắp Hết Kho
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            An Toàn
                          </span>
                        )}
                      </td>
                      <td className="p-3 text-right text-[11px] text-gray-400">
                        {formatDateTime(item.lastUpdated)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm text-center">
          <Truck className="w-12 h-12 text-blue-500 mx-auto mb-2 opacity-80" />
          <h3 className="text-sm font-bold text-gray-900">Danh Sách Đơn Mua Hàng Nhà Cung Cấp (PO)</h3>
          <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
            Hệ thống hỗ trợ duyệt đơn nhập kho, kiểm hàng tự động cộng tồn kho tức thì.
          </p>
        </div>
      )}

      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="font-extrabold text-base text-gray-900">Thêm Nguyên Liệu Kho Mới</h3>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddItem} className="py-4 space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Mã Nguyên Liệu</label>
                <input
                  type="text"
                  value={newItemCode}
                  onChange={(e) => setNewItemCode(e.target.value)}
                  placeholder="Ví dụ: RM006"
                  className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Tên Nguyên Liệu (*)</label>
                <input
                  type="text"
                  required
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  placeholder="Ví dụ: Bột Matcha Nhật Bản"
                  className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Đơn Vị Tính</label>
                  <input
                    type="text"
                    value={newItemUnit}
                    onChange={(e) => setNewItemUnit(e.target.value)}
                    placeholder="kg, Hộp, Chai..."
                    className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Số Lượng Ban Đầu</label>
                  <input
                    type="number"
                    value={newItemStock}
                    onChange={(e) => setNewItemStock(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Đơn Giá Nhập (₫)</label>
                <input
                  type="number"
                  value={newItemPrice}
                  onChange={(e) => setNewItemPrice(Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex space-x-2 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 text-xs font-bold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 shadow-md shadow-emerald-600/30"
                >
                  Lưu Nguyên Liệu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
