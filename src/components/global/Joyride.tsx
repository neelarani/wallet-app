import Ride, { type CallBackProps, STATUS } from "react-joyride";
import { joyride_steps } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/redux";
import * as slice from "@/redux/slice";

const JoyrideWrapper = () => {
  const dispatch = useAppDispatch();
  const { run, stepsKey } = useAppSelector((state) => state.joyride);
  const steps = joyride_steps[stepsKey as keyof typeof joyride_steps] || [];

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    if (status === STATUS.FINISHED) {
      dispatch(slice.joyrideSlice.actions.stopJoyride());
      localStorage.setItem("joy-ride", "off");
    }
    if (status === STATUS.SKIPPED) {
      dispatch(slice.joyrideSlice.actions.skipJoyride());
    }
  };

  if (!steps.length) return null;

  return (
    <Ride
      steps={steps}
      run={run}
      continuous
      showSkipButton
      showProgress
      callback={handleJoyrideCallback}
      styles={{
        options: {
          zIndex: 3,
          primaryColor: "var(--color-primary)",
          backgroundColor: "var(--color-popover)",
          textColor: "var(--color-popover-foreground)",
          arrowColor: "var(--color-popover)",
          overlayColor: "rgba(0,0,0,0.7)",
        },
        buttonSkip: { color: "var(--color-muted)" },
        buttonNext: { backgroundColor: "var(--color-primary)", color: "#fff" },
      }}
    />
  );
};

export default JoyrideWrapper;
