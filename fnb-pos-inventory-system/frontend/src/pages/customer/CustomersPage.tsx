import React, { useState } from 'react';
import { INITIAL_CUSTOMERS, INITIAL_VOUCHERS } from '../../utils/mockData';
import { Customer, Voucher } from '../../types';
import { formatCurrency } from '../../utils/formatters';
import { Users, Ticket, Award, Plus, Search, X } from 'lucide-react';

export const CustomersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'customers' | 'vouchers'>('customers');
  const [customers] = useState<Customer[]>(INITIAL_CUSTOMERS);
  const [vouchers, setVouchers] = useState<Voucher[]>(INITIAL_VOUCHERS);
  const [searchQuery, setSearchQuery] = useState('');

  const [showVoucherModal, setShowVoucherModal] = useState(false);
  const [vCode, setVCode] = useState('');
  const [vValue, setVValue] = useState(20000);

  const filteredCustomers = customers.filter(
    (c) =>
      c.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.phoneNumber.includes(searchQuery)
  );

  const handleAddVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    const newV: Voucher = {
      id: `v-${Date.now()}`,
      code: vCode.toUpperCase() || 'KM2026',
      discountType: 'FixedAmount',
      discountValue: Number(vValue),
      minOrderValue: 100000,
      validUntil: '2026-12-31',
      usageLimit: 200,
      usedCount: 0,
      isActive: true,
    };
    setVouchers([newV, ...vouchers]);
    setShowVoucherModal(false);
    setVCode('');
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-purple-100 text-purple-800 rounded-xl">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-gray-900">Khách Hàng & Chương Trình Khuyến Mãi</h2>
            <p className="text-xs text-gray-500 font-medium">Quản lý thành viên tích điểm và mã giảm giá Voucher</p>
          </div>
        </div>

        {activeTab === 'vouchers' && (
          <button
            onClick={() => setShowVoucherModal(true)}
            className="flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Tạo Voucher Mới</span>
          </button>
        )}
      </div>

      <div className="flex space-x-2 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('customers')}
          className={`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${
            activeTab === 'customers'
              ? 'border-emerald-600 text-emerald-700'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Danh Sách Khách Hàng ({customers.length})
        </button>
        <button
          onClick={() => setActiveTab('vouchers')}
          className={`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${
            activeTab === 'vouchers'
              ? 'border-emerald-600 text-emerald-700'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Mã Giảm Giá Voucher ({vouchers.length})
        </button>
      </div>

      {activeTab === 'customers' && (
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-3">
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên hoặc số điện thoại khách hàng..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  <th className="p-3">Họ & Tên</th>
                  <th className="p-3">Số Điện Thoại</th>
                  <th className="p-3">Điểm Tích Lũy</th>
                  <th className="p-3">Hạng Thành Viên</th>
                  <th className="p-3">Tổng Chi Tiêu</th>
                  <th className="p-3 text-right">Lần Ghé Gần Nhất</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                {filteredCustomers.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="p-3 font-bold text-gray-900">{c.fullName}</td>
                    <td className="p-3 font-medium text-gray-700">{c.phoneNumber}</td>
                    <td className="p-3 font-extrabold text-amber-600">{c.points} điểm</td>
                    <td className="p-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        c.tier === 'Diamond' ? 'bg-purple-100 text-purple-800' :
                        c.tier === 'Gold' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        <Award className="w-3 h-3 mr-1" />
                        Hạng {c.tier}
                      </span>
                    </td>
                    <td className="p-3 font-bold text-emerald-700">{formatCurrency(c.totalSpent)}</td>
                    <td className="p-3 text-right text-[11px] text-gray-400">{c.lastVisit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'vouchers' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vouchers.map((v) => (
            <div key={v.id} className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl font-black">
                  <Ticket className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-black text-gray-900 tracking-wider">{v.code}</div>
                  <div className="text-xs font-bold text-emerald-700">
                    {v.discountType === 'Percentage' ? `Giảm ${v.discountValue}%` : `Giảm ${formatCurrency(v.discountValue)}`}
                  </div>
                  <div className="text-[10px] text-gray-400">Đơn từ {formatCurrency(v.minOrderValue)} • Hạn: {v.validUntil}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showVoucherModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="font-extrabold text-base text-gray-900">Tạo Mã Giảm Giá Mới</h3>
              <button onClick={() => setShowVoucherModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddVoucher} className="py-4 space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Mã Voucher (*)</label>
                <input
                  type="text"
                  required
                  value={vCode}
                  onChange={(e) => setVCode(e.target.value)}
                  placeholder="Ví dụ: KM30K"
                  className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 uppercase font-bold tracking-wider"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Số Tiền Giảm (₫)</label>
                <input
                  type="number"
                  value={vValue}
                  onChange={(e) => setVValue(Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex space-x-2 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setShowVoucherModal(false)}
                  className="flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 rounded-xl"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 text-xs font-bold text-white bg-emerald-600 rounded-xl shadow-md shadow-emerald-600/30"
                >
                  Tạo Voucher
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
