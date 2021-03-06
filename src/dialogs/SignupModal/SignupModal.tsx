import './SignupModal.scss';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import React, { useState } from 'react';

import FormInput from '../../components/forms/FormInput/FormInput';
import { IModal, IUser } from '../../interfaces';
import { SignupSuccessAlert } from '../Alert';

const SignupModal: React.FC<IModal> = ({ isOpen, closed, modalTitle }) => {
  const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  };
  const [userState, setUserState] = useState(initialState);

  const [successAlertState, setSuccessAlertState] = useState({
    isOpen: false,
  });

  const isDisabled = () => {
    const { email, password } = userState;
    return !email || !password;
  };

  const onSignupSubmit = () => {
    const { email, firstName, lastName, password } = userState;
    const user: IUser = {
      email,
      firstName,
      lastName,
      password,
    };
    closed(user);
    setUserState(initialState);
    setSuccessAlertState({ isOpen: true });
  };

  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonButton onClick={closed}>
              <IonIcon icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonTitle>{modalTitle}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="SignupModal">
        {/* TODO: automate the creation of these FormInput */}
        <FormInput
          color={'dark'}
          name="email"
          value={userState.email}
          onChange={(event) => setUserState({ ...userState, email: event.detail?.value })}
          clearInput={true}
          type={'email'}
          placeholder="Email"
        />
        <FormInput
          color={'dark'}
          name={'firstname'}
          value={userState.firstName}
          onChange={(event) => setUserState({ ...userState, firstName: event.detail?.value })}
          clearInput={true}
          type={'text'}
          placeholder="First name"
        />
        <FormInput
          color={'dark'}
          name={'last name'}
          value={userState.lastName}
          onChange={(event) => setUserState({ ...userState, lastName: event.detail?.value })}
          clearInput={true}
          type={'text'}
          placeholder="Last name"
        />
        <FormInput
          color={'dark'}
          name={'password'}
          value={userState.password}
          onChange={(event) => setUserState({ ...userState, password: event.detail?.value })}
          clearInput={true}
          type={'password'}
          placeholder="Password"
        />
        <IonRow className="SignupModal__button-container">
          <IonButton
            color="primary"
            disabled={isDisabled()}
            expand="block"
            onClick={onSignupSubmit}
          >
            Sign Up
          </IonButton>
        </IonRow>
        <SignupSuccessAlert
          isOpen={successAlertState.isOpen}
          onDismiss={() => setSuccessAlertState({ isOpen: false })}
        />
      </IonContent>
    </IonModal>
  );
};

export default SignupModal;
