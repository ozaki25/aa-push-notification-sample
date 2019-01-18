import app from 'firebase/app';
import 'firebase/messaging';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  projectId: process.env.REACT_APP_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

const serverKey = process.env.REACT_APP_SERVER_KEY;

const topicName = 'aa-sample';

const subscribeUrl = token => `https://iid.googleapis.com/iid/v1/${token}/rel/topics/${topicName}`;

const headers = {
  'Content-Type': 'application/json',
  Authorization: `key=${serverKey}`,
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

  subscribeNotification = ({ token }) => fetch(subscribeUrl(token), { headers, method: 'post' });
}

export default Firebase;
