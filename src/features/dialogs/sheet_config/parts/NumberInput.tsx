import { Input } from "@mui/joy";
import React from "react";

export default function NumberInput({
  value,
  onChange,
  defaultValue = 10,
  min = 1,
  max = 99,
  step = 1,
}: {
  value: number;
  onChange: (n: number) => void;
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
        onChange(parseInt(event.target.value || defaultValue.toString()))
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
