import api from './axios';
import {
  LoginRequest,
  LoginResponse,
  GoogleLoginRequest,
  FacebookLoginRequest,
  RegisterRequest,
  RegisterResponse,
  VerifyRegisterOtpRequest,
  VerifyRegisterOtpResponse,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  VerifyForgotPasswordOtpRequest,
  VerifyForgotPasswordOtpResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  ResendOtpRequest,
  ResendOtpResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  LogoutRequest,
  ChangePasswordRequest,
} from '../types';

export const authApi = {
  // 1. POST /api/Auth/login
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const payload = {
      phoneNumber: data.phoneNumber || data.username || '',
      password: data.password || data.passwordHash || '',
    };
    const res = await api.post<LoginResponse>('/Auth/login', payload);
    return res.data;
  },

  // 2. POST /api/Auth/register
  register: async (data: RegisterRequest): Promise<RegisterResponse> => {
    const payload = {
      fullName: data.fullName || data.username || '',
      password: data.password || data.passwordHash || '',
      phoneNumber: data.phoneNumber || '',
    };
    const res = await api.post<RegisterResponse>('/Auth/register', payload);
    return res.data;
  },

  // 3. POST /api/Auth/verify-otp
  verifyOtp: async (data: VerifyRegisterOtpRequest): Promise<VerifyRegisterOtpResponse> => {
    const payload = {
      phoneNumber: data.phoneNumber,
      otp: data.otp || data.otpCode || '',
    };
    const res = await api.post<VerifyRegisterOtpResponse>('/Auth/verify-otp', payload);
    return res.data;
  },

  // 4. POST /api/Auth/google-login
  googleLogin: async (data: GoogleLoginRequest): Promise<LoginResponse> => {
    const res = await api.post<LoginResponse>('/Auth/google-login', data);
    return res.data;
  },

  // 5. POST /api/Auth/facebook-login
  facebookLogin: async (data: FacebookLoginRequest): Promise<LoginResponse> => {
    const res = await api.post<LoginResponse>('/Auth/facebook-login', data);
    return res.data;
  },

  // 6. POST /api/Auth/forgot-password
  forgotPassword: async (data: ForgotPasswordRequest): Promise<ForgotPasswordResponse> => {
    const res = await api.post<ForgotPasswordResponse>('/Auth/forgot-password', data);
    return res.data;
  },

  // 7. POST /api/Auth/verify-forgot-password-otp
  verifyForgotPasswordOtp: async (
    data: VerifyForgotPasswordOtpRequest
  ): Promise<VerifyForgotPasswordOtpResponse> => {
    const res = await api.post<VerifyForgotPasswordOtpResponse>(
      '/Auth/verify-forgot-password-otp',
      data
    );
    return res.data;
  },

  // 8. POST /api/Auth/reset-password
  resetPassword: async (data: ResetPasswordRequest): Promise<ResetPasswordResponse> => {
    const payload = {
      phoneNumber: data.phoneNumber,
      resetToken: data.resetToken || data.otpCode || '',
      newPassword: data.newPassword || data.newPasswordHash || '',
    };
    const res = await api.post<ResetPasswordResponse>('/Auth/reset-password', payload);
    return res.data;
  },

  // 9. POST /api/Auth/resend-otp
  resendOtp: async (data: ResendOtpRequest): Promise<ResendOtpResponse> => {
    const payload = {
      phoneNumber: data.phoneNumber,
      purpose: data.purpose || 'Register',
    };
    const res = await api.post<ResendOtpResponse>('/Auth/resend-otp', payload);
    return res.data;
  },

  // 10. POST /api/Auth/refresh
  refreshToken: async (data: RefreshTokenRequest): Promise<RefreshTokenResponse> => {
    const res = await api.post<RefreshTokenResponse>('/Auth/refresh', data);
    return res.data;
  },

  // 11. POST /api/Auth/logout
  logout: async (data: LogoutRequest): Promise<any> => {
    const res = await api.post('/Auth/logout', data);
    return res.data;
  },

  // 12. POST /api/Auth/change-password
  changePassword: async (data: ChangePasswordRequest): Promise<any> => {
    const res = await api.post('/Auth/change-password', data);
    return res.data;
  },

  // GET /api/Auth/test-auth
  testAuth: async (): Promise<string> => {
    const res = await api.get<string>('/Auth/test-auth');
    return res.data;
  },

  // GET /api/Auth/test-user-role
  testUserRole: async (): Promise<string> => {
    const res = await api.get<string>('/Auth/test-user-role');
    return res.data;
  },
};
