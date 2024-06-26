export interface ChildrenProps {
  children: React.ReactNode;
}

export interface ErrorAlertProps {
  message: string;
}

export interface UserProps {
  name: string;
  email: string;
  phone: string;
}

export interface SessionState {
  access_token: string | null;
  user: UserProps | null;
}

export interface Actions {
  createSession: (session: SessionState) => void;
  removeSession: () => void;
}

export interface Notification {
  id: string;
  title: string;
  body: string;
  created_at: string;
}