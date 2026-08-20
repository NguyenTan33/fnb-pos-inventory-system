import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { authApi } from '../api/authApi';
import {
  LogOut,
  ShieldCheck,
  Key,
  UserCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Lock,
  Terminal,
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user, token, logout } = useAuth();

  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [isLoadingApi, setIsLoadingApi] = useState(false);

  const handleTestAuth = async () => {
    setApiResponse(null);
    setApiError(null);
    setIsLoadingApi(true);

    try {
      const res = await authApi.testAuth();
      setApiResponse(res);
    } catch (err: any) {
      console.error(err);
      setApiError(err.response?.data || err.message || 'Lỗi 401 Unauthorized / Token không hợp lệ.');
    } finally {
      setIsLoadingApi(false);
    }
  };

  const handleTestUserRole = async () => {
    setApiResponse(null);
    setApiError(null);
    setIsLoadingApi(true);

    try {
      const res = await authApi.testUserRole();
      setApiResponse(res);
    } catch (err: any) {
      console.error(err);
      setApiError(err.response?.data || err.message || 'Lỗi 403 Forbidden: Bạn không có role "User" hoặc "Admin".');
    } finally {
      setIsLoadingApi(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Top Bar Header */}
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl font-black">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-base font-extrabold text-gray-900">Auth Dashboard System</h1>
              <p className="text-xs text-gray-500 font-medium">Trạng Thái Xác Thực JWT & Kiểm Tra Phân Quyền Backend API</p>
            </div>
          </div>

          <button
            onClick={logout}
            className="flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl border border-rose-200 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Đăng Xuất</span>
          </button>
        </div>

        {/* Logged-in User Profile Information */}
        <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 text-xs font-extrabold text-emerald-700 uppercase tracking-wider">
            <UserCheck className="w-4 h-4" />
            <span>Thông Tin Tài Khoản Đã Đăng Nhập</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-gray-400 font-medium">Username</div>
              <div className="font-extrabold text-gray-900 text-sm mt-0.5">{user?.username}</div>
            </div>

            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-gray-400 font-medium">User ID</div>
              <div className="font-mono text-gray-800 text-xs mt-0.5 truncate">{user?.id}</div>
            </div>

            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-gray-400 font-medium">Danh Sách Roles</div>
              <div className="flex flex-wrap gap-1 mt-1">
                {user?.roles?.map((role, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded-md"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* JWT Token View */}
          <div className="pt-2">
            <div className="flex items-center space-x-1 text-xs font-bold text-gray-700 mb-1.5">
              <Key className="w-3.5 h-3.5 text-amber-500" />
              <span>JWT Access Token (Header: Authorization Bearer)</span>
            </div>
            <div className="p-3 bg-slate-900 text-emerald-400 font-mono text-[11px] rounded-xl overflow-x-auto break-all">
              {token}
            </div>
          </div>
        </div>

        {/* Backend Endpoint Tester Panel */}
        <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 text-xs font-extrabold text-gray-900 uppercase tracking-wider">
            <Terminal className="w-4 h-4 text-emerald-600" />
            <span>Kiểm Tra Gọi API Backend Protected Endpoints</span>
          </div>

          <p className="text-xs text-gray-500 font-medium">
            Bấm các nút bên dưới để Axios gửi HTTP Request kèm JWT Token sang backend C# API.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleTestAuth}
              disabled={isLoadingApi}
              className="flex items-center space-x-2 px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30 transition-all disabled:opacity-50"
            >
              <Lock className="w-4 h-4" />
              <span>Gọi Test Auth: /api/Auth/test-auth</span>
            </button>

            <button
              onClick={handleTestUserRole}
              disabled={isLoadingApi}
              className="flex items-center space-x-2 px-4 py-2.5 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-md shadow-teal-600/30 transition-all disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4" />
              <span>Gọi Test Role: /api/Auth/test-user-role</span>
            </button>
          </div>

          {/* Response Box */}
          {isLoadingApi && (
            <div className="p-4 text-xs font-semibold text-gray-600 bg-gray-50 rounded-xl animate-pulse">
              Đang gửi HTTP Request đến Backend API...
            </div>
          )}

          {apiResponse && (
            <div className="flex items-center p-4 text-xs font-bold text-emerald-800 bg-emerald-50 rounded-xl border border-emerald-200">
              <CheckCircle2 className="w-5 h-5 mr-2.5 text-emerald-600 flex-shrink-0" />
              <span>Phản hồi thành công từ Backend: "{apiResponse}"</span>
            </div>
          )}

          {apiError && (
            <div className="flex items-center p-4 text-xs font-bold text-rose-800 bg-rose-50 rounded-xl border border-rose-200">
              <AlertCircle className="w-5 h-5 mr-2.5 text-rose-600 flex-shrink-0" />
              <span>Lỗi từ Backend: "{apiError}"</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
