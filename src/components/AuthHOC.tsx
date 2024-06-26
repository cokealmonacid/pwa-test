"use client";

import React, { ComponentType } from 'react';
import { useSessionStore } from '@/utils/store';
import { useRouter } from 'next/navigation';

const authHOC = <P extends object>(WrappedComponent: ComponentType<P>): React.FC<P> => {
  const AuthComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const { access_token } = useSessionStore();

    if (!access_token) {
      router.push('/login')
      return null
    }
    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default authHOC;