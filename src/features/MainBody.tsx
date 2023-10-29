import Button from "@mui/joy/Button";
import useMegaStore from "../store/MegaStore.ts";
import VStack from "../components/VStack.tsx";
import { Typography } from "@mui/joy";
import { DAYS_OF_WEEK, dayName } from "../utils/CONST.ts";
import SheetConfigForm from "./sheet_config_form/SheetConfigForm.tsx";

export default function MainBody() {
  const appName = useMegaStore((state) => state.appName);
  return (
    <VStack>
      <Button variant="solid">{appName}</Button>
      <SheetConfigForm />
      <Typography>
        {dayName(DAYS_OF_WEEK.MONDAY)} = {DAYS_OF_WEEK.MONDAY}
      </Typography>
      <Typography>
        {dayName(DAYS_OF_WEEK.TUESDAY)} = {DAYS_OF_WEEK.TUESDAY}
      </Typography>
      <Typography>
        {dayName(DAYS_OF_WEEK.WEDNESDAY)} = {DAYS_OF_WEEK.WEDNESDAY}
      </Typography>
      <Typography>
        {dayName(DAYS_OF_WEEK.THURSDAY)} = {DAYS_OF_WEEK.THURSDAY}
      </Typography>
      <Typography>
        {dayName(DAYS_OF_WEEK.FRIDAY)} = {DAYS_OF_WEEK.FRIDAY}
      </Typography>
      <Typography>
        {dayName(DAYS_OF_WEEK.SATURDAY)} = {DAYS_OF_WEEK.SATURDAY}
      </Typography>
      <Typography>
        {dayName(DAYS_OF_WEEK.SUNDAY)} = {DAYS_OF_WEEK.SUNDAY}
      </Typography>
    </VStack>
  );
}
