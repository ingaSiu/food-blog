import { createContext } from 'react';
import { useLocalStorage } from '../hooks/localStorage';

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useLocalStorage('admin', null);
  const isLoggedIn = !!admin;

  return <AdminContext.Provider value={{ admin, isLoggedIn, setAdmin }}> {children}</AdminContext.Provider>;
};

export { AdminContext, AdminProvider };
