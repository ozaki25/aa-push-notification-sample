importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: '223522125084',
});

const messaging = firebase.messaging();

self.addEventListener('push', event => {
  const {
    notification: { title, body, icon },
  } = event.data.json();
  self.registration.showNotification(title, { icon, body });
});
