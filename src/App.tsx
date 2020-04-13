import React from 'react';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import { IonApp } from '@ionic/react';
import HomePage from './pages/HomePage/HomePage';
import ProtectedRouteHoc from './hoc/ProtectedRouteHoc';
import LoginPage from './pages/LoginPage/LoginPage';
import './App.scss';

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
