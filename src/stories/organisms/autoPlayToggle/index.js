import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";

export const AutoPlayToggle = ({ autoPlay, handleAutoPlay }) => {
  return (
    <ToggleButtonGroup value={autoPlay} exclusive onChange={handleAutoPlay}>
      <ToggleButton value={true}>
        <PlayCircleIcon />
      </ToggleButton>
      <ToggleButton value={false}>
        <StopCircleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
