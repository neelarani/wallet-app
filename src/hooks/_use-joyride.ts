import type { joyride_steps } from "@/constants";
import { slice, useAppDispatch } from "@/redux";
import { useEffect } from "react";

export const useJoyride = (
  stepsKey: keyof typeof joyride_steps,
  trigger: boolean
) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const joy_run_off = localStorage.getItem("joy-run") as "off";

    if (!trigger && joy_run_off !== "off")
      dispatch(slice.joyrideSlice.actions.startJoyride(stepsKey));

    return () => {
      slice.joyrideSlice.actions.stopJoyride();
    };
  }, [dispatch, trigger, stepsKey]);
};
