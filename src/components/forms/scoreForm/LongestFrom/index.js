import { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import FormButton from "components/buttons/FormButton";
import FormTextField from "components/formElements/FormTextField";
import UserDataService from "services/services";
import scoreImg from "images/score.png";
import emailImg from "images/email.png";
import { useLocation, useNavigate } from 'react-router-dom';
import routeNames from "routes/routeNames";
import { infoText } from "components/Styles";



const LongestForm = ({ handleModalMessage }) => {
	const [email, setEmail] = useState("");
	const [longest, setLongest] = useState("");

	const locationUrl = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (locationUrl.state === null) { navigate(routeNames.longest); } else { setEmail(locationUrl.state.email); console.log(locationUrl.state.email); }
	}, [locationUrl.state, navigate]);


	const handleSubmit = async (event) => {
		event.preventDefault();
		if (longest == "") {
			handleModalMessage("Please enter the score", true,);
			return;
		} else{
			handleModalMessage("Your data is being submitted", true, "Please Wait");
			UserDataService.updateUser(email, { longest });
			handleModalMessage("Longest Drive score has been submitted.", false,);
			setLongest("");
			setTimeout(() => { navigate(routeNames.longest, { state: {} }); }, 5000);
			return;
		} 
	};

	return (
		<>
			<Paper sx={{ maxWidth: { xs: '90%', md: '70%' }, flexGrow: 1, boxShadow: 'none', marginTop: '5px', background: 'transparent', marginLeft: '7%' }}	>
				<form method="post" className="" id="sentForm" autoComplete="off">
					<Grid container spacing={1} style={{ marginTop: '0px' }}>

						<Grid item xs={12} sm={7} style={{ display: 'none' }}>
							<FormTextField type={'email'} user={emailImg} label="Email" value={email} onChange={(e) => setEmail(e.target.value)} marginTop="30px" />
						</Grid>

						<Grid item xs={12} sm={7}  sx={{marginTop : '30px'}}>
							<FormTextField type={'number'} user={scoreImg} label="Yards" value={longest} onChange={(e) => setLongest((e.target.valueAsNumber))} marginTop="30px" />
						</Grid>
						
						<Grid item xs={12}>
							<FormButton type={"button"} handleClick={handleSubmit} style={{ marginRight: "15px", marginTop: '20px' }} text={"Submit"} />
						</Grid>

					</Grid>
				</form>
			</Paper>

		</>


	);
};

export default LongestForm;
