import React from 'react';
import FirebaseContext from '../context/FirebaseContext';

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default withFirebase;
