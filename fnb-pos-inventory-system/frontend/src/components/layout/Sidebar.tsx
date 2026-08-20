import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  Monitor,
  ChefHat,
  Boxes,
  BarChart3,
  Users,
  Clock,
  X,
  Sparkles,
} from 'lucide-react';

interface SidebarProps {
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, onCloseMobile }) => {
  const { user, loginAsDemoRole } = useAuth();

  const navItems = [
    {
      name: 'POS Thu Ngân',
      path: '/pos',
      icon: Monitor,
      badge: 'Chính',
      badgeColor: 'bg-emerald-100 text-emerald-700',
    },
    {
      name: 'Màn Hình Bếp (KDS)',
      path: '/kitchen',
      icon: ChefHat,
      badge: 'Live',
      badgeColor: 'bg-amber-100 text-amber-800',
    },
    {
      name: 'Quản Lý Kho & Nguyên Liệu',
      path: '/inventory',
      icon: Boxes,
    },
    {
      name: 'Báo Cáo & Thống Kê',
      path: '/dashboard',
      icon: BarChart3,
    },
    {
      name: 'Khách Hàng & Loyalty',
      path: '/customers',
      icon: Users,
    },
    {
      name: 'Điểm Danh Nhân Viên',
      path: '/attendance',
      icon: Clock,
    },
  ];

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm md:hidden transition-opacity"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col w-64 bg-white border-r border-gray-200 shadow-lg md:shadow-none md:static md:translate-x-0 transition-transform duration-200 ease-in-out ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-100 md:hidden bg-gray-50">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 font-bold text-white rounded-lg bg-emerald-600">
              POS
            </div>
            <span className="font-bold text-gray-900">F&B Management</span>
          </div>
          <button
            onClick={onCloseMobile}
            className="p-1.5 text-gray-500 rounded-lg hover:bg-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 px-3 py-4 overflow-y-auto space-y-1">
          <div className="px-3 pb-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            Phân Hệ Quản Lý FE
          </div>

          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onCloseMobile}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 font-semibold'
                      : 'text-gray-600 hover:bg-emerald-50/70 hover:text-emerald-700'
                  }`
                }
              >
                <div className="flex items-center space-x-3">
                  <IconComponent className="w-5 h-5 flex-shrink-0" />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span
                    className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Quick Role Switcher */}
        <div className="p-3 m-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
          <div className="flex items-center space-x-1.5 text-emerald-800 font-bold text-xs mb-2">
            <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span>Đổi Vai Trò Xem Demo</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => loginAsDemoRole('Admin')}
              className={`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${
                user?.role === 'Admin'
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              👑 Admin
            </button>
            <button
              onClick={() => loginAsDemoRole('Cashier')}
              className={`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${
                user?.role === 'Cashier'
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              💵 Thu Ngân
            </button>
            <button
              onClick={() => loginAsDemoRole('Kitchen')}
              className={`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${
                user?.role === 'Kitchen'
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              🍳 Bếp
            </button>
            <button
              onClick={() => loginAsDemoRole('Warehouse')}
              className={`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${
                user?.role === 'Warehouse'
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              📦 Kho
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
