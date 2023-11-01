export default function dayNameAbrv(dayName: string) {
  if (dayName.toLowerCase() === "monday") return "Mon";
  if (dayName.toLowerCase() === "tuesday") return "Tue";
  if (dayName.toLowerCase() === "wednesday") return "Wed";
  if (dayName.toLowerCase() === "thursday") return "Thu";
  if (dayName.toLowerCase() === "friday") return "Fri";
  if (dayName.toLowerCase() === "saturday") return "Sat";
  if (dayName.toLowerCase() === "sunday") return "Sun";
  return "";
}
