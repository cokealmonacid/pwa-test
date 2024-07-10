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
            <FcmTokenComp />
            <Notifications notifications={data && data.notifications} />
          </>
        )
      }
    </section>
  )
};

export default Dashboard;
