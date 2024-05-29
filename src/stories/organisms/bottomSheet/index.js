import { Close } from "@mui/icons-material";
import { Modal, Slide } from "@mui/material";
import { useState } from "react";
function BottomSheet({ open,setOpen, page }) {
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (      
      <Modal
        open={open}
        onClose={handleClose}
        style={{ border: "none" }}
        closeAfterTransition
      >
        <Slide direction="up" in={open} mountOnEnter unmountOnExit>
          <div className="bg-white w-full border-none rounded-t-20 pb-40 absolute bottom-0 outline-none">
            <div className="flex justify-between p-20">
              <Close onClick={() => setOpen(false)} />
            </div>
            <div className="whitespace-nowrap w-max mx-auto">{page}</div>
          </div>
        </Slide>
      </Modal>
  );
}

export default BottomSheet;
