import { createContext } from 'react';

export const AuthContext = createContext({
  loggedUser: null,
  setLoggedUser: null,
});
