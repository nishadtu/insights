import { useParams } from "react-router-dom";
import { Grid, Paper, Typography } from "@mui/material";
import UserDataService from "services/services";
import React, { useEffect } from "react";
import Header from "components/headers/Header";

const MessageDescription = (theme) => ({
	textAlign: 'center',
	fontFamily: 'Poppins-Medium',
	color: '#000000',
	fontSize: '1.5rem',
	lineHeight: '2rem',
	marginTop: '15px',
	[theme.breakpoints.only("xs")]: {
		fontSize: '1.25rem',
		lineHeight: '1.75rem',
	},
});


const UnsubscribeUser = () => {
	const { email } = useParams();
	useEffect(() => {
		const client = 'insights';
		const newUser = { email, client };
		UserDataService.unSubscribeUser(newUser);
	}, [email]);



	return (

		<div className="nearestScoreBg">
			<Header text="Unsubscribe" title="Unsubscribe | Insights Admin Dashboard" eventName="UNSUBSCRIBE"/>
			<Paper sx={{ maxWidth: {xs : '90%', md : '70%'}, flexGrow: 1, boxShadow: 'none', marginTop: '5px', background: 'transparent', marginLeft : '7%'}}	>
				
				<Grid container spacing={2} style={{ marginTop: '20px' }}>
					<Grid item xs={12} sm={6}>
						<Typography sx={MessageDescription} id="modal-modal-description" style={{textAlign : 'left'}}>
						Unsubscribed Successfully. Your email <span style={{color: '#006bb6'}}> {email}</span> has been successfully unsubscribed from this list. Thank you. 
						</Typography>
					</Grid>
				</Grid>
			</Paper>
		</div>


	);
};

export default UnsubscribeUser;
