import { ErrorAlertProps } from "../utils/interfaces";

const ErrorAlert = ({ message }: ErrorAlertProps) => (
  <div className="border-2 border-red-400 rounded bg-red-200 p-2 my-2">
    <p className="text-sm text-red-600">{message}</p>
  </div>
);

export default ErrorAlert;
