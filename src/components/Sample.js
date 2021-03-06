import React from 'react';
import withFirebase from '../hoc/withFirebase';

const subscibe = async firebase => {
  try {
    const token = await firebase.askForPermissionToReceiveNotifications();
    const { status } = await firebase.subscribeNotification({ token });
    console.log(status);
    alert(status);
  } catch (e) {
    console.log(e);
    alert(e.toString());
  }
};

const publish = async firebase => {
  try {
    const { status } = await firebase.publishNotification();
    console.log(status);
    alert(status);
  } catch (e) {
    console.log(e);
    alert(e.toString());
  }
};

const Sample = ({ firebase }) => (
  <>
    <h1>Hello</h1>
    <button onClick={() => subscibe(firebase)}>通知を購読する</button>
    <button onClick={() => publish(firebase)}>通知を配信する</button>
  </>
);

export default withFirebase(Sample);
