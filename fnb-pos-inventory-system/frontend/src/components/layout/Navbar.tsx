import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {
  Menu,
  Bell,
  LogOut,
  Store,
  ShieldCheck,
  ChevronDown,
  PhoneCall,
} from 'lucide-react';

interface NavbarProps {
  onToggleMobileSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleMobileSidebar }) => {
  const { user, logout } = useAuth();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState('Chi nhánh Quận 1 (Chính)');

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 shadow-sm md:px-6">
      {/* Left side */}
      <div className="flex items-center space-x-3 md:space-x-4">
        <button
          onClick={onToggleMobileSidebar}
          className="p-2 text-gray-600 rounded-lg hover:bg-gray-100 md:hidden focus:outline-none"
          title="Mở menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex items-center space-x-2.5">
          <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 shadow-md shadow-emerald-500/20">
            F&B
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold tracking-tight text-gray-900">F&B POS & Inventory</span>
            <span className="block text-[10px] font-semibold tracking-wider text-emerald-600 uppercase">Hệ Thống Thu Ngân & Kho</span>
          </div>
        </div>

        <div className="relative hidden lg:block ml-4">
          <div className="flex items-center px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors">
            <Store className="w-4 h-4 mr-1.5 text-emerald-600" />
            <span>{selectedBranch}</span>
            <ChevronDown className="w-3.5 h-3.5 ml-1.5 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <div className="hidden sm:flex items-center text-xs font-medium text-gray-500 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200">
          <PhoneCall className="w-3.5 h-3.5 mr-1" />
          <span>Hotline: 1900 6868</span>
        </div>

        <button
          className="relative p-2 text-gray-600 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
          title="Thông báo"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full animate-ping"></span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>

        <div className="relative">
          <button
            onClick={() => setShowUserDropdown(!showUserDropdown)}
            className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm border border-emerald-300">
              {(user?.fullName || user?.username || 'U').charAt(0).toUpperCase()}
            </div>
            <div className="hidden md:block text-left">
              <div className="text-xs font-semibold text-gray-800 leading-tight">{user?.fullName || user?.username}</div>
              <div className="text-[10px] text-emerald-600 font-medium">{user?.role || user?.roles?.[0] || 'Staff'}</div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block" />
          </button>

          {showUserDropdown && (
            <div
              className="absolute right-0 w-56 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              onMouseLeave={() => setShowUserDropdown(false)}
            >
              <div className="px-4 py-2.5 border-b border-gray-100 bg-gray-50/50">
                <p className="text-xs text-gray-500 font-medium">Đang đăng nhập với</p>
                <p className="text-sm font-bold text-gray-900 truncate">{user?.fullName || user?.username}</p>
                <span className="inline-flex items-center px-2 py-0.5 mt-1 text-[10px] font-semibold text-emerald-800 bg-emerald-100 rounded-md">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  Role: {user?.role || user?.roles?.[0] || 'User'}
                </span>
              </div>

              <div className="py-1">
                <button
                  onClick={() => {
                    setShowUserDropdown(false);
                    logout();
                  }}
                  className="flex items-center w-full px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Đăng xuất tài khoản
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
