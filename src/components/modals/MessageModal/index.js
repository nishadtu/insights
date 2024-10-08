import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import ModalButton from "components/buttons/ModalButton";
import { ModalHead, ModalDescription } from "components/Styles/ModalStyle";

const styleModal = (theme) => ({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 500,
	bgcolor: "#f1f1f1",
	border: "2px solid #f1f1f1",
	boxShadow: 24,
	p: 5,
	outline: "none",
	color: "#FFF",
	textAlign: "center",
	borderRadius: "20px",
	[theme.breakpoints.only("xs")]: {
		maxWidth : '80%',
	},
});


const MessageModal = ({ isOpen, handleClose, data }) => {
	const handleCallback = () => {
		handleClose();
		if (data.callback) {
			data.callback();
		}
	};
	return (
		<Modal open={isOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"  slotProps={{ backdrop: { style: { backgroundColor: 'rgba(0,0,0,0.9)' } } }}>
			<Box sx={styleModal}>
				{!data?.modalWait && <Typography sx={ModalHead} id="modal-modal-title" variant="h6" component="h2">
					{data?.header}
				</Typography>}
				{data?.modalWait && <div className="bar"></div>}				
				<Typography sx={ModalDescription} id="modal-modal-description" >
					{data?.text}
				</Typography>
				{!data?.modalWait && <ModalButton type={"button"} handleClick={handleCallback} text={"continue"} />}
			</Box>
		</Modal>
	);
};

export default MessageModal;
