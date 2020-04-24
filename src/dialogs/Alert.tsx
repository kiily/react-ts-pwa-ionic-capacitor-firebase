import { IonAlert } from '@ionic/react';
import React from 'react';

import { IAlert } from '../interfaces/alert.interface';

const Alert: React.FC<IAlert> = ({ isOpen, onDismiss, header, message, inputs, buttons }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onDismiss}
      header={header}
      message={message}
      inputs={inputs}
      buttons={buttons}
    />
  );
};

const RESET_PASSWORD: Partial<IAlert> = {
  header: 'Reset your password',
  message: 'Enter your email. We will send you a password reset link',
  inputs: [
    {
      name: 'email',
      type: 'text',
      placeholder: 'Email',
    },
  ],
  buttons: [
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'danger',
    },
    {
      text: 'OK',
    },
  ],
};

export const ResetPasswordAlert: React.FC<IAlert> = ({ isOpen, onDismiss }) => {
  return <Alert {...RESET_PASSWORD} isOpen={isOpen} onDismiss={onDismiss} />;
};

const INVALID_CREDENTIALS: Partial<IAlert> = {
  header: 'Invalid Credentials',
  buttons: [
    {
      text: 'OK',
    },
  ],
};

export const ErrorAlert: React.FC<IAlert> = ({ isOpen, message, onDismiss }) => {
  return <Alert {...INVALID_CREDENTIALS} isOpen={isOpen} message={message} onDismiss={onDismiss} />;
};

const SIGNUP_SUCCESS_ALERT: Partial<IAlert> = {
  header: 'Success',
  message: 'Well done! You have successfully signed up. Start adding your countdowns',
};

export const SignupSuccessAlert: React.FC<IAlert> = ({ isOpen, onDismiss }) => {
  return <Alert {...SIGNUP_SUCCESS_ALERT} isOpen={isOpen} onDismiss={onDismiss} />;
};
