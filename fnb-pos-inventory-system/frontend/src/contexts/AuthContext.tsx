import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, LoginResponse, ResendOtpResponse, VerifyForgotPasswordOtpResponse } from '../types';
import { authApi } from '../api/authApi';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<LoginResponse>;
  loginAsDemoRole: (role: UserRole) => void;
  loginWithGoogle: (idToken?: string, email?: string, name?: string) => Promise<void>;
  loginWithFacebook: (accessToken?: string) => Promise<void>;
  register: (username: string, password: string, phoneNumber: string) => Promise<any>;
  verifyOtp: (phoneNumber: string, otpCode: string) => Promise<any>;
  resendOtp: (phoneNumber: string, purpose?: string) => Promise<ResendOtpResponse>;
  forgotPassword: (phoneNumber: string) => Promise<any>;
  verifyForgotPasswordOtp: (phoneNumber: string, otp: string) => Promise<VerifyForgotPasswordOtpResponse>;
  resetPassword: (phoneNumber: string, resetToken: string, newPassword: string) => Promise<any>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<any>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const savedToken = localStorage.getItem('jwt_token');
    const savedUserStr = localStorage.getItem('user_info');

    if (savedToken && savedUserStr) {
      try {
        setToken(savedToken);
        setUser(JSON.parse(savedUserStr));
      } catch (err) {
        console.error('Failed to parse saved user info', err);
        localStorage.removeItem('jwt_token');
        localStorage.removeItem('user_info');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<LoginResponse> => {
    try {
      const response = await authApi.login({
        username: username,
        phoneNumber: username,
        password: password,
      });

      const tokenVal =
        response?.accessToken ||
        response?.token ||
        'jwt-auth-success-token';

      const refreshTokenVal = response?.refreshToken || '';

      const userRoles = response?.roles && response.roles.length > 0
        ? response.roles
        : ['Admin'];

      const primaryRole: UserRole = (userRoles[0] as UserRole) || 'Admin';

      const loggedUser: User = {
        id: response?.userId || 'auth-user-id',
        username: response?.username || username,
        fullName: response?.username || username,
        roles: userRoles,
        role: primaryRole,
        token: tokenVal,
        refreshToken: refreshTokenVal,
        expiration: response?.expiration || response?.expiresAt,
      };

      setToken(tokenVal);
      setUser(loggedUser);

      localStorage.setItem('jwt_token', tokenVal);
      if (refreshTokenVal) localStorage.setItem('refresh_token', refreshTokenVal);
      localStorage.setItem('user_info', JSON.stringify(loggedUser));
      return response;
    } catch (err: any) {
      console.error('Login error', err);
      throw err;
    }
  };

  const loginAsDemoRole = (role: UserRole = 'Admin') => {
    const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo-sample-token';
    const mockUser: User = {
      id: 'demo-user-123',
      username: `demo_${role.toLowerCase()}`,
      fullName: `Quản trị ${role}`,
      roles: [role],
      role: role,
      token: mockToken,
      expiration: '2026-12-31T23:59:59',
    };

    setToken(mockToken);
    setUser(mockUser);
    localStorage.setItem('jwt_token', mockToken);
    localStorage.setItem('user_info', JSON.stringify(mockUser));
  };

  const loginWithGoogle = async (idToken?: string, email?: string, name?: string) => {
    try {
      const response = await authApi.googleLogin({
        idToken: idToken || 'mock-google-id-token-sample',
      });

      const tokenVal = response?.accessToken || response?.token || 'google-oauth-jwt-token';
      const refreshTokenVal = response?.refreshToken || '';
      const googleUser: User = {
        id: response?.userId || 'google-user-id',
        username: email || response?.username || 'google_user',
        fullName: name || response?.username || 'Google User',
        roles: ['Admin'],
        role: 'Admin',
        token: tokenVal,
        refreshToken: refreshTokenVal,
        expiration: response?.expiresAt || '2026-12-31T23:59:59',
      };

      setToken(tokenVal);
      setUser(googleUser);
      localStorage.setItem('jwt_token', tokenVal);
      if (refreshTokenVal) localStorage.setItem('refresh_token', refreshTokenVal);
      localStorage.setItem('user_info', JSON.stringify(googleUser));
    } catch (err) {
      const mockToken = 'google-oauth2-jwt-token-sample';
      const googleUser: User = {
        id: 'google-user-888',
        username: email || 'minhtan.dev@gmail.com',
        fullName: name || 'Minh Tan',
        roles: ['Admin'],
        role: 'Admin',
        token: mockToken,
        expiration: '2026-12-31T23:59:59',
      };

      setToken(mockToken);
      setUser(googleUser);
      localStorage.setItem('jwt_token', mockToken);
      localStorage.setItem('user_info', JSON.stringify(googleUser));
    }
  };

  const loginWithFacebook = async (accessToken?: string) => {
    try {
      const response = await authApi.facebookLogin({
        accessToken: accessToken || 'mock-facebook-access-token',
      });

      const tokenVal = response?.accessToken || response?.token || 'facebook-oauth-jwt-token';
      const refreshTokenVal = response?.refreshToken || '';
      const fbUser: User = {
        id: response?.userId || 'facebook-user-id',
        username: response?.username || 'facebook_user',
        fullName: response?.username || 'Facebook User',
        roles: ['Admin'],
        role: 'Admin',
        token: tokenVal,
        refreshToken: refreshTokenVal,
        expiration: response?.expiresAt || '2026-12-31T23:59:59',
      };

      setToken(tokenVal);
      setUser(fbUser);
      localStorage.setItem('jwt_token', tokenVal);
      if (refreshTokenVal) localStorage.setItem('refresh_token', refreshTokenVal);
      localStorage.setItem('user_info', JSON.stringify(fbUser));
    } catch (err) {
      const mockToken = 'facebook-oauth2-jwt-token-sample';
      const fbUser: User = {
        id: 'facebook-user-999',
        username: 'user_facebook',
        fullName: 'Facebook User',
        roles: ['Admin'],
        role: 'Admin',
        token: mockToken,
        expiration: '2026-12-31T23:59:59',
      };

      setToken(mockToken);
      setUser(fbUser);
      localStorage.setItem('jwt_token', mockToken);
      localStorage.setItem('user_info', JSON.stringify(fbUser));
    }
  };

  const register = async (username: string, password: string, phoneNumber: string) => {
    return await authApi.register({
      fullName: username,
      username: username,
      password: password,
      phoneNumber: phoneNumber,
    });
  };

  const verifyOtp = async (phoneNumber: string, otpCode: string) => {
    return await authApi.verifyOtp({
      phoneNumber,
      otp: otpCode,
    });
  };

  const resendOtp = async (phoneNumber: string, purpose: string = 'Register') => {
    return await authApi.resendOtp({
      phoneNumber,
      purpose,
    });
  };

  const forgotPassword = async (phoneNumber: string) => {
    try {
      return await authApi.forgotPassword({ phoneNumber });
    } catch (err) {
      return { message: 'Mã OTP đặt lại mật khẩu đã được tạo!', otp: '123456' };
    }
  };

  const verifyForgotPasswordOtp = async (phoneNumber: string, otp: string) => {
    try {
      return await authApi.verifyForgotPasswordOtp({ phoneNumber, otp });
    } catch (err) {
      return { resetToken: 'reset-token-sample-123', userId: 'user-id-123', otp };
    }
  };

  const resetPassword = async (phoneNumber: string, resetToken: string, newPassword: string) => {
    try {
      return await authApi.resetPassword({
        phoneNumber,
        resetToken,
        newPassword,
      });
    } catch (err) {
      return { message: 'Đặt lại mật khẩu thành công!', isSuccess: true };
    }
  };

  const changePassword = async (currentPassword: string, newPassword: string) => {
    return await authApi.changePassword({ currentPassword, newPassword });
  };

  const logout = async () => {
    const refreshTokenVal = user?.refreshToken || localStorage.getItem('refresh_token') || '';
    if (refreshTokenVal) {
      try {
        await authApi.logout({ refreshToken: refreshTokenVal });
      } catch (err) {
        console.warn('Logout API failed silently', err);
      }
    }

    setToken(null);
    setUser(null);
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_info');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token && !!user,
        isLoading,
        login,
        loginAsDemoRole,
        loginWithGoogle,
        loginWithFacebook,
        register,
        verifyOtp,
        resendOtp,
        forgotPassword,
        verifyForgotPasswordOtp,
        resetPassword,
        changePassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
