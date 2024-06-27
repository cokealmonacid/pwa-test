export const dateFormatter = (date: string) => {
  const parsedDate = new Date(date);
  const day = parsedDate.getDate();
  const month = parsedDate.getMonth() + 1;
  const year = parsedDate.getFullYear();

  return `${day}/${month}/${year}`;
}