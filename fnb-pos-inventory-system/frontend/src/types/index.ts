export type UserRole = 'Admin' | 'Manager' | 'Cashier' | 'Kitchen' | 'Warehouse' | 'User';

export interface User {
  id: string;
  username: string;
  fullName?: string;
  phoneNumber?: string;
  roles: string[];
  role?: UserRole;
  token?: string;
  expiration?: string;
}

export interface LoginRequest {
  phoneNumber?: string;
  username?: string;
  password?: string;
  passwordHash?: string;
}

export interface LoginResponse {
  accessToken?: string;
  token?: string;
  refreshToken?: string;
  expiresAt?: string;
  expiration?: string;
  userId?: string;
  username?: string;
  roles?: string[];
  message?: string;
}

export interface GoogleLoginRequest {
  idToken: string;
}

export interface RegisterRequest {
  fullName?: string;
  username?: string;
  password?: string;
  passwordHash?: string;
  phoneNumber?: string;
}

export interface RegisterResponse {
  userId?: string;
  id?: string;
  username?: string;
  phoneNumber?: string;
  message?: string;
}

export interface VerifyRegisterOtpRequest {
  phoneNumber: string;
  otp?: string;
  otpCode?: string;
}

export interface VerifyRegisterOtpResponse {
  message?: string;
  isVerified?: boolean;
  isSuccess?: boolean;
}

export interface ForgotPasswordRequest {
  phoneNumber: string;
}

export interface ForgotPasswordResponse {
  message?: string;
}

export interface ResetPasswordRequest {
  phoneNumber: string;
  resetToken?: string;
  otpCode?: string;
  newPassword?: string;
  newPasswordHash?: string;
}

export interface ResetPasswordResponse {
  message?: string;
  isSuccess?: boolean;
}

export interface Area {
  id: string;
  name: string;
  description?: string;
  tablesCount: number;
}

export type TableStatus = 'Available' | 'Occupied' | 'Reserved' | 'Cleaning';

export interface Table {
  id: string;
  code: string;
  name: string;
  areaId: string;
  areaName: string;
  capacity: number;
  status: TableStatus;
  currentOrderId?: string;
  totalAmount?: number;
  occupiedAt?: string;
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
  itemCount: number;
}

export interface ProductOption {
  id: string;
  name: string;
  isRequired: boolean;
  values: { id: string; name: string; extraPrice: number }[];
}

export interface Product {
  id: string;
  code: string;
  name: string;
  categoryId: string;
  categoryName: string;
  price: number;
  costPrice?: number;
  imageUrl?: string;
  isAvailable: boolean;
  description?: string;
  options?: ProductOption[];
}

export interface CartOptionSelection {
  optionId: string;
  optionName: string;
  valueId: string;
  valueName: string;
  extraPrice: number;
}

export interface CartItem {
  cartItemId: string;
  product: Product;
  quantity: number;
  selectedOptions: CartOptionSelection[];
  note?: string;
  unitPrice: number;
  totalPrice: number;
}

export interface KitchenTicketItem {
  id: string;
  orderId: string;
  orderCode: string;
  tableName: string;
  areaName: string;
  productName: string;
  quantity: number;
  note?: string;
  optionsText?: string;
  status: 'Pending' | 'Cooking' | 'Ready' | 'Served';
  createdAt: string;
  elapsedMinutes: number;
}

export interface InventoryItem {
  id: string;
  code: string;
  name: string;
  unit: string;
  minStock: number;
  currentStock: number;
  unitPrice: number;
  category: string;
  lastUpdated: string;
}

export interface PurchaseOrder {
  id: string;
  code: string;
  supplierName: string;
  totalAmount: number;
  status: 'Draft' | 'Ordered' | 'Received' | 'Cancelled';
  createdAt: string;
  receivedAt?: string;
  itemsCount: number;
}

export interface DashboardStats {
  todayRevenue: number;
  revenueGrowthPercent: number;
  todayOrders: number;
  ordersGrowthPercent: number;
  averageOrderValue: number;
  activeTablesCount: number;
  totalTablesCount: number;
  topSellingProducts: { name: string; quantity: number; revenue: number }[];
  revenueChartData: { time: string; amount: number }[];
}

export interface Customer {
  id: string;
  fullName: string;
  phoneNumber: string;
  email?: string;
  points: number;
  tier: 'Standard' | 'Silver' | 'Gold' | 'Diamond';
  totalSpent: number;
  lastVisit: string;
}

export interface Voucher {
  id: string;
  code: string;
  discountType: 'Percentage' | 'FixedAmount';
  discountValue: number;
  minOrderValue: number;
  maxDiscount?: number;
  validUntil: string;
  usageLimit: number;
  usedCount: number;
  isActive: boolean;
}

export interface AttendanceRecord {
  id: string;
  employeeName: string;
  role: string;
  checkInTime: string;
  checkOutTime?: string;
  shiftName: string;
  status: 'Working' | 'Completed' | 'Late';
}
