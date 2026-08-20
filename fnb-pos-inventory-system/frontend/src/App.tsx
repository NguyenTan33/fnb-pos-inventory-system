import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { AppLayout } from './components/layout/AppLayout';
import { AuthPage } from './pages/AuthPage';
import { POSTerminalPage } from './pages/pos/POSTerminalPage';
import { KitchenPage } from './pages/kitchen/KitchenPage';
import { InventoryPage } from './pages/inventory/InventoryPage';
import { DashboardPage } from './pages/admin/DashboardPage';
import { CustomersPage } from './pages/customer/CustomersPage';
import { AttendancePage } from './pages/staff/AttendancePage';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<AuthPage />} />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/pos" replace />} />
              <Route path="pos" element={<POSTerminalPage />} />
              <Route path="kitchen" element={<KitchenPage />} />
              <Route path="inventory" element={<InventoryPage />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="customers" element={<CustomersPage />} />
              <Route path="attendance" element={<AttendancePage />} />
            </Route>

            <Route path="*" element={<Navigate to="/pos" replace />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
