import { create } from "zustand";
import { Actions, SessionState } from "./interfaces";

const INITIAL_STATE = {
  accessToken: null,
  user: null,
};

export const useSessionStore = create<SessionState & Actions>()((set) => ({
  ...INITIAL_STATE,
  createSession(session) {
    const { user, accessToken } = session;
    set(() => ({
      accessToken, 
      user
    }))
  },
  removeSession() {
    set(() => ({...INITIAL_STATE}))
  }
}));
