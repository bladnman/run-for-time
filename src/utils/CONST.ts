export enum DAYS_OF_WEEK {
  SUNDAY = 0,
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
}

export function dayName(dayIndex: number): string {
  const dayKey = Object.keys(DAYS_OF_WEEK).find(
    (key: string) =>
      DAYS_OF_WEEK[key as keyof typeof DAYS_OF_WEEK] === dayIndex,
  );
  return dayKey ? dayKey : "Invalid day";
}
