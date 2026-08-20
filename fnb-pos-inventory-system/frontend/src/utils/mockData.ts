import { Area, Table, Category, Product, KitchenTicketItem, InventoryItem, DashboardStats, Customer, Voucher, AttendanceRecord } from '../types';

export const INITIAL_AREAS: Area[] = [
  { id: 'area-1', name: 'Tầng 1 - Sảnh chính', description: 'Khu vực máy lạnh sảnh trệt', tablesCount: 8 },
  { id: 'area-2', name: 'Tầng 2 - Lầu 1', description: 'Không gian ấm cúng, sofa', tablesCount: 6 },
  { id: 'area-3', name: 'Sân Thượng / Ngoại trời', description: 'Thoáng mát ngoài trời', tablesCount: 5 },
  { id: 'area-4', name: 'Phòng VIP', description: 'Phòng riêng tổ chức tiệc', tablesCount: 2 },
];

export const INITIAL_TABLES: Table[] = [
  { id: 't-101', code: 'T101', name: 'Bàn 101', areaId: 'area-1', areaName: 'Tầng 1 - Sảnh chính', capacity: 4, status: 'Occupied', currentOrderId: 'ORD-1001', totalAmount: 285000, occupiedAt: '2026-08-20T11:30:00' },
  { id: 't-102', code: 'T102', name: 'Bàn 102', areaId: 'area-1', areaName: 'Tầng 1 - Sảnh chính', capacity: 2, status: 'Available' },
  { id: 't-103', code: 'T103', name: 'Bàn 103', areaId: 'area-1', areaName: 'Tầng 1 - Sảnh chính', capacity: 4, status: 'Occupied', currentOrderId: 'ORD-1002', totalAmount: 410000, occupiedAt: '2026-08-20T12:05:00' },
  { id: 't-104', code: 'T104', name: 'Bàn 104', areaId: 'area-1', areaName: 'Tầng 1 - Sảnh chính', capacity: 6, status: 'Reserved' },
  { id: 't-105', code: 'T105', name: 'Bàn 105', areaId: 'area-1', areaName: 'Tầng 1 - Sảnh chính', capacity: 4, status: 'Cleaning' },
  { id: 't-106', code: 'T106', name: 'Bàn 106', areaId: 'area-1', areaName: 'Tầng 1 - Sảnh chính', capacity: 2, status: 'Available' },
  { id: 't-107', code: 'T107', name: 'Bàn 107', areaId: 'area-1', areaName: 'Tầng 1 - Sảnh chính', capacity: 8, status: 'Available' },
  { id: 't-108', code: 'T108', name: 'Bàn 108', areaId: 'area-1', areaName: 'Tầng 1 - Sảnh chính', capacity: 4, status: 'Available' },

  { id: 't-201', code: 'T201', name: 'Bàn 201', areaId: 'area-2', areaName: 'Tầng 2 - Lầu 1', capacity: 4, status: 'Occupied', currentOrderId: 'ORD-1003', totalAmount: 175000, occupiedAt: '2026-08-20T12:15:00' },
  { id: 't-202', code: 'T202', name: 'Bàn 202', areaId: 'area-2', areaName: 'Tầng 2 - Lầu 1', capacity: 2, status: 'Available' },
  { id: 't-203', code: 'T203', name: 'Bàn 203', areaId: 'area-2', areaName: 'Tầng 2 - Lầu 1', capacity: 4, status: 'Available' },
  { id: 't-204', code: 'T204', name: 'Bàn 204', areaId: 'area-2', areaName: 'Tầng 2 - Lầu 1', capacity: 6, status: 'Available' },

  { id: 't-301', code: 'ST01', name: 'Sân Thượng 1', areaId: 'area-3', areaName: 'Sân Thượng / Ngoại trời', capacity: 4, status: 'Available' },
  { id: 't-302', code: 'ST02', name: 'Sân Thượng 2', areaId: 'area-3', areaName: 'Sân Thượng / Ngoại trời', capacity: 4, status: 'Occupied', currentOrderId: 'ORD-1004', totalAmount: 520000, occupiedAt: '2026-08-20T11:45:00' },

  { id: 't-vip1', code: 'VIP1', name: 'Phòng VIP 1', areaId: 'area-4', areaName: 'Phòng VIP', capacity: 12, status: 'Reserved' },
  { id: 't-vip2', code: 'VIP2', name: 'Phòng VIP 2', areaId: 'area-4', areaName: 'Phòng VIP', capacity: 16, status: 'Available' },
];

export const INITIAL_CATEGORIES: Category[] = [
  { id: 'cat-all', name: 'Tất cả món', icon: 'Utensils', itemCount: 12 },
  { id: 'cat-coffee', name: 'Cà phê', icon: 'Coffee', itemCount: 4 },
  { id: 'cat-milktea', name: 'Trà sữa & Trà', icon: 'CupSoda', itemCount: 3 },
  { id: 'cat-food', name: 'Món ăn điểm tâm', icon: 'Pizza', itemCount: 3 },
  { id: 'cat-dessert', name: 'Bánh ngọt', icon: 'Cake', itemCount: 2 },
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    code: 'CF01',
    name: 'Cà Phê Sữa Đá Sài Gòn',
    categoryId: 'cat-coffee',
    categoryName: 'Cà phê',
    price: 35000,
    costPrice: 8000,
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80',
    isAvailable: true,
    description: 'Cà phê đậm đà kết hợp với sữa đặc béo ngậy truyền thống',
    options: [
      {
        id: 'opt-ice',
        name: 'Mức Đá',
        isRequired: true,
        values: [
          { id: 'ice-100', name: '100% Đá', extraPrice: 0 },
          { id: 'ice-50', name: '50% Đá', extraPrice: 0 },
          { id: 'ice-no', name: 'Không Đá', extraPrice: 0 },
        ],
      },
    ],
  },
  {
    id: 'prod-2',
    code: 'CF02',
    name: 'Bạc Xỉu Măng Đen',
    categoryId: 'cat-coffee',
    categoryName: 'Cà phê',
    price: 42000,
    costPrice: 10000,
    imageUrl: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=500&q=80',
    isAvailable: true,
  },
  {
    id: 'prod-3',
    code: 'CF03',
    name: 'Espresso Double Shot',
    categoryId: 'cat-coffee',
    categoryName: 'Cà phê',
    price: 38000,
    imageUrl: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=500&q=80',
    isAvailable: true,
  },
  {
    id: 'prod-4',
    code: 'CF04',
    name: 'Caramel Macchiato Đá',
    categoryId: 'cat-coffee',
    categoryName: 'Cà phê',
    price: 55000,
    imageUrl: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=500&q=80',
    isAvailable: true,
  },
  {
    id: 'prod-5',
    code: 'TM01',
    name: 'Trà Sữa Trân Châu Hoàng Gia',
    categoryId: 'cat-milktea',
    categoryName: 'Trà sữa & Trà',
    price: 49000,
    imageUrl: 'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=500&q=80',
    isAvailable: true,
    options: [
      {
        id: 'opt-topping',
        name: 'Topping Thêm',
        isRequired: false,
        values: [
          { id: 'top-1', name: 'Trân châu đen', extraPrice: 10000 },
          { id: 'top-2', name: 'Pudding trứng', extraPrice: 12000 },
        ],
      },
    ],
  },
  {
    id: 'prod-6',
    code: 'TM02',
    name: 'Trà Đào Cam Sả',
    categoryId: 'cat-milktea',
    categoryName: 'Trà sữa & Trà',
    price: 45000,
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80',
    isAvailable: true,
  },
  {
    id: 'prod-7',
    code: 'TM03',
    name: 'Trà Vải Lài Kem Phô Mai',
    categoryId: 'cat-milktea',
    categoryName: 'Trà sữa & Trà',
    price: 52000,
    imageUrl: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=500&q=80',
    isAvailable: true,
  },
  {
    id: 'prod-8',
    code: 'FD01',
    name: 'Bánh Mì Chảo Bít Tết Đặc Biệt',
    categoryId: 'cat-food',
    categoryName: 'Món ăn điểm tâm',
    price: 68000,
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80',
    isAvailable: true,
  },
  {
    id: 'prod-9',
    code: 'FD02',
    name: 'Mì Ý Sốt Bò Băm Bolognese',
    categoryId: 'cat-food',
    categoryName: 'Món ăn điểm tâm',
    price: 79000,
    imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80',
    isAvailable: true,
  },
  {
    id: 'prod-10',
    code: 'FD03',
    name: 'Croissant Bơ Tỏi Nướng',
    categoryId: 'cat-food',
    categoryName: 'Món ăn điểm tâm',
    price: 45000,
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80',
    isAvailable: true,
  },
  {
    id: 'prod-11',
    code: 'DS01',
    name: 'Bánh Tiramisu Ý Ca Cao',
    categoryId: 'cat-dessert',
    categoryName: 'Bánh ngọt',
    price: 48000,
    imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=80',
    isAvailable: true,
  },
  {
    id: 'prod-12',
    code: 'DS02',
    name: 'Bánh Cheese Cake Chanh Dây',
    categoryId: 'cat-dessert',
    categoryName: 'Bánh ngọt',
    price: 52000,
    imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80',
    isAvailable: true,
  },
];

export const INITIAL_KITCHEN_TICKETS: KitchenTicketItem[] = [
  {
    id: 'kt-1',
    orderId: 'ORD-1001',
    orderCode: 'ORD-1001',
    tableName: 'Bàn 101',
    areaName: 'Tầng 1',
    productName: 'Cà Phê Sữa Đá Sài Gòn',
    quantity: 2,
    note: '100% Đá, ít ngọt',
    status: 'Pending',
    createdAt: '2026-08-20T12:20:00',
    elapsedMinutes: 12,
  },
  {
    id: 'kt-2',
    orderId: 'ORD-1001',
    orderCode: 'ORD-1001',
    tableName: 'Bàn 101',
    areaName: 'Tầng 1',
    productName: 'Bánh Mì Chảo Bít Tết Đặc Biệt',
    quantity: 1,
    note: 'Trứng ốp lọt',
    status: 'Cooking',
    createdAt: '2026-08-20T12:21:00',
    elapsedMinutes: 11,
  },
  {
    id: 'kt-3',
    orderId: 'ORD-1003',
    orderCode: 'ORD-1003',
    tableName: 'Bàn 201',
    areaName: 'Tầng 2',
    productName: 'Trà Sữa Trân Châu Hoàng Gia',
    quantity: 3,
    optionsText: 'Topping Trân châu đen (+10k)',
    status: 'Pending',
    createdAt: '2026-08-20T12:25:00',
    elapsedMinutes: 7,
  },
  {
    id: 'kt-4',
    orderId: 'ORD-1004',
    orderCode: 'ORD-1004',
    tableName: 'Sân Thượng 2',
    areaName: 'Sân Thượng',
    productName: 'Mì Ý Sốt Bò Băm Bolognese',
    quantity: 2,
    status: 'Ready',
    createdAt: '2026-08-20T12:10:00',
    elapsedMinutes: 22,
  },
];

export const INITIAL_INVENTORY: InventoryItem[] = [
  { id: 'inv-1', code: 'RM001', name: 'Hạt Cà Phê Robusta Buôn Ma Thuột', unit: 'kg', minStock: 10, currentStock: 24.5, unitPrice: 180000, category: 'Nguyên liệu pha chế', lastUpdated: '2026-08-19T16:00:00' },
  { id: 'inv-2', code: 'RM002', name: 'Sữa Đặc Ngôi Sao Phương Nam', unit: 'Hộp', minStock: 20, currentStock: 8, unitPrice: 22000, category: 'Nguyên liệu pha chế', lastUpdated: '2026-08-20T08:00:00' },
  { id: 'inv-3', code: 'RM003', name: 'Sữa Tươi Thanh Trùng Vinamilk 1L', unit: 'Hộp', minStock: 15, currentStock: 42, unitPrice: 34000, category: 'Nguyên liệu pha chế', lastUpdated: '2026-08-20T09:30:00' },
  { id: 'inv-4', code: 'RM004', name: 'Trân Châu Đen Đài Loan', unit: 'kg', minStock: 5, currentStock: 3.2, unitPrice: 65000, category: 'Topping & Thạch', lastUpdated: '2026-08-18T10:00:00' },
  { id: 'inv-5', code: 'RM005', name: 'Thịt Bò Mỹ Xắt Lát (Bít tết)', unit: 'kg', minStock: 8, currentStock: 12.0, unitPrice: 280000, category: 'Thực phẩm tươi sống', lastUpdated: '2026-08-20T07:00:00' },
];

export const INITIAL_DASHBOARD: DashboardStats = {
  todayRevenue: 14850000,
  revenueGrowthPercent: 18.5,
  todayOrders: 142,
  ordersGrowthPercent: 12.3,
  averageOrderValue: 104577,
  activeTablesCount: 4,
  totalTablesCount: 25,
  topSellingProducts: [
    { name: 'Cà Phê Sữa Đá Sài Gòn', quantity: 68, revenue: 2380000 },
    { name: 'Trà Sữa Trân Châu Hoàng Gia', quantity: 54, revenue: 2646000 },
    { name: 'Bạc Xỉu Măng Đen', quantity: 42, revenue: 1764000 },
    { name: 'Bánh Mì Chảo Bít Tết', quantity: 28, revenue: 1904000 },
    { name: 'Trà Đào Cam Sả', quantity: 25, revenue: 1125000 },
  ],
  revenueChartData: [
    { time: '07:00', amount: 850000 },
    { time: '09:00', amount: 2400000 },
    { time: '11:00', amount: 4800000 },
    { time: '13:00', amount: 3200000 },
    { time: '15:00', amount: 1900000 },
    { time: '17:00', amount: 1700000 },
  ],
};

export const INITIAL_CUSTOMERS: Customer[] = [
  { id: 'cust-1', fullName: 'Nguyễn Văn Minh', phoneNumber: '0909123456', email: 'minh.nguyen@example.com', points: 1450, tier: 'Gold', totalSpent: 14500000, lastVisit: '2026-08-19' },
  { id: 'cust-2', fullName: 'Trần Thị Thu Thảo', phoneNumber: '0988777666', email: 'thao.tran@example.com', points: 820, tier: 'Silver', totalSpent: 8200000, lastVisit: '2026-08-20' },
  { id: 'cust-3', fullName: 'Lê Hoàng Nam', phoneNumber: '0912345678', points: 3100, tier: 'Diamond', totalSpent: 31000000, lastVisit: '2026-08-18' },
];

export const INITIAL_VOUCHERS: Voucher[] = [
  { id: 'v-1', code: 'CHAOHE2026', discountType: 'Percentage', discountValue: 15, minOrderValue: 100000, maxDiscount: 50000, validUntil: '2026-09-30', usageLimit: 500, usedCount: 142, isActive: true },
  { id: 'v-2', code: 'KHAICHUONG30K', discountType: 'FixedAmount', discountValue: 30000, minOrderValue: 150000, validUntil: '2026-12-31', usageLimit: 1000, usedCount: 450, isActive: true },
];

export const INITIAL_ATTENDANCE: AttendanceRecord[] = [
  { id: 'att-1', employeeName: 'Nguyễn Văn Thu ngân', role: 'Cashier', checkInTime: '06:45:00', shiftName: 'Ca Sáng (07:00 - 15:00)', status: 'Working' },
  { id: 'att-2', employeeName: 'Trần Văn Bếp', role: 'Kitchen', checkInTime: '06:55:00', shiftName: 'Ca Sáng (07:00 - 15:00)', status: 'Working' },
  { id: 'att-3', employeeName: 'Lê Kho Hàng', role: 'Warehouse', checkInTime: '08:00:00', shiftName: 'Hành chính (08:00 - 17:00)', status: 'Working' },
];
