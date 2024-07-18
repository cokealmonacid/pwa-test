"use client";

import { useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from 'react-query';

import { Notifications } from '@/components/Notifications';
import FcmTokenComp from '@/components/firebaseForeground';
import { setToken, showNotifications } from '@/utils/services';
import { useSessionStore } from '@/utils/store';
import useFcmToken from '@/utils/useFCMToken';
import { Navbar } from '@/components/Navbar';
import Loading from '@/components/Loading';

const Dashboard = () => {
  const router = useRouter();
  const { fcmToken } = useFcmToken();
  const { access_token } = useSessionStore();

  const { isLoading, data} = useQuery({
    queryKey: ["GET_NOTIFICATIONS"],
    queryFn: () => {
      if (!access_token) return null;
      return showNotifications(access_token ?? '');
    }
  });

  useLayoutEffect(() => {
    if (!access_token) router.push("/");
    if (access_token && fcmToken) {
      setToken(access_token, fcmToken);
    }
  }, [access_token, fcmToken, router]);
   
  return(
    <section className="w-screen h-screen bg-white">
      <Navbar />
      {
        isLoading && (data == null || data == undefined )  ? (
          <Loading />
        ) : (
          <>
            <div className="w-[80%] md:w-[40%] mx-auto text-gray-800 my-2">
              <p><span className="font-semibold">Permiso de notificaciones:</span> {Notification.permission}</p>
              <p><span className="font-semibold">Current token:</span> {fcmToken ?? "No hay token"}</p>
            </div>
            <FcmTokenComp />
            <Notifications notifications={data && data.notifications} />
          </>
        )
      }
    </section>
  )
};

export default Dashboard;
