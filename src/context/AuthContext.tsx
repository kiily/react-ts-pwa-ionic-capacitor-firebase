import { createContext } from 'react';
import { auth } from './db';

type UserCredential = firebase.auth.UserCredential;

interface IAuthContext {
  loggedUser: UserCredential;
  setLoggedUser: (user: UserCredential) => void;
}

export const AuthContext = createContext<IAuthContext>({
  loggedUser: { user: null, credential: null },
  setLoggedUser: (user: UserCredential) => user,
});
