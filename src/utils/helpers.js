export function addComma(price) {
  return new Intl.NumberFormat("fa-IR").format(price);
}

export const getRelativeTime = (date) => {
  const now = new Date();
  const created = new Date(date);

  const diff = now - created;

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 60) return `${minutes} دقیقه پیش`;
  if (hours < 24) return `${hours} ساعت پیش`;
  if (days < 30) return `${days} روز پیش`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} ماه پیش`;

  const years = Math.floor(months / 12);
  return `${years} سال پیش`;
};
