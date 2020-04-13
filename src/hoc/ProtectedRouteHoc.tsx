import React, { useContext } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

interface ProtectedRouter {
  component: React.FC<RouteComponentProps>;
  [x: string]: any;
}

const ProtectedRouteHoc: React.FC<ProtectedRouter> = ({ component: Component, ...rest }) => {
  const { loggedUser } = useContext(AuthContext);
  const isAuthed = loggedUser.user;
  return (
    <Route
      {...rest}
      render={(props) =>
        Boolean(isAuthed) === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" from={props.location.pathname} />
        )
      }
    />
  );
};

export default ProtectedRouteHoc;
