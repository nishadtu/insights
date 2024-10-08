import { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import FormButton from "components/buttons/FormButton";
import FormTextField from "components/formElements/FormTextField";
import UserDataService from "services/services";
import routeNames from "routes/routeNames";
import emailImg from "images/email.png";
import { useLocation, useNavigate } from 'react-router-dom';
import { isValidEmail } from "helpers";
import { infoText } from "components/Styles";

const UserLoginForm = ({ eventName, handleModalMessage }) => {
	const [email, setEmail] = useState("");
	const [events, setEvent] = useState("");
	const locationUrl = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		setEvent(eventName);
	}, [eventName]);

	useEffect(() => {
		if (locationUrl.state === null) { navigate(routeNames.nearest); } else { setEvent(locationUrl.state.events); console.log(locationUrl.state.events); }
	}, [locationUrl.state, navigate]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (email === "") {
			handleModalMessage("Please enter an email address which has been registered", true);
			return;
		} else if (!isValidEmail(email)) {
			handleModalMessage("Invalid emall address.", true);
			setEmail("");
			return;
		} else {
			const docSnap = await UserDataService.getUser(email);
			console.log(docSnap.data());
			if (docSnap.data()) {
				handleModalMessage("User successfully logged in.", false);
				setTimeout(() => {
					{ events === 'nearest' ? navigate(routeNames.nearestScore, { state: { email: email } }) : navigate(routeNames.longestScore, { state: { email: email } }) };
				}, 1000);
				return;
			} else {
				handleModalMessage("This email address hasn’t been registered. Please enter a valid email address.", true);
				setEmail("");
			}
		}
	};
	const handleClickRegister = () => {
		navigate(routeNames.register, { state: { events: events } });
	}

	return (

		<Paper sx={{ maxWidth: { xs: '90%', md: '70%' }, flexGrow: 1, boxShadow: 'none', marginTop: '5px', background: 'transparent', marginLeft: '7%' }}	>
			<form method="post" className="" id="sentForm" autoComplete="off">
				<Grid container spacing={1} style={{ marginTop: '0' }}>


					<Grid item xs={12} sm={7} sx={{marginTop : '30px'}}>
						<FormTextField type={"email"} user={emailImg} label="Email" value={email} onChange={(event) => setEmail(event.target.value)} marginTop="0" />
					</Grid>

					<Grid item xs={12}>
						<FormButton type={"button"} handleClick={handleSubmit} style={{ marginRight: "15px", marginTop: '20px' }} text={"Submit"} />
					</Grid>
					<Grid item xs={12} sx={{  marginTop: '10px' }}>
						<Typography variant="p" component="p" sx={infoText}>
						Not registered? Please <span onClick={handleClickRegister} style={{ color: '#c61633', cursor: 'pointer' }}>Register Here</span>
						</Typography>
					</Grid>
				</Grid>
			</form>
		</Paper>
		// <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, boxShadow: 'none', marginTop: '5px' }}	>
		// 	<form method="post" className="" id="sentForm" onSubmit={handleSubmit}>
		// 		<Grid container spacing={2} style={{ marginTop: '50px' }}>
		// 			<Grid item xs={12} >
		// 				<FormTextField type={"email"} user={emailImg} label="Email" value={email} onChange={(event) => setEmail(event.target.value)} marginTop="20px" />
		// 			</Grid>

		// 			<Grid item xs={12} sx={{ textAlign: 'center', marginTop: '40px' }}>
		// 				<FormButton type={"button"} handleClick={handleSubmit} style={{ marginRight: "15px", marginTop: '20px' }} text={"Submit"} />
		// 			</Grid>
		// 			<Grid item xs={12} sx={{ textAlign: 'center', marginTop: '10px' }}>
		// 				<p>Not registered? Please <span onClick={handleClickRegister} style={{color: '#c61633', cursor: 'pointer'}}>Register Here</span></p>
		// 			</Grid>
		// 		</Grid>
		// 	</form>

		// </Paper>

	);
};

export default UserLoginForm;
