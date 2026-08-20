import React from 'react';
import { INITIAL_DASHBOARD } from '../../utils/mockData';
import { formatCurrency } from '../../utils/formatters';
import {
  TrendingUp,
  DollarSign,
  ShoppingBag,
  Users,
  Award,
  Calendar,
  ArrowUpRight,
  BarChart2,
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const stats = INITIAL_DASHBOARD;

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl">
            <BarChart2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-gray-900">Báo Cáo & Thống Kê Kinh Doanh</h2>
            <p className="text-xs text-gray-500 font-medium">Tổng quan doanh thu, đơn hàng và sản phẩm bán chạy</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-xl border border-gray-200">
          <Calendar className="w-4 h-4 text-emerald-600" />
          <span>Hôm nay: {new Date().toLocaleDateString('vi-VN')}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Doanh Thu Hôm Nay</span>
            <div className="p-2 bg-emerald-50 text-emerald-700 rounded-xl">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-gray-900">{formatCurrency(stats.todayRevenue)}</div>
            <div className="flex items-center text-xs font-semibold text-emerald-600 mt-1">
              <ArrowUpRight className="w-4 h-4 mr-0.5" />
              <span>+{stats.revenueGrowthPercent}% so với hôm qua</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Số Đơn Phục Vụ</span>
            <div className="p-2 bg-blue-50 text-blue-700 rounded-xl">
              <ShoppingBag className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-gray-900">{stats.todayOrders} đơn</div>
            <div className="flex items-center text-xs font-semibold text-emerald-600 mt-1">
              <ArrowUpRight className="w-4 h-4 mr-0.5" />
              <span>+{stats.ordersGrowthPercent}% tăng trưởng</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Giá Trị Đơn Trung Bình</span>
            <div className="p-2 bg-purple-50 text-purple-700 rounded-xl">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-gray-900">{formatCurrency(stats.averageOrderValue)}</div>
            <div className="text-xs font-medium text-gray-400 mt-1">Tính trên {stats.todayOrders} hóa đơn</div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Tải Bàn Hiện Tại</span>
            <div className="p-2 bg-amber-50 text-amber-700 rounded-xl">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-gray-900">
              {stats.activeTablesCount} / {stats.totalTablesCount} Bàn
            </div>
            <div className="text-xs font-semibold text-amber-600 mt-1">
              Công suất: {Math.round((stats.activeTablesCount / stats.totalTablesCount) * 100)}%
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-extrabold text-sm text-gray-900">Biểu Đồ Doanh Thu Theo Giờ</h3>
            <span className="text-xs text-gray-400 font-medium">Đơn vị: VNĐ</span>
          </div>

          <div className="flex items-end justify-between h-56 pt-6 px-2 border-b border-gray-100">
            {stats.revenueChartData.map((item, index) => {
              const maxVal = Math.max(...stats.revenueChartData.map((d) => d.amount));
              const heightPercent = Math.round((item.amount / maxVal) * 100);

              return (
                <div key={index} className="flex flex-col items-center flex-1 mx-1 group">
                  <div className="text-[10px] font-bold text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity mb-1">
                    {formatCurrency(item.amount)}
                  </div>
                  <div className="w-full bg-emerald-100 group-hover:bg-emerald-600 rounded-t-xl transition-all duration-200" style={{ height: `${heightPercent}%` }} />
                  <div className="text-[11px] font-semibold text-gray-500 mt-2">{item.time}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className="font-extrabold text-sm text-gray-900">Top Sản Phẩm Bán Chạy</h3>
          </div>

          <div className="space-y-3 divide-y divide-gray-50">
            {stats.topSellingProducts.map((prod, index) => (
              <div key={index} className="flex items-center justify-between pt-2.5 first:pt-0">
                <div className="flex items-center space-x-3">
                  <span className={`flex items-center justify-center w-6 h-6 rounded-lg text-xs font-black ${
                    index === 0 ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {index + 1}
                  </span>
                  <div>
                    <div className="text-xs font-bold text-gray-900">{prod.name}</div>
                    <div className="text-[10px] text-gray-500 font-medium">Đã bán: {prod.quantity} phần</div>
                  </div>
                </div>
                <div className="text-xs font-extrabold text-emerald-700">
                  {formatCurrency(prod.revenue)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
