import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { createContext, ReactNode, useState } from 'react';
import { baseUrl } from '../../common/BaseUrl';

type AuthContextType = {
  token: string;
  loading: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  getReloadAthData: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  // 🔹 Login function
  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post(
        `${baseUrl}/api/sign-in?username=${username}&password=${encodeURIComponent(
          password
        )}`,
        {}
      );
      if (data) {
        localStorage.setItem('token', JSON.stringify(data?.token));
        const decodedUserToken = jwtDecode(data?.token);

        localStorage.setItem('userInfo', JSON.stringify(decodedUserToken));
        setToken(data?.token);
      }
    } catch (err: string) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const getReloadAthData = () => {
    const tokenString = localStorage?.getItem('token');
    const localStorageToken = tokenString ? JSON.parse(tokenString) : '';
    setToken(localStorageToken);
  };

  // 🔹 Logout function
  const logout = () => {
    localStorage.clear();
    setToken('');
  };

  return (
    <AuthContext.Provider
      value={{ loading, token, getReloadAthData, error, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
