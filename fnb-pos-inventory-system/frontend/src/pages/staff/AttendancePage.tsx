import React, { useState } from 'react';
import { INITIAL_ATTENDANCE } from '../../utils/mockData';
import { AttendanceRecord } from '../../types';
import { useAuth } from '../../contexts/AuthContext';
import { Clock, LogIn, LogOut, CheckCircle2 } from 'lucide-react';

export const AttendancePage: React.FC = () => {
  const { user } = useAuth();
  const [attendanceList, setAttendanceList] = useState<AttendanceRecord[]>(INITIAL_ATTENDANCE);
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  const handleToggleCheckIn = () => {
    if (!isCheckedIn) {
      const newRec: AttendanceRecord = {
        id: `att-${Date.now()}`,
        employeeName: user?.fullName || user?.username || 'Nhân viên mới',
        role: user?.role || user?.roles?.[0] || 'Cashier',
        checkInTime: new Date().toLocaleTimeString('vi-VN'),
        shiftName: 'Ca Sáng (07:00 - 15:00)',
        status: 'Working',
      };
      setAttendanceList([newRec, ...attendanceList]);
      setIsCheckedIn(true);
    } else {
      setIsCheckedIn(false);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-emerald-100 text-xs font-bold uppercase tracking-wider mb-1">
            <Clock className="w-4 h-4" />
            <span>Màn Hình Điểm Danh Ca Làm Việc</span>
          </div>
          <h2 className="text-2xl font-black">Xin chào, {user?.fullName || user?.username}!</h2>
          <p className="text-xs text-emerald-100 mt-0.5">
            Thời gian hiện tại: {new Date().toLocaleTimeString('vi-VN')} • Ca Sáng
          </p>
        </div>

        <button
          onClick={handleToggleCheckIn}
          className={`flex items-center space-x-2 px-6 py-3.5 rounded-2xl text-xs font-black shadow-xl transition-all ${
            isCheckedIn
              ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-rose-900/30'
              : 'bg-white text-emerald-800 hover:bg-emerald-50 shadow-emerald-900/30'
          }`}
        >
          {isCheckedIn ? (
            <>
              <LogOut className="w-4 h-4" />
              <span>CHECK-OUT KẾT THÚC CA</span>
            </>
          ) : (
            <>
              <LogIn className="w-4 h-4" />
              <span>CHECK-IN BẮT ĐẦU CA</span>
            </>
          )}
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-3">
        <h3 className="font-extrabold text-sm text-gray-900">Bảng Theo Dõi Điểm Danh Ca Làm Việc</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                <th className="p-3">Nhân Viên</th>
                <th className="p-3">Vai Trò</th>
                <th className="p-3">Ca Làm Việc</th>
                <th className="p-3">Giờ Check-in</th>
                <th className="p-3 text-right">Trạng Thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              {attendanceList.map((rec) => (
                <tr key={rec.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="p-3 font-bold text-gray-900">{rec.employeeName}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-gray-100 text-gray-700 rounded-md">
                      {rec.role}
                    </span>
                  </td>
                  <td className="p-3 font-medium text-gray-600">{rec.shiftName}</td>
                  <td className="p-3 font-semibold text-emerald-700">{rec.checkInTime}</td>
                  <td className="p-3 text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Đang Trong Ca
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
