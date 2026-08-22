import api from './axios';
import {
  LoginRequest,
  LoginResponse,
  GoogleLoginRequest,
  RegisterRequest,
  RegisterResponse,
  VerifyRegisterOtpRequest,
  VerifyRegisterOtpResponse,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
} from '../types';

export const authApi = {
  // 1. POST /api/Auth/login
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const payload = {
      phoneNumber: data.phoneNumber || data.username || '',
      username: data.username || data.phoneNumber || '',
      password: data.password || data.passwordHash || '',
      passwordHash: data.passwordHash || data.password || '',
    };
    const res = await api.post<LoginResponse>('/Auth/login', payload);
    return res.data;
  },

  // 2. POST /api/Auth/google-login
  googleLogin: async (data: GoogleLoginRequest): Promise<LoginResponse> => {
    const res = await api.post<LoginResponse>('/Auth/google-login', data);
    return res.data;
  },

  // 3. POST /api/Auth/register
  register: async (data: RegisterRequest): Promise<RegisterResponse> => {
    const payload = {
      fullName: data.fullName || data.username || '',
      username: data.username || data.fullName || '',
      password: data.password || data.passwordHash || '',
      passwordHash: data.passwordHash || data.password || '',
      phoneNumber: data.phoneNumber || '',
    };
    const res = await api.post<RegisterResponse>('/Auth/register', payload);
    return res.data;
  },

  // 4. POST /api/Auth/verify-otp
  verifyOtp: async (data: VerifyRegisterOtpRequest): Promise<VerifyRegisterOtpResponse> => {
    const payload = {
      phoneNumber: data.phoneNumber,
      otp: data.otp || data.otpCode || '',
      otpCode: data.otpCode || data.otp || '',
    };
    const res = await api.post<VerifyRegisterOtpResponse>('/Auth/verify-otp', payload);
    return res.data;
  },

  // 5. POST /api/Auth/forgot-password
  forgotPassword: async (data: ForgotPasswordRequest): Promise<ForgotPasswordResponse> => {
    const res = await api.post<ForgotPasswordResponse>('/Auth/forgot-password', data);
    return res.data;
  },

  // 6. POST /api/Auth/reset-password
  resetPassword: async (data: ResetPasswordRequest): Promise<ResetPasswordResponse> => {
    const payload = {
      phoneNumber: data.phoneNumber,
      resetToken: data.resetToken || data.otpCode || '',
      otpCode: data.otpCode || data.resetToken || '',
      newPassword: data.newPassword || data.newPasswordHash || '',
      newPasswordHash: data.newPasswordHash || data.newPassword || '',
    };
    const res = await api.post<ResetPasswordResponse>('/Auth/reset-password', payload);
    return res.data;
  },

  // 7. GET /api/Auth/test-auth (Protected [Authorize])
  testAuth: async (): Promise<string> => {
    const res = await api.get<string>('/Auth/test-auth');
    return res.data;
  },

  // 8. GET /api/Auth/test-user-role (Protected [Authorize(Roles = "Admin,User")])
  testUserRole: async (): Promise<string> => {
    const res = await api.get<string>('/Auth/test-user-role');
    return res.data;
  },
};
