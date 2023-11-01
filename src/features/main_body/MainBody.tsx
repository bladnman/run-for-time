import VStack from "@components/VStack.tsx";
import BodyToolbar from "@features/main_body/body_toolbar/BodyToolbar.tsx";
import SheetTable from "@features/sheet_table/SheetTable.tsx";
import { Sheet, Typography } from "@mui/joy";
import HStack from "@components/HStack.tsx";
import useSheetConfigStore from "@store/SheetConfigStore.ts";
import UserNameField from "@features/dialogs/sheet_config/parts/UserNameField.tsx";
import React from "react";

export default function MainBody() {
  const username = useSheetConfigStore((state) => state.username);
  const [isEditingName, setIsEditingName] = React.useState(false);
  const renderName = () => {
    if (isEditingName) {
      return (
        <UserNameField
          sx={{ fontFamily: "Irish Grover", fontSize: "3em" }}
          onEscape={() => setIsEditingName(false)}
          onEnter={() => setIsEditingName(false)}
          onBlur={() => setIsEditingName(false)}
        />
      );
    }
    return (
      <Typography
        sx={{ fontFamily: "Irish Grover", fontSize: "3em" }}
        onClick={() => setIsEditingName(true)}
      >
        {username}
      </Typography>
    );
  };
  return (
    <VStack>
      <Sheet sx={{ padding: 3, borderRadius: 20 }}>
        <HStack>
          {renderName()}
          <BodyToolbar />
        </HStack>
        <SheetTable />
      </Sheet>
    </VStack>
  );
}
