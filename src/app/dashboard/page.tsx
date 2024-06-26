"use client";

import { useRouter } from 'next/navigation';
import { useQuery } from 'react-query';

import { Notifications } from '@/components/Notifications';
import { Notification } from '@/utils/interfaces';
import { showNotifications } from '@/utils/services';
import { useSessionStore } from '@/utils/store';
import { Navbar } from '@/components/Navbar';
import Loading from '@/components/Loading';

const Dashboard = () => {
  const router = useRouter();
  const { access_token } = useSessionStore();

  const { isLoading, data} = useQuery({
    queryKey: ["GET_NOTIFICATIONS"],
    queryFn: () => {
      return showNotifications(access_token ?? '');
    }
  });

  // if (!access_token) {
  //   router.push('/')
  //   return null
  // }
   
  return(
    <section className="w-screen h-screen bg-white">
      <Navbar />
      {
        isLoading ? (
          <Loading />
        ) : (
          <Notifications notifications={data.notifications} />
        )
      }
    </section>
  )
};

export default Dashboard;
