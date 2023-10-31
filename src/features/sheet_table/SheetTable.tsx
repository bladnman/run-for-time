import useTableData from "@features/sheet_table/hooks/useTableData.ts";
import { Table } from "@mui/joy";

export default function SheetTable() {
  const tableData = useTableData();
  return (
    <Table sx={{ "& tr > *:not(:first-child)": { textAlign: "right" } }}>
      <thead>
        <tr>
          <th style={{ width: "20%" }}>Column width (40%)</th>
          <th>Calories</th>
          <th>Fat&nbsp;(g)</th>
          <th>Carbs&nbsp;(g)</th>
          <th>Protein&nbsp;(g)</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.calories}</td>
            <td>{row.fat}</td>
            <td>{row.carbs}</td>
            <td>{row.protein}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
