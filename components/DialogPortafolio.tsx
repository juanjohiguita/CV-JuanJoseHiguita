import { Dialog, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material"
import { TransitionProps } from "@mui/material/transitions";
import { Dispatch, SetStateAction, forwardRef } from "react";

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
})


interface DialogPortafolioProps {
    open: boolean;
    setPortfolioDialogOpen: Dispatch<SetStateAction<boolean>>
    link?: string;
    image: string;
    description: string;

}

const DialogPortafolio = ({ open, setPortfolioDialogOpen: setPortDialogfolioOpen, link, image, description}: DialogPortafolioProps) => {
    return (
        <Dialog className="place-items-center flex flex-col" TransitionComponent={Transition} open={open} onClickCapture={() => { setPortDialogfolioOpen(false) }}>

            <DialogContent className="flex flex-col place-items-center gap-5">
                <img src={image} alt="Picture Item Porafolio" />
                <DialogContentText style={{ fontSize: 18, textAlign: "center" }}>{description}</DialogContentText>
                <a className="hover:underline" style={{ color: "#be123c" }} onClick={() => window.open(link)}>{link}</a>
            </DialogContent>
        </Dialog>)
}

export { DialogPortafolio }