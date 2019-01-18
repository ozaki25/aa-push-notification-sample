import app from 'firebase/app';
import 'firebase/messaging';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  projectId: process.env.REACT_APP_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }

  askForPermissionToReceiveNotifications = async () => {
    const messaging = app.messaging();
    await messaging.requestPermission();
    return messaging.getToken();
  };
}

export default Firebase;
