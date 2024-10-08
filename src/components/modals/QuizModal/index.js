import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import { WelcomeModalHead, WelcomeModalDescription } from "components/Styles/ModalStyle";
import TouchAppIcon from '@mui/icons-material/TouchApp';

const styleModal = (theme) => ({
	position: "absolute", 
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 500,
	bgcolor: "#017dc3",
	border: "2px solid #017dc3",
	boxShadow: 24,
	p: 5,
	outline: "none",
	color: "#FFF",
	textAlign: "center",
	borderRadius: "20px",
	backgroundImage :  'linear-gradient(#28abdb, #236cb5)',
	[theme.breakpoints.only("xs")]: {
		maxWidth : '80%',
		p: 2,
	},
});

const TouchBtn = (theme) => ({
	maxHeight: '40vh',
	overflow: 'auto',
	textAlign: 'center',
	fontFamily: 'Radikal-Thin',
	color: '#FFFFFF',
	fontSize: '1.25rem',
	lineHeight: '2.5rem',
	marginTop: '5px',
	padding: '10px',
	letterSpacing : '1px',
	fontWeight : '300',
	marginBottom : 0,
	[theme.breakpoints.only("xs")]: {
		fontSize: '.75rem',
		lineHeight: '1rem',
		maxHeight: '50vh',
	},
});


const QuizModal = ({ isOpen, handleClose, data }) => {
	const handleCallback = () => {
		handleClose();
		if (data.callback) {
			data.callback();
		}
	};
	return (
		<Modal open={isOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
			<Box sx={styleModal} onClick={handleClose} >
				<Typography sx={WelcomeModalHead} id="modal-modal-title" variant="h6" component="h2">
					{data?.header}
				</Typography>
		
				<Typography sx={WelcomeModalDescription} id="modal-modal-description" style={{ width : '80%', margin : '30px auto 20px'}}>
					{data?.text}
				</Typography>

				<Typography id="modal-modal-description-1" sx={TouchBtn} variant="div" component='div'>
					<p ><TouchAppIcon sx={{fontSize : '2.5rem', marginTop : '-12px' }}/>{data?.touch}</p>
				</Typography>
			</Box>
		</Modal>
	);
};

export default QuizModal;
