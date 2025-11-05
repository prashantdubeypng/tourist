import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  role: 'tourist' | 'police' | 'transport' | 'superadmin';
  blockchainId: string;
}

interface AuthContextType {
  user: User | null;
  login: (blockchainId: string, password: string, userType: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo credentials for easy access
const DEMO_CREDENTIALS = {
  // Tourist uses blockchain ID (integer) + last 4 digits
  '12345': { role: 'tourist' as const, password: '1234' },
  // Other roles use ID + password
  'police001': { role: 'police' as const, password: 'demo123' },
  'transport001': { role: 'transport' as const, password: 'demo123' },
  'superadmin': { role: 'superadmin' as const, password: 'demo123' },
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (identifier: string, password: string, userType: string): boolean => {
    const credentials = DEMO_CREDENTIALS[identifier as keyof typeof DEMO_CREDENTIALS];
    
    if (credentials && credentials.password === password && credentials.role === userType) {
      const newUser: User = {
        id: identifier,
        role: credentials.role,
        blockchainId: userType === 'tourist' ? identifier : `${userType}-${identifier}`
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};