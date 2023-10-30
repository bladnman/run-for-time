import { Input } from "@mui/joy";
import React from "react";

export default function NumberInput({
  value,
  setFn,
  defaultValue = 10,
  min = 1,
  max = 99,
  step = 1,
}: {
  value: number;
  setFn: (n: number) => void;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
}) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  return (
    <Input
      type="number"
      defaultValue={value}
      onChange={(event) =>
        setFn(parseInt(event.target.value || defaultValue.toString()))
      }
      slotProps={{
        input: {
          ref: inputRef,
          min: min,
          max: max,
          step: step,
        },
      }}
    />
  );
}
