'use client';

import { api } from '@/lib';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import { ReactNode } from 'react';

// Define the shape of the user object with possible properties (id, name, email)
type UserType = {
  id: string;
  name: string;
  email: string;
};

// Allow the user to be either null or the correct object type
type AuthContextType = {
  user: UserType | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const authPaths = ['/Login', '/Register'];

type PropsChildren = {
  children: ReactNode;
  className?: string; // Made className optional if it's not always used
};

export const AuthProvider = ({ children }: PropsChildren) => {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<UserType | null>(null); // user can be null or UserType
  const [isReady, setIsReady] = useState(false);

  // Login function
  const login = async (name: string, password: string) => {
    try {
      const res = await api.post('/user/login', { name, password });

      console.log('res', res);

      localStorage.setItem('token', res.data.token);

      setUser(res.data.user);

      // Show success toast and redirect to home after a slight delay
      toast.success('Login successful');
      setTimeout(() => {
        router.push('/');
      }, 1000); // 1-second delay
    } catch (err: any) {
      console.log(err);
      toast.error('Invalid credentials');
    }
  };

  // Register function
  const register = async (email: string, password: string, name: string) => {
    try {
      await api.post('/user/create', {
        name,
        email,
        password,
      });

      // Show success toast and redirect to login after a slight delay
      toast.success('Registration successful! Please login.');
      setTimeout(() => {
        router.push('/Login');
      }, 1000); // 1-second delay
    } catch (err: any) {
      console.log(err);
      toast.error(err?.response?.data?.message || 'Registration failed');
    }
  };

  // Load user data when token is available
  useEffect(() => {
    const loadUser = async () => {
      try {
        setIsReady(false);

        const token = localStorage.getItem('token');

        if (!token) return;

        const res = await api.get('/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
      } catch (err) {
        localStorage.removeItem('token');
        toast.error('Your session has expired. Please login again.');
      } finally {
        setIsReady(true);
      }
    };

    loadUser();
  }, []);

  // Protect routes from unauthorized access
  useEffect(() => {
    if (authPaths.includes(pathname)) return;

    if (!isReady) return;

    if (user) return;

    router.push('/Login');
  }, [pathname, user, isReady]);

  // Wait until user data is ready
  if (!isReady) return null;

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
