import React, { useState } from 'react';
import { INITIAL_KITCHEN_TICKETS } from '../../utils/mockData';
import { KitchenTicketItem } from '../../types';
import { formatTime } from '../../utils/formatters';
import {
  ChefHat,
  Clock,
  CheckCircle2,
  Play,
  Check,
  UtensilsCrossed,
} from 'lucide-react';

export const KitchenPage: React.FC = () => {
  const [tickets, setTickets] = useState<KitchenTicketItem[]>(INITIAL_KITCHEN_TICKETS);
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  const handleUpdateStatus = (id: string, newStatus: 'Pending' | 'Cooking' | 'Ready' | 'Served') => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };

  const filteredTickets = tickets.filter((t) =>
    statusFilter === 'ALL' ? true : t.status === statusFilter
  );

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-amber-100 text-amber-800 rounded-xl">
            <ChefHat className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-gray-900">Màn Hình Bếp & Pha Chế (KDS)</h2>
            <p className="text-xs text-gray-500 font-medium">Theo dõi và cập nhật tiến độ chế biến món ăn</p>
          </div>
        </div>

        <div className="flex p-1 bg-gray-100 rounded-xl space-x-1">
          <button
            onClick={() => setStatusFilter('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              statusFilter === 'ALL' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
            }`}
          >
            Tất Cả ({tickets.length})
          </button>
          <button
            onClick={() => setStatusFilter('Pending')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              statusFilter === 'Pending' ? 'bg-rose-500 text-white shadow-sm' : 'text-gray-600'
            }`}
          >
            Chờ Làm ({tickets.filter((t) => t.status === 'Pending').length})
          </button>
          <button
            onClick={() => setStatusFilter('Cooking')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              statusFilter === 'Cooking' ? 'bg-amber-500 text-white shadow-sm' : 'text-gray-600'
            }`}
          >
            Đang Chế Biến ({tickets.filter((t) => t.status === 'Cooking').length})
          </button>
          <button
            onClick={() => setStatusFilter('Ready')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              statusFilter === 'Ready' ? 'bg-emerald-600 text-white shadow-sm' : 'text-gray-600'
            }`}
          >
            Hoàn Tất ({tickets.filter((t) => t.status === 'Ready').length})
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-1">
        {filteredTickets.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center h-64 text-gray-400 bg-white rounded-2xl border border-gray-200">
            <UtensilsCrossed className="w-12 h-12 mb-2 opacity-30" />
            <p className="text-sm font-bold text-gray-500">Không có món ăn nào trong hàng chờ</p>
          </div>
        ) : (
          filteredTickets.map((ticket) => {
            const isPending = ticket.status === 'Pending';
            const isCooking = ticket.status === 'Cooking';
            const isReady = ticket.status === 'Ready';

            let cardBorder = 'border-gray-200';
            let headerBg = 'bg-gray-100 text-gray-800';

            if (isPending) {
              cardBorder = 'border-rose-300 ring-2 ring-rose-500/20';
              headerBg = 'bg-rose-500 text-white';
            } else if (isCooking) {
              cardBorder = 'border-amber-300 ring-2 ring-amber-500/20';
              headerBg = 'bg-amber-500 text-white';
            } else if (isReady) {
              cardBorder = 'border-emerald-300';
              headerBg = 'bg-emerald-600 text-white';
            }

            return (
              <div
                key={ticket.id}
                className={`flex flex-col justify-between bg-white rounded-2xl border-2 shadow-sm overflow-hidden transition-all ${cardBorder}`}
              >
                <div className={`flex items-center justify-between px-4 py-2.5 ${headerBg}`}>
                  <div className="font-extrabold text-sm">{ticket.tableName} ({ticket.areaName})</div>
                  <div className="flex items-center text-xs font-semibold space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{ticket.elapsedMinutes} phút</span>
                  </div>
                </div>

                <div className="p-4 space-y-3 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-base font-extrabold text-gray-900 leading-tight">
                        {ticket.productName}
                      </h4>
                      {ticket.optionsText && (
                        <p className="text-xs text-gray-600 font-medium mt-1">
                          {ticket.optionsText}
                        </p>
                      )}
                      {ticket.note && (
                        <p className="text-xs text-rose-600 font-bold bg-rose-50 px-2 py-1 rounded-md mt-1 border border-rose-200 inline-block">
                          ⚠️ {ticket.note}
                        </p>
                      )}
                    </div>

                    <span className="flex items-center justify-center w-8 h-8 font-black text-sm bg-gray-100 text-gray-900 rounded-xl border border-gray-200">
                      x{ticket.quantity}
                    </span>
                  </div>

                  <div className="text-[11px] text-gray-400 font-medium">
                    Mã đơn: {ticket.orderCode} • Nhận lúc: {formatTime(ticket.createdAt)}
                  </div>
                </div>

                <div className="p-3 bg-gray-50 border-t border-gray-100">
                  {isPending && (
                    <button
                      onClick={() => handleUpdateStatus(ticket.id, 'Cooking')}
                      className="flex items-center justify-center w-full py-2.5 text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 rounded-xl shadow-md transition-colors"
                    >
                      <Play className="w-4 h-4 mr-1.5" />
                      <span>BẮT ĐẦU CHẾ BIẾN</span>
                    </button>
                  )}

                  {isCooking && (
                    <button
                      onClick={() => handleUpdateStatus(ticket.id, 'Ready')}
                      className="flex items-center justify-center w-full py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-colors"
                    >
                      <Check className="w-4 h-4 mr-1.5" />
                      <span>HOÀN TẤT (BÁO PHỤC VỤ)</span>
                    </button>
                  )}

                  {isReady && (
                    <div className="flex items-center justify-center py-2 text-xs font-bold text-emerald-700 bg-emerald-50 rounded-xl border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4 mr-1.5" />
                      <span>Đã Xong - Chờ Phục Vụ</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
