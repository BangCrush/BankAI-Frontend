import { Alert, Modal } from "@mui/material";

function AlertModal({severity,content,open,setOpen,handleClose}) {
    setTimeout(() => {
        setOpen(false);
    }, 3000);
    return (
        <Modal open={open} onClose={handleClose} hideBackdrop sx={{top:10,width:300, marginX:'auto'}}>
            <Alert severity={severity}>
                {content}
            </Alert>
        </Modal>
    );
}

export default AlertModal;