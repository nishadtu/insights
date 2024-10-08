import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import logo from "images/logo-white.png";
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { WelcomeModalDescription, WelcomeModalHead } from "components/Styles/ModalStyle";


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
	},
});

const ModalHead = (theme) => ({
	color: '#ff0000',
	fontFamily: 'Avenir-Medium',
	fontSize: '2.75rem',
	lineHeight: '3rem',
	marginTop: '30px',
	textAlign: 'center',
	marginBottom: '20px',
	[theme.breakpoints.only("xs")]: {
		fontSize: '2rem',
		lineHeight: '2.25rem',
		marginTop: '15px',
		marginBottom: '15px',
	},
});

const ModalDescription = (theme) => ({
	textAlign: 'center',
	fontFamily: 'sequel-sans-medium-body',
	color: '#000000',
	fontSize: '1.35rem',
	lineHeight: '2rem',
	marginTop: '5px',
	padding: '10px',
	[theme.breakpoints.only("xs")]: {
		fontSize: '1.25rem',
		lineHeight: '1.75rem',
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



const QuizResultModal = ({ isOpen, handleClose, data }) => {

	return (
		<Modal open={isOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
			<Box sx={styleModal} onClick={handleClose} >
				
				<Typography sx={WelcomeModalHead} id="modal-modal-title" variant="h6" component="h2">
					{data?.header}
				</Typography>

				<Typography sx={WelcomeModalDescription} id="modal-modal-description" >
					You completed the quiz. Thank you for playing. See your final score below
				</Typography>

				<Typography sx={WelcomeModalDescription} id="modal-modal-description"  variant="p" component="p" style={{marginTop : '0px'}}>
					You scored <span style={{ display : 'block'}}>{data?.text}</span>
				</Typography>

				<Typography id="modal-modal-description-1" sx={TouchBtn} variant="div" component='div'>
					<p ><TouchAppIcon sx={{ fontSize: '2.5rem', marginTop: '-12px' }} />{data?.touch}</p>
				</Typography>
			</Box>
		</Modal>
	);
};

export default QuizResultModal;
