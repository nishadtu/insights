import React, { useState } from "react";
import { Modal, Box, Typography } from "@mui/material";
import logo from "images/logo.png";
import Grid from '@mui/material/Grid';
import FormButton from "components/buttons/FormButton";
import FormTextField from "components/formElements/FormTextField";
import closeButton from "images/close.png";
import userImg from "images/user.png";
import emailImg from "images/email.png";
import { emailModal, termsLogo, termsModalHead } from "components/Styles/ModalStyle";

const ExportModal = ({ isOpen, handleClose, data, sendDataToEmail, errorMsg }) => {
	const [adminName, setAdminName] = useState("");
	const [adminEmail, setAdminEmail] = useState("");
	const handleClickEmailModal = () => {
		sendDataToEmail(adminName, adminEmail);
		setAdminName("");
		setAdminEmail("");
	}

	return (
		<Modal open={isOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"  slotProps={{ backdrop: { style: { backgroundColor: 'rgba(0,0,0,0.9)' } } }}>
			<Box sx={emailModal}>
				<Box component="img" sx={{ width: 30, position: 'absolute', right: '10px', top: '15px' }} onClick={handleClose} alt="Insights Admin Dashboard" src={closeButton} />
				<Grid item xs={12}>
					<Box component="img" sx={termsLogo} alt="Insights Admin Dashboard" src={logo} />
				</Grid>
				<Typography sx={termsModalHead} id="modal-modal-title" variant="h6" component="h2">
					Please Fill
				</Typography>
				<Grid container spacing={2} style={{ margin: '20px auto 20px', maxWidth : '400px', display : 'block' }}>
					<Grid item xs={12} >
						<FormTextField type={'text'} user={userImg} label="Name" value={adminName} onChange={(e) => setAdminName(e.target.value)} marginTop="0px"  userImgStyle={{ left : '-42%'}} />
					</Grid>
					<Grid item xs={12} >
						<FormTextField type={'email'} user={emailImg} label="Email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} marginTop="15px"  userImgStyle={{ left : '-42%'}}/>
					</Grid>
					<Grid item xs={12} >
						<FormButton type={"button"} handleClick={handleClickEmailModal} style={{ marginRight: "15px", marginTop: '20px' }} text={"Submit"} />
						<Typography id="errorMsg" className="text-center" variant="p" component="p" sx={{color :'#ff0000', marginTop: '15px' }}>
						  {errorMsg}
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Modal>
	);
};

export default ExportModal;

