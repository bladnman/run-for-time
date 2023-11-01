import useTableData from "@features/sheet_table/hooks/useTableData.ts";
import { Box, Table, Typography } from "@mui/joy";
import useSheetConfigStore from "@store/SheetConfigStore.ts";
import VStack from "@components/VStack.tsx";
import dayNameAbrv from "@utils/dayNameAbrv.ts";

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
                key={`${row.weekLabel}-${idx}`}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
function DataCell({ duration, count }: { duration: number; count: number }) {
  return (
    <td>
      <VStack sx={{ paddingTop: 1.5 }}>
        <Box sx={{ height: "2em" }}>
          <DataCellIconDisplay count={count} />
        </Box>
        <DataCellIterationDisplay duration={duration} count={count} />
      </VStack>
    </td>
  );
}
function DataCellIconDisplay({ count }: { count: number }) {
  return count < 1 ? <IconDot /> : <IconCircle />;
}
function DataCellIterationDisplay({
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

function IconDot({ iconSize = "1em" }: { iconSize?: string }) {
  return (
    <Box
      sx={{
        flexShrink: 0,
        width: iconSize,
        height: iconSize,
        backgroundColor: "lightgray",
        borderRadius: "50%",
      }}
    />
  );
}
function IconCircle({ iconSize = "1.5em" }: { iconSize?: string }) {
  return (
    <Box
      sx={{
        flexShrink: 0,
        width: iconSize,
        height: iconSize,
        borderRadius: "50%",
        backgroundColor: "white",
        borderWidth: 3,
        borderColor: "gray",
        borderStyle: "solid",
      }}
    />
  );
}
