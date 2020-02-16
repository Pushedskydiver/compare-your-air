export const fetchData = async (api: string) => {
  const response = await fetch(api);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }

  return body;
};

export const calcLastUpdated = (today: Date, previous: Date) => {
  const todaysDate = today.getTime();
  const previousDate = previous.getTime();

  const diff = Math.floor(todaysDate - previousDate);
  const day = 1000 * 60 * 60 * 24;

  const days = Math.floor(diff / day);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 31);
  const years = Math.floor(months / 12);
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  return { years, months, weeks, days, hours, minutes };
};

export const formatDate = (key: string, date: number) => {
  if (date === 1) {
    return `one ${key.replace('s', '')} ago`;
  } else {
    return `${date} ${key} ago`;
  }
}
