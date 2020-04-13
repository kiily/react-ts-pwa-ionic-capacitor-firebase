import { auth, SESSION_PERSISTENCE, db } from './firebase';
import { User } from '../../interfaces';

/**
 * Logs the user in and saves it in Session storage.
 */
export const doLoginWithEmailAndPassword = (email: string, password: string) => {
  return auth.setPersistence(SESSION_PERSISTENCE).then(() => {
    return auth.signInWithEmailAndPassword(email, password);
  });
};

/**
 * Signs up the user the user and register the user object in the database for convenience
 */
export const doSignUp = (user: User) =>
  auth.createUserWithEmailAndPassword(user.email, user.password).then(() => {
    return doLoginWithEmailAndPassword(user.email, user.password).then(() => {
      return db.collection('users').add({
        ...user,
      });
    });
  });

export const doSignOut = () => auth.signOut();

export const doPasswordReset = (email: string) => auth.sendPasswordResetEmail(email);
