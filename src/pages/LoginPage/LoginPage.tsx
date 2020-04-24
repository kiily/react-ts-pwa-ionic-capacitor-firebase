import './LoginPage.scss';

import { IonButton, IonPage, IonRow } from '@ionic/react';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import FormInput from '../../components/forms/FormInput/FormInput';
import { doLoginWithEmailAndPassword, doPasswordReset, doSignUp } from '../../context';
import { AuthContext } from '../../context/AuthContext';
import { AUTH_ACTIONS, authAlertReducer } from '../../data';
import { AUTH_ALERT_INITIAL_STATE } from '../../data/auth-alert/auth-alert.state';
import { ErrorAlert, ResetPasswordAlert } from '../../dialogs/Alert';
import SignupModal from '../../dialogs/SignupModal/SignupModal';
import { IUser } from '../../interfaces';
import { handleAuthErrors, readSession } from '../../utils';

interface AuthState {
  email: string;
  password: string;
}
const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
  const { setLoggedUser } = useContext(AuthContext);
  const [authState, setAuthState] = useState<AuthState>({ email: '', password: '' });
  const [authAlertState, dispatch] = useReducer(authAlertReducer, AUTH_ALERT_INITIAL_STATE);
  useEffect(() => {
    const user = readSession();
    if (user) {
      setLoggedUser(user);
      history.push({ pathname: '/home' });
    }
  }, [setLoggedUser, history]);

  const onChange = (event: any) => {
    setAuthState((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handleError = (error: Error) => {
    const loginAlertMessage = handleAuthErrors(error);
    dispatch({
      type: AUTH_ACTIONS.toggleCredentialsAlert,
      payload: { isOpen: true, message: loginAlertMessage },
    });
  };

  const onLogin = async () => {
    let user = null;
    try {
      user = await doLoginWithEmailAndPassword(authState.email, authState.password).catch((error) =>
        handleError(error)
      );
    } catch (error) {
      handleError(error);
    }
    if (user) {
      setLoggedUser(user);
      history.push('/home');
    }
  };

  const onPasswordReset = (event: CustomEvent) => {
    dispatch({ type: AUTH_ACTIONS.toggleResetPassword, payload: { isOpen: false } });
    if (event.detail?.role !== 'cancel') {
      const email = event.detail.data.values.email;
      doPasswordReset(email);
    }
  };

  const signupClosed = (user: IUser) => {
    dispatch({ type: AUTH_ACTIONS.toggleSignUp, payload: { isOpen: false } });
    if (user) {
      doSignUp(user).then(() => {
        history.push('/home');
      });
    }
  };

  const onShowResetPassword = () => {
    dispatch({ type: AUTH_ACTIONS.toggleResetPassword, payload: { isOpen: true } });
  };

  const onShowSignup = () => {
    dispatch({ type: AUTH_ACTIONS.toggleSignUp, payload: { isOpen: true } });
  };

  return (
    <IonPage className="LoginPage">
      <div className="LoginPage__login-form-container">
        <h1 className="LoginPage__welcome-title">Welcome Back</h1>
        <FormInput
          color={'dark'}
          name={'email'}
          value={authState.email}
          onChange={onChange}
          clearInput={true}
          type={'email'}
          placeholder="Email"
        />
        <FormInput
          color={'dark'}
          name={'password'}
          value={authState.password}
          onChange={onChange}
          clearInput={true}
          type="password"
          placeholder={'Password'}
        />
        <IonRow className="LoginPage__button-container">
          <IonButton
            color="primary"
            disabled={authState.password === '' || authState.email === ''}
            expand="block"
            onClick={onLogin}
          >
            Login
          </IonButton>
        </IonRow>
        <IonRow className="LoginPage__reset-password-container">
          <div className="LoginPage__reset-password" onClick={onShowResetPassword}>
            Reset your password
          </div>
        </IonRow>
        <IonRow className="LoginPage__signup-container">
          <div className="LoginPage__signup" onClick={onShowSignup}>
            Don&apos;t have an account ? <strong>Sign up here</strong>
          </div>
        </IonRow>
      </div>
      <ErrorAlert
        isOpen={authAlertState.toggleCredentialsAlert}
        onDismiss={() => {
          dispatch({
            type: AUTH_ACTIONS.toggleCredentialsAlert,
            payload: { isOpen: false, message: '' },
          });
        }}
        message={authAlertState.loginAlertMessage}
      />
      <ResetPasswordAlert isOpen={authAlertState.toggleResetPassword} onDismiss={onPasswordReset} />
      <SignupModal
        isOpen={authAlertState.toggleSignup}
        closed={signupClosed}
        modalTitle={'Signup'}
      />
    </IonPage>
  );
};

export default withRouter(LoginPage);
