import * as React from "react";
import { DialogTitle, DialogContent, DialogContentText } from "@mui/material";
import Dialog from "@mui/material/Dialog";

interface DialogWindow {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

function DialogWindow(props: DialogWindow) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Grateful to Messi because you're trying to get to know me.</DialogTitle>
            <DialogContent className="flex flex-wrap justify-center">
                <img src="images/MemeTrofeo.jpg" alt="meme to get to know me" />
                <DialogContentText>
                    CR7 has no World Cup with Portugal, but Messi does with Argentina.
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}

export default DialogWindow;