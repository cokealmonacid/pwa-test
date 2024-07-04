export const dateFormatter = (date: string) => {
  const parsedDate = new Date(date);
  const day = parsedDate.getDate();
  const month = parsedDate.getMonth() + 1;
  const year = parsedDate.getFullYear();

  return `${day}/${month}/${year}`;
}

export const requestPermission = () => {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
        console.log("Notification permission granted.");
    }
  });
}
