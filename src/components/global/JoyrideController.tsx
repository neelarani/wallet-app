"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { slice, useAppDispatch } from "@/redux";

const JoyrideController = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChange = (val: string) => {
    setValue(val);

    if (val === "off") {
      localStorage.setItem("joy-run", "off");
      dispatch(slice.joyrideSlice.actions.stopJoyride());
    } else {
      localStorage.removeItem("joy-run");
      dispatch(slice.joyrideSlice.actions.resetJoyride());
      window.location.reload();
    }
  };

  return (
    <Select value={value} onValueChange={handleChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Guiding Options" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="off">Turn Off</SelectItem>
        <SelectItem value="reset">Reset</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default JoyrideController;
