import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { logOut } from 'ionicons/icons';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { doSignOut } from '../../context';

const HomePage: React.FC<RouteComponentProps> = ({ history }) => {
  const logout = () => {
    doSignOut();
    history.push('/');
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home Page</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={logout}>
              <IonIcon icon={logOut} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonDatetime displayFormat="MM/DD/YYYY" placeholder="Select Date"></IonDatetime>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <IonButton fill="clear">Start</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
