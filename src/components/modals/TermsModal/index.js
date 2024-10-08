import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import EmailButton from "components/buttons/EmailButton";
import AgreeButton from "components/buttons/AgreeButton";
import { termsLogo, styleTerms, termsModalHead, termsModalDescription } from "components/Styles/ModalStyle";
import logo from "images/logo.png";





const TermsModal = ({ isOpen, handleClose, data, handleSubmitEmail, handleSubmitDisagree, handleSubmitAgree }) => {

	return (
		<Modal open={isOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" slotProps={{ backdrop: { style: { backgroundColor: 'rgba(0,0,0,0.9)' } } }}>
			<Box sx={styleTerms}>
				<Grid item xs={12}>
					<Box component="img" sx={termsLogo} alt="Insights Admin Dashboard" src={logo} />
				</Grid>
				<Typography sx={termsModalHead} id='modal-modal-title' variant="h6" component="h2">
					Terms and Conditions
				</Typography>
				<Typography id="modal-modal-description" sx={termsModalDescription} variant="div" component='div'>
					<p className="mt30">All data collected as part of this activity will be done so by Insights Admin Dashboard's service provider, Provision Design.</p>
					<p>Provisions Design will collect your name, email address, and phone number on behalf of Insights Admin Dashboard for purposes of running this Longest Drive and Nearest the Pin and contacting you about results. If you do not want to provide your contact information, you will be unable to play the game. </p>
					<p>Further information about the processing and use of your data by Insights Admin Dashboard, including information about how you can request access to, deletion of, or correction of your personal information, can be found in <a href="#" target="_blank" rel="noreferrer">Insights Admin Dashboard's Privacy Policy.</a></p>
					<p>Please accept these Terms and Conditions to proceed. </p>
				</Typography>
				<Grid container spacing={2} style={{ marginTop: '20px', padding : '0 10px' }}>
					<Grid item xs={12} sm={4} className="left-buttons">
						<EmailButton type={"button"} handleClick={handleSubmitEmail} style={{ marginRight: "15px" }} text={"Email me"} />
					</Grid>
					<Grid item xs={12} sm={8} className="right-buttons">
						<EmailButton type={"button"} handleClick={handleSubmitDisagree} style={{ marginRight: "10px" }} text={"Disagree"} />
						<AgreeButton type={"button"} handleClick={handleSubmitAgree} text={"Agree"} />
					</Grid>

				</Grid>
			</Box>
		</Modal>
	);
};

export default TermsModal;
