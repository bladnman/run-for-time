import { Sheet, Typography } from "@mui/joy";
import HStack from "../../components/HStack.tsx";
import WeekStartSelect from "./parts/WeekStartSelect.tsx";

export default function SheetConfigForm() {
  return (
    <Sheet color="neutral" variant="outlined" sx={{ padding: 5 }}>
      <h4>Sheet Config Form</h4>
      <HStack>
        <Typography>Week starts with</Typography>
        <WeekStartSelect />
      </HStack>
    </Sheet>
  );
}
