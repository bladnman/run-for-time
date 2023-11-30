import VStack from "@components/VStack.tsx";
import BodyToolbar from "@features/main_body/body_toolbar/BodyToolbar.tsx";
import SheetTable from "@features/sheet_table/SheetTable.tsx";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/joy";
import useSheetConfigStore from "@store/SheetConfigStore.ts";
import UserNameField from "@features/dialogs/sheet_config/parts/UserNameField.tsx";
import React from "react";
import useBreakSize from "@/hooks/useBreakSize.ts";

export default function MainBody() {
  const username = useSheetConfigStore((state) => state.username);
  const [isEditingName, setIsEditingName] = React.useState(false);
  const { isLtSm } = useBreakSize();
  const renderName = () => {
    let fontSize = isLtSm ? "2.5em" : "3em";
    if (isLtSm && isEditingName) {
      fontSize = "1.5em";
    }
    if (isEditingName) {
      return (
        <UserNameField
          sx={{
            fontFamily: "Irish Grover",
            fontSize: fontSize,
          }}
          onEscape={() => setIsEditingName(false)}
          onEnter={() => setIsEditingName(false)}
          onBlur={() => setIsEditingName(false)}
        />
      );
    }
    return (
      <Typography
        sx={{ fontFamily: "Irish Grover", fontSize: fontSize }}
        onClick={() => setIsEditingName(true)}
      >
        {username}
      </Typography>
    );
  };
  const style = !isLtSm ? {} : { border: "none", boxShadow: "none" };
  return (
    <VStack>
      <Card
        style={style}
        sx={{
          padding: isLtSm ? 0 : 0,
          borderRadius: 20,
          maxWidth: "800px",
          boxShadow: isLtSm ? "" : "lg",
        }}
      >
        <CardContent>
          <Box sx={{ paddingTop: "1em", paddingLeft: "1em" }}>
            {renderName()}
          </Box>
          <SheetTable />
        </CardContent>
        <CardActions
          className={"no-print"}
          sx={{
            paddingX: "2em",
            paddingY: "0.5em",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <BodyToolbar />
        </CardActions>
      </Card>
    </VStack>
  );
}
