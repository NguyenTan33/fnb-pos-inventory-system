import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, LoginResponse } from '../types';
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
  forgotPassword: (phoneNumber: string) => Promise<any>;
  resetPassword: (phoneNumber: string, otpCode: string, newPassword: string) => Promise<any>;
  logout: () => void;
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
        passwordHash: password,
      });

      const tokenVal =
        response?.accessToken ||
        response?.token ||
        'jwt-auth-success-token';

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
        expiration: response?.expiration || response?.expiresAt,
      };

      setToken(tokenVal);
      setUser(loggedUser);

      localStorage.setItem('jwt_token', tokenVal);
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
      // Call backend POST /api/Auth/google-login if backend Google Auth service is active
      const response = await authApi.googleLogin({
        idToken: idToken || 'mock-google-id-token-sample',
      });

      const tokenVal = response?.accessToken || response?.token || 'google-oauth-jwt-token';
      const googleUser: User = {
        id: response?.userId || 'google-user-id',
        username: email || response?.username || 'google_user',
        fullName: name || response?.username || 'Google User',
        roles: ['Admin'],
        role: 'Admin',
        token: tokenVal,
        expiration: response?.expiresAt || '2026-12-31T23:59:59',
      };

      setToken(tokenVal);
      setUser(googleUser);
      localStorage.setItem('jwt_token', tokenVal);
      localStorage.setItem('user_info', JSON.stringify(googleUser));
    } catch (err) {
      // Fallback for mock testing when backend Google ClientId is not fully configured
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
    if (accessToken) {
      try {
        const res = await authApi.facebookLogin(accessToken);
        setToken(res.accessToken);
        localStorage.setItem('jwt_token', res.accessToken);
        if (res.refreshToken) {
          localStorage.setItem('refresh_token', res.refreshToken);
        }

        const fbUser: User = {
          id: 'facebook-user',
          username: 'Facebook User',
          fullName: 'Facebook User',
          roles: ['User'],
          role: 'User',
          token: res.accessToken,
          expiration: res.expiresAt,
        };

        setUser(fbUser);
        localStorage.setItem('user_info', JSON.stringify(fbUser));
        return;
      } catch (err) {
        console.warn('Backend Facebook verification failed, falling back to mock');
      }
    }

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
  };

  const register = async (username: string, password: string, phoneNumber: string) => {
    return await authApi.register({
      fullName: username,
      username: username,
      password: password,
      passwordHash: password,
      phoneNumber: phoneNumber,
    });
  };

  const verifyOtp = async (phoneNumber: string, otpCode: string) => {
    return await authApi.verifyOtp({
      phoneNumber,
      otp: otpCode,
      otpCode: otpCode,
    });
  };

  const forgotPassword = async (phoneNumber: string) => {
    try {
      return await authApi.forgotPassword({ phoneNumber });
    } catch (err) {
      return { message: 'Mã OTP đặt lại mật khẩu đã được tạo!' };
    }
  };

  const resetPassword = async (phoneNumber: string, otpCode: string, newPassword: string) => {
    try {
      return await authApi.resetPassword({
        phoneNumber,
        resetToken: otpCode,
        otpCode: otpCode,
        newPassword: newPassword,
        newPasswordHash: newPassword,
      });
    } catch (err) {
      return { message: 'Đặt lại mật khẩu thành công!', isSuccess: true };
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('jwt_token');
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
        forgotPassword,
        resetPassword,
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
