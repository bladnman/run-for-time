import useSheetConfigStore from "@store/SheetConfigStore.ts";
import { IconButton, Input } from "@mui/joy";
import React from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import randomName from "@utils/randomName.ts";

export default function UserNameField({
  sx,
  onEscape,
  onEnter,
  onBlur,
}: {
  sx?: any;
  onEscape?: () => void;
  onEnter?: () => void;
  onBlur?: () => void;
}) {
  const containerRef = React.useRef<HTMLInputElement>(null);
  const fieldRef = React.useRef<HTMLInputElement>(null);
  const username = useSheetConfigStore((state) => state.username);
  const setUsername = useSheetConfigStore((state) => state.setUsername);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      onEscape && onEscape();
    }
    if (event.key === "Enter") {
      onEnter && onEnter();
    }
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    let { relatedTarget } = event;
    let parent = relatedTarget?.parentElement;
    while (parent) {
      // blurring to something in our field. ignore.
      if (parent === containerRef?.current) {
        return;
      }
      parent = parent.parentElement;
    }

    onBlur && onBlur();
  };
  React.useEffect(() => {
    fieldRef.current?.focus();
  });

  const rollNewName = () => {
    setUsername(randomName());
    setTimeout(() => {
      fieldRef.current?.focus();
    }, 10);
  };
  return (
    <Input
      ref={containerRef}
      value={username}
      onChange={(event) => setUsername(event.target.value)}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      sx={{ ...sx }}
      slotProps={{
        input: {
          ref: fieldRef,
        },
      }}
      endDecorator={
        <IconButton onClick={rollNewName}>
          <AutorenewIcon sx={sx} />
        </IconButton>
      }
    />
  );
}
