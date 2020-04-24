import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import * as firebase from 'firebase/app';

export const config = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  projectId: 'YOUR PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const SESSION_PERSISTENCE = firebase.auth.Auth.Persistence.SESSION;

export enum FirebaseAuthErrors {
  NoUserRecord = 'no user record',
  InvalidPassword = 'INVALID_PASSWORD',
  BadlyFormatted = 'badly formatted',
}
