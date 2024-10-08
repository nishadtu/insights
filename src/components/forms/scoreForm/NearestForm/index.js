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



const NearestForm = ({ handleModalMessage }) => {
	const [email, setEmail] = useState("");
	const [yards, setYards] = useState("");
	const [feet, setFeet] = useState("");
	const [inch, setinch] = useState("");

	const locationUrl = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (locationUrl.state === null) { navigate(routeNames.nearest); } else { setEmail(locationUrl.state.email); console.log(locationUrl.state.email); }
	}, [locationUrl.state, navigate]);


	const handleSubmit = async (event) => {
		event.preventDefault();
		if ((yards !== "" && feet !== "") || (yards !== "" && inch !== "")) {
			handleModalMessage("You should enter either the score in Yards or Feet", true,);
			setFeet(""); setinch(""); setYards("");
			return
		} else if (yards === "" && feet === "" && inch === "") {
			handleModalMessage("You should enter the score in Yards or Feet", true,);
			return
		}
		if (yards) {
			handleModalMessage("Your data is being submitted", true, "Please Wait");
			const score = yards * 91.44;
			var scoreText = yards + " yds"
			UserDataService.updateUser(email, { yards, score, scoreText });
			setFeet(""); setinch(""); setYards("");
			handleModalMessage("Nearest The Pin score has been submitted.", false,);
			setTimeout(() => { navigate(routeNames.nearest, { state: {} }); }, 5000);
			return;
		} else if (feet || inch) {
			handleModalMessage("Your data is being submitted", true, "Please Wait");
			if (feet === "") { 
				var scoreText = "0ft " + inch + "in";
			}else if(inch === ""){
				var scoreText = feet + "ft " + "0in";
			}else{
				var scoreText = feet + "ft " + inch + "in";
			}
			// const scoreText = feet + "ft " + inch + "in";
			const score1 = feet * 30.48;
			const score2 = inch * 2.54;
			const score = score1 + score2;
			UserDataService.updateUser(email, { feet, inch, score, scoreText });
			handleModalMessage("Nearest The Pin score has been submitted.", false,);
			setFeet(""); setinch(""); setYards("");
			setTimeout(() => { navigate(routeNames.nearest, { state: {} }); }, 5000);
			return
		}
	};



	return (
		<>



			<Paper sx={{ maxWidth: { xs: '90%', md: '70%' }, flexGrow: 1, boxShadow: 'none', marginTop: '5px', background: 'transparent', marginLeft: '7%' }}	>
				<form method="post" className="" id="sentForm" autoComplete="off">
					<Grid container spacing={1} style={{ marginTop: '0' }}>

						<Grid item xs={12} sm={7} style={{ display: 'none' }}>
							<FormTextField type={'email'} user={emailImg} label="Email" value={email} onChange={(e) => setEmail(e.target.value)} marginTop="30px" />
						</Grid>

						<Grid item xs={12} sm={7}  sx={{marginTop : '30px'}}>
							<FormTextField type={'number'} user={scoreImg} label="Yards" value={yards} onChange={(e) => setYards((e.target.valueAsNumber))} marginTop="30px" />
						</Grid>
						<Grid item xs={12} sm={7} >
							<Typography variant="h6" component="h6" sx={infoText} style={{ marginLeft: '14px', marginTop: "-14px", marginBottom: '12px' }}>
								OR
							</Typography>
						</Grid>
						<Grid item xs={12} sm={7} >
							<FormTextField type={'number'} user={scoreImg} label="Feet" value={feet} onChange={(e) => setFeet((e.target.valueAsNumber))} marginTop="30px" />
						</Grid>
						<Grid item xs={12} sm={7} >
							<FormTextField type={'number'} user={scoreImg} label="Inches" value={inch} onChange={(e) => setinch((e.target.valueAsNumber))} marginTop="30px" />
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

export default NearestForm;
