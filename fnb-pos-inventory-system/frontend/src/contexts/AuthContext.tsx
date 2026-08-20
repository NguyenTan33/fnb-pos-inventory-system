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
  register: (username: string, password: string, phoneNumber: string) => Promise<any>;
  verifyOtp: (phoneNumber: string, otpCode: string) => Promise<any>;
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
        username,
        passwordHash: password,
      });

      const primaryRole: UserRole = (response.roles && response.roles.length > 0)
        ? (response.roles[0] as UserRole)
        : 'Cashier';

      const loggedUser: User = {
        id: response.userId,
        username: response.username,
        fullName: response.username,
        roles: response.roles || ['User'],
        role: primaryRole,
        token: response.token,
        expiration: response.expiration,
      };

      setToken(response.token);
      setUser(loggedUser);

      localStorage.setItem('jwt_token', response.token);
      localStorage.setItem('user_info', JSON.stringify(loggedUser));
      return response;
    } catch (err: any) {
      console.error('Login failed', err);
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

  const register = async (username: string, password: string, phoneNumber: string) => {
    return await authApi.register({
      username,
      passwordHash: password,
      phoneNumber,
    });
  };

  const verifyOtp = async (phoneNumber: string, otpCode: string) => {
    return await authApi.verifyOtp({
      phoneNumber,
      otpCode,
    });
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
        register,
        verifyOtp,
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
