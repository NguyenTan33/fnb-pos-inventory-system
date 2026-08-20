import api from './axios';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  VerifyRegisterOtpRequest,
  VerifyRegisterOtpResponse,
} from '../types';

export const authApi = {
  // 1. POST /api/Auth/login
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const res = await api.post<LoginResponse>('/Auth/login', data);
    return res.data;
  },

  // 2. POST /api/Auth/register
  register: async (data: RegisterRequest): Promise<RegisterResponse> => {
    const res = await api.post<RegisterResponse>('/Auth/register', data);
    return res.data;
  },

  // 3. POST /api/Auth/verify-otp
  verifyOtp: async (data: VerifyRegisterOtpRequest): Promise<VerifyRegisterOtpResponse> => {
    const res = await api.post<VerifyRegisterOtpResponse>('/Auth/verify-otp', data);
    return res.data;
  },

  // 4. GET /api/Auth/test-auth (Protected [Authorize])
  testAuth: async (): Promise<string> => {
    const res = await api.get<string>('/Auth/test-auth');
    return res.data;
  },

  // 5. GET /api/Auth/test-user-role (Protected [Authorize(Roles = "Admin,User")])
  testUserRole: async (): Promise<string> => {
    const res = await api.get<string>('/Auth/test-user-role');
    return res.data;
  },
};
