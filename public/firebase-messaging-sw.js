importScripts(
  "https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyChqoqqyohlY6Gg1FNGF4NV1kvyhKIqer4",
  authDomain: "notifier-f1f22.firebaseapp.com",
  projectId: "notifier-f1f22",
  storageBucket: "notifier-f1f22.appspot.com",
  messagingSenderId: "347535482511",
  appId: "1:347535482511:web:20f79e52e9aac7baa55afa",
  measurementId: "G-LQ12KN62C2"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(({ notification }) => {
  console.log("[firebase-messaging-sw.js] Received background message ");
  const notificationTitle = notification.title;
  const notificationOptions = {
      body: notification.body,
  };

  if (notification.icon) {
      notificationOptions.icon = notification.icon;
  }

  self.registration.showNotification(notificationTitle, notificationOptions);
});