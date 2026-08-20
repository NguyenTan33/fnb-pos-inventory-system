import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Monitor, ChefHat, Boxes, BarChart3 } from 'lucide-react';

export const AppLayout: React.FC = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar onToggleMobileSidebar={() => setMobileSidebarOpen(true)} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          mobileOpen={mobileSidebarOpen}
          onCloseMobile={() => setMobileSidebarOpen(false)}
        />

        <main className="flex-1 overflow-y-auto pb-16 md:pb-6 p-3 sm:p-5 md:p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around h-14 bg-white border-t border-gray-200 md:hidden shadow-lg">
        <NavLink
          to="/pos"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${
              isActive ? 'text-emerald-600 font-bold' : 'text-gray-500'
            }`
          }
        >
          <Monitor className="w-5 h-5 mb-0.5" />
          <span>POS</span>
        </NavLink>

        <NavLink
          to="/kitchen"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${
              isActive ? 'text-emerald-600 font-bold' : 'text-gray-500'
            }`
          }
        >
          <ChefHat className="w-5 h-5 mb-0.5" />
          <span>Bếp</span>
        </NavLink>

        <NavLink
          to="/inventory"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${
              isActive ? 'text-emerald-600 font-bold' : 'text-gray-500'
            }`
          }
        >
          <Boxes className="w-5 h-5 mb-0.5" />
          <span>Kho</span>
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${
              isActive ? 'text-emerald-600 font-bold' : 'text-gray-500'
            }`
          }
        >
          <BarChart3 className="w-5 h-5 mb-0.5" />
          <span>Thống kê</span>
        </NavLink>
      </nav>
    </div>
  );
};
