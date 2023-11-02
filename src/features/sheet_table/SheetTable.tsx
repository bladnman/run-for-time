import useTableData from "@features/sheet_table/hooks/useTableData.ts";
import { Box, colors, Table, Typography } from "@mui/joy";
import useSheetConfigStore from "@store/SheetConfigStore.ts";
import VStack from "@components/VStack.tsx";
import dayNameAbrv from "@utils/dayNameAbrv.ts";
import useDayStatus from "@/hooks/useDayStatus.ts";

export default function SheetTable() {
  const tableData = useTableData();
  const daysOfWeek = useSheetConfigStore((state) => state.daysOfWeek);
  const showWeekNumber = useSheetConfigStore((state) => state.showWeekNumber);

  return (
    <Table
      borderAxis="yBetween"
      stripe="odd"
      stickyHeader
      sx={{ "& tr > *": { textAlign: "center" } }}
    >
      <thead>
        <tr>
          {showWeekNumber && <th></th>}
          {daysOfWeek.map((day) => (
            <th key={day}>
              <Typography
                sx={{ fontFamily: "Lalezar", textTransform: "uppercase" }}
              >
                {dayNameAbrv(day)}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.weekLabel}>
            {showWeekNumber && (
              <td>
                <Typography
                  sx={{ fontFamily: "Lalezar", textTransform: "uppercase" }}
                >
                  {row.weekLabel}
                </Typography>
              </td>
            )}

            {row.days.map((day, idx) => (
              <DataCell
                duration={day.duration}
                count={day.count}
                weekNumber={row.weekNumber}
                dayNumber={idx + 1}
                key={`${row.weekLabel}-${idx}`}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
type DataCellProps = {
  duration: number;
  count: number;
  weekNumber: number;
  dayNumber: number;
};
function DataCell({ duration, count, weekNumber, dayNumber }: DataCellProps) {
  return (
    <td>
      <VStack sx={{ paddingTop: 1.5 }}>
        <Box sx={{ height: "2em" }}>
          <DataCellIcon
            count={count}
            weekNumber={weekNumber}
            dayNumber={dayNumber}
          />
        </Box>
        <DataCellIterationLabel duration={duration} count={count} />
      </VStack>
    </td>
  );
}
function DataCellIcon({
  count,
  weekNumber,
  dayNumber,
}: {
  count: number;
  weekNumber: number;
  dayNumber: number;
}) {
  const dayStatus = useDayStatus(weekNumber, dayNumber);
  const setDayStatus = useSheetConfigStore((state) => state.setDayStatus);
  const handleClick = () => {
    console.log({ weekNumber, dayNumber });
    setDayStatus(weekNumber, dayNumber, dayStatus ? 0 : 1);
  };
  return count < 1 ? (
    <IconDot dayStatus={dayStatus} onClick={handleClick} />
  ) : (
    <IconCircle dayStatus={dayStatus} onClick={handleClick} />
  );
}
function DataCellIterationLabel({
  duration,
  count,
}: {
  duration: number;
  count: number;
}) {
  if (count < 1) return null;
  return (
    <Typography sx={{ fontSize: 10, fontStyle: "italic" }}>
      {count} x {duration}
    </Typography>
  );
}
type IconProps = {
  dayStatus: number;
  onClick: () => void;
  iconSize?: string;
};
function IconDot({ dayStatus, iconSize = "1em", onClick }: IconProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        flexShrink: 0,
        width: iconSize,
        height: iconSize,
        // backgroundColor: dayStatus ? "#5da8e4" : "lightgray",
        // borderColor: dayStatus ? "#2196f3" : "transparent",
        backgroundColor: dayStatus ? "#19b13d" : "lightgray",
        borderRadius: "50%",
      }}
    />
  );
}
function IconCircle({ dayStatus, iconSize = "1.5em", onClick }: IconProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        flexShrink: 0,
        width: iconSize,
        height: iconSize,
        borderRadius: "50%",
        // backgroundColor: dayStatus ? "#5da8e4" : "white",
        // borderColor: dayStatus ? "#2196f3" : "lightgray",
        backgroundColor: dayStatus ? "#19b13d" : "white",
        borderColor: dayStatus ? "transparent" : "lightgray",
        borderWidth: 3,
        borderStyle: "solid",
      }}
    />
  );
}
