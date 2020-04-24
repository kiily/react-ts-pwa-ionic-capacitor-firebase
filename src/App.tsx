import './App.scss';

import { IonApp } from '@ionic/react';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import ProtectedRouteHoc from './hoc/ProtectedRouteHoc';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';

const App = () => {
  // TODO: does not seem to work with IonicReactRouter just yet
  return (
    <IonApp>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <ProtectedRouteHoc path="/home" component={HomePage} exact={true} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </IonApp>
  );
};

export default App;
