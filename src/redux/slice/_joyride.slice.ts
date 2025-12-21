import type { joyride_steps } from "@/constants";
import type { JoyrideState } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: JoyrideState = {
  run: false,
  status: "not_started",
  stepsKey: "",
};

export default createSlice({
  name: "joyride",
  initialState,
  reducers: {
    startJoyride: (
      state,
      action: PayloadAction<keyof typeof joyride_steps>
    ) => {
      state.run = true;
      state.status = "running";
      state.stepsKey = action.payload;
    },
    stopJoyride: (state) => {
      state.run = false;
      state.status = "finished";
    },
    skipJoyride: (state) => {
      state.run = false;
      state.status = "skipped";
    },
    resetJoyride: (state) => {
      state.run = false;
      state.status = "not_started";
      state.stepsKey = "";
    },
  },
});
