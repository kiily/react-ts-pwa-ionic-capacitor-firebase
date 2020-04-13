export interface AuthAlertState {
  toggleCredentialsAlert: boolean;
  toggleResetPassword: boolean;
  toggleSignup: boolean;
  loginAlertMessage: string;
}

export const AUTH_ALERT_INITIAL_STATE: AuthAlertState = {
  toggleCredentialsAlert: false,
  toggleResetPassword: false,
  toggleSignup: false,
  loginAlertMessage: '',
};
