import store from "libs/store";

import { Provider } from "react-redux";
import AlertModal from ".";
import { useState } from "react";

export default {
  component: AlertModal,
  title: "molecules/alertModal",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = (args) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </button>
      <AlertModal
        severity={args.severity}
        content={args.content}
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
      />
    </div>
  );
};
Default.args = {
  severity: "success",
  content: "This is a success message",
};