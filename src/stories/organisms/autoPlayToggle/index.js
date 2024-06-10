import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";

export const AutoPlayToggle = ({ alignment, handleAlignment }) => {
  return (
    <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment}>
      <ToggleButton value={true}>
        <PlayCircleIcon />
      </ToggleButton>
      <ToggleButton value={false}>
        <StopCircleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
