import app from 'firebase/app';
import 'firebase/messaging';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  projectId: process.env.REACT_APP_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

const serverKey = process.env.REACT_APP_SERVER_KEY;

const topicName = 'aa-sample';

const url = {
  subscribe(token) {
    return `https://iid.googleapis.com/iid/v1/${token}/rel/topics/${topicName}`;
  },
  publish: 'https://fcm.googleapis.com/fcm/send',
};

const headers = {
  'Content-Type': 'application/json',
  Authorization: `key=${serverKey}`,
};

const params = {
  to: `/topics/${topicName}`,
  notification: {
    title: 'Webプッシュ通知',
    body: 'Webアプリでプッシュ通知を送信できました！',
    icon:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
  },
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    const messaging = app.messaging();
    messaging.onMessage(function(payload) {
      const {
        notification: { title, body, icon },
      } = payload;
      new window.Notification(title, { body, icon });
    });
  }

  askForPermissionToReceiveNotifications = async () => {
    const messaging = app.messaging();
    await messaging.requestPermission();
    return messaging.getToken();
  };

  subscribeNotification = ({ token }) => fetch(url.subscribe(token), { headers, method: 'post' });

  publishNotification = () =>
    fetch(url.publish, { headers, body: JSON.stringify(params), method: 'post' });
}

export default Firebase;
