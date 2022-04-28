export function handleDateAddingDays(value: Date, days: number) {
  const date = new Date(new Date(value).setDate(value.getDate() + days));

  return date;
}
