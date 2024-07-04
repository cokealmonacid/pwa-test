"use client";

import { useEffect, useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from 'react-query';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

import { Notifications } from '@/components/Notifications';
import { setToken, showNotifications } from '@/utils/services';
import { useSessionStore } from '@/utils/store';
import { requestPermission } from '@/utils/helpers';
import { Navbar } from '@/components/Navbar';
import Loading from '@/components/Loading';
import app from "@/utils/initialize";

const Dashboard = () => {
  const router = useRouter();
  const { access_token } = useSessionStore();
  const messaging = getMessaging(app);

  const { isLoading, status, data} = useQuery({
    queryKey: ["GET_NOTIFICATIONS"],
    queryFn: () => {
      if (!access_token) return null;
      return showNotifications(access_token ?? '');
    }
  });

  useEffect(() => {
    getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_KEY,
    })
        .then((currentToken) => {
            if (currentToken) {
              setToken(access_token ?? '', currentToken);
            } else {
                console.log("No registration token available. Request permission to generate one.");
                requestPermission();
            }
        })
        .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
        });

    onMessage(messaging, function ({ notification = { title: '', body: '' } }) {
        console.log("NOTIFICACION", notification);
        new Notification(notification.title ?? '', {
        body: notification.body,
      });
    });
  }, [access_token, messaging]);

  useLayoutEffect(() => {
    if (!access_token) router.push("/");
  }, [access_token, router]);
   
  return(
    <section className="w-screen h-screen bg-white">
      <Navbar />
      {
        isLoading && (data == null || data == undefined )  ? (
          <Loading />
        ) : (
          <Notifications notifications={data && data.notifications} />
        )
      }
    </section>
  )
};

export default Dashboard;
