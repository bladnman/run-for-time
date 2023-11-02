export default function useIconClassName(dayStatus = 0, isCircleIcon = false) {
  const offClassName = isCircleIcon ? "icon-state-white" : "icon-state-gray";

  switch (dayStatus) {
    case 1:
      return "icon-state-success";
    case 2:
      return "icon-state-partial";
    case 3:
      return "icon-state-failure";
    default:
      return offClassName;
  }
}
