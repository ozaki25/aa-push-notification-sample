import React from 'react';
import withFirebase from '../hoc/withFirebase';

const subscibe = async firebase => {
  try {
    const token = await firebase.askForPermissionToReceiveNotifications();
    console.log(token);
  } catch (e) {
    console.log(e);
  }
};

const Sample = ({ firebase }) => (
  <>
    <h1>Hello</h1>
    <button onClick={() => subscibe(firebase)}>通知を購読する</button>
  </>
);

export default withFirebase(Sample);
