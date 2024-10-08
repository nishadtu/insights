import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/material";
import logo from "images/logo.png";
import ModalButton from "components/buttons/ModalButton";

const styleModal = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "#017dc3",
	border: "2px solid #017dc3",
	boxShadow: 24,
	p: 5,
	outline: "none",
	color: "#FFF",
	textAlign: "center",
	borderRadius: "20px",
	backgroundImage :  'linear-gradient(#28abdb, #236cb5)',
};

const ModalHead = (theme) => ({
	color: '#FFFFFF',
	fontFamily: 'Poppins-Medium',
	fontSize: '2.75rem',
	lineHeight: '3rem',
	marginTop: '30px',
	textAlign: 'center',
	marginBottom: '20px',
	[theme.breakpoints.only("xs")]: {
		fontSize: '1.75rem',
		lineHeight: '2rem',
		marginTop: '15px',
		marginBottom: '15px',
	},
});

const qrImgStyle = (theme) => ({
	width: 350, 
	maxWidth: { xs: "75%", md: "70%" }, 
	border: '10px solid #000000',
	display : 'block',
	margin : 'auto',
	padding : '15px',
	background : '#FFF',
	[theme.breakpoints.only("xs")]: {

	},
});
export const QrModal = ({ qrUrl, isOpen, handleClose }) => {
	return (
		isOpen && (
			<Modal open={isOpen} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
				<Box sx={styleModal}>
					<Box component="img" sx={{width: 150, maxWidth: { xs: "75%", md: "70%" },}}	alt="Insights Admin Dashboard"	src={logo}	/>
					<Typography id="modal-modal-title" sx={ModalHead} variant="h3" component="h2" style={{ textAlign: "center" }}>
						QR Code
					</Typography>
					<Box component="img" sx={qrImgStyle}	alt="Insights Admin Dashboard"	src={qrUrl}	/>
					<ModalButton type={"button"} handleClick={handleClose} text={"ok"} />
				</Box>
			</Modal>
		)
	);
};
