import React from 'react';
import Sample from './components/Sample';
import FirebaseContext from './context/FirebaseContext';
import Firebase from './utils/firebase';

const App = () => (
  <FirebaseContext.Provider value={new Firebase()}>
    <Sample />
  </FirebaseContext.Provider>
);

export default App;
