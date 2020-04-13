import { AUTH_ACTIONS } from './auth-alert.actions';
import { AuthAlertState } from './auth-alert.state';
import { ActionType } from '../action.interface';
import { Reducer } from 'react';

export const authAlertReducer: Reducer<AuthAlertState, ActionType<AUTH_ACTIONS>> = (
  currentState: AuthAlertState,
  { type, payload }: ActionType<AUTH_ACTIONS>
) => {
  switch (type) {
    case AUTH_ACTIONS.toggleCredentialsAlert:
      return {
        ...currentState,
        toggleCredentialsAlert: payload.isOpen,
        loginAlertMessage: payload.message,
      };
    case AUTH_ACTIONS.toggleResetPassword:
      return { ...currentState, toggleResetPassword: payload.isOpen };
    case AUTH_ACTIONS.toggleSignUp:
      return { ...currentState, toggleSignup: payload.isOpen };
  }
};
