import { Option, Select } from "@mui/joy";
import React from "react";
import { dayName, DAYS_OF_WEEK } from "../../../utils/CONST.ts";

export default function WeekStartSelect() {
  const handleChange = (
    _: React.SyntheticEvent | null,
    newValue: string | null,
  ) => {
    console.log(`You chose "${newValue}"`);
  };
  const renderOptions = () => {
    const values = Object.values(DAYS_OF_WEEK) as [number];
    console.log(`[🐽](WeekStartSelect) values`, values); // ! remove me
    return values.map((value) => {
      return <Option value={value}>{dayName(value)}</Option>;
    });
  };
  return (
    <Select defaultValue="Monday" onChange={handleChange}>
      {renderOptions()}
    </Select>
  );
}
