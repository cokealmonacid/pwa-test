import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

import { Actions, SessionState } from "./interfaces";

const INITIAL_STATE = {
  access_token: null,
  user: null,
};

export const useSessionStore = create<SessionState & Actions>()(persist((set) => ({
  ...INITIAL_STATE,
  createSession(session) {
    const { user, access_token } = session;
    set(() => ({
      access_token, 
      user
    }))
  },
  removeSession() {
    set(() => ({...INITIAL_STATE}))
  }
}), {
  name: "pwa-storage",
  storage: createJSONStorage(() => sessionStorage)
}));
