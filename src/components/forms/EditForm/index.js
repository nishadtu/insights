import { useEffect, useState } from "react";
import FormTextField from "components/formElements/FormTextField";
import { isValidEmail } from "helpers";
import UserDataService from "services/services";
import { Grid, Paper, Typography } from "@mui/material";
import userImg from "images/user.png";
import emailImg from "images/email.png";
import FormButton from "components/buttons/FormButton";
import FormSelectField from "components/formElements/FormSelectField";
import scoreImg from "images/score.png";
import { infoText } from "components/Styles";

const EditForm = ({ id, user, handleBack, handleModalMessage }) => {
	const [first_name, setFirstname] = useState("");
	const [last_name, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("");
	const [yards, setYards] = useState("");
	const [feet, setFeet] = useState("");
	const [inch, setinch] = useState("");
	const [scoreTxt, setScoreText] = useState("");
	const [longest, setLongesr] = useState("");

	useEffect(() => {
		if (user) {
			setFirstname(user.data().first_name);
			setLastName(user.data().last_name);
			setEmail(user.data().email);
			setGender(user.data().gender);
			(user.data().yards ? setYards(user.data().yards) : setYards(""));
			(user.data().feet ? setFeet(user.data().feet) : setFeet(""));
			(user.data().inch ? setinch(user.data().inch) : setinch(""));
			(user.data().scoreText ? setScoreText(user.data().scoreText) : setScoreText(""));
			(user.data().longest ? setLongesr(user.data().longest) : setLongesr(""));
			console.log(yards);
		}
	}, [user]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (first_name === "" || last_name === "" || email === "" || gender === "") {
			handleModalMessage("All fields must be completed to update.", true);
			return;
		} else if (!isValidEmail(email)) {
			handleModalMessage("Invalid emall address.", true);
			return;
		} else {
			if (scoreTxt) {
				if ((yards !== "" && feet !== "") || (yards !== "" && inch !== "")) {
					handleModalMessage("You should enter either the score in Yards or Feet", true,);
					setFeet(""); setinch(""); setYards("");
					return
				}
				if (yards) {
					const score = yards * 91.44;
					const scoreText = yards + " yds"
					const feet = "";
					const inch = "";
					UserDataService.updateUser(email, { feet, inch, yards, score, scoreText });
				} else if (feet || inch) {
					if (feet === "") { setFeet(0) };
					if (inch === "") { setinch(0) };
					const scoreText = feet + "ft " + inch + "in";
					const score1 = feet * 30.48;
					const score2 = inch * 2.54;
					const score = score1 + score2;
					const yards = "";
					UserDataService.updateUser(email, { yards, feet, inch, score, scoreText });
					// handleModalMessage("User updated successfully.", false, () => handleBack());
				}
			}
			UserDataService.updateUser(email, { first_name, last_name, email, gender, longest })
				.then(() => {
					handleModalMessage("User updated successfully.", false, () => handleBack());
				})
				.catch(() => handleModalMessage("Error updating user. Please try again.", true));
		}
	};

	return (
		<Paper sx={{ maxWidth: { xs: '90%', md: '70%' }, flexGrow: 1, boxShadow: 'none', marginTop: '5px', background: 'transparent', marginLeft: '7%' }}	>
			<form method="post" className="" id="sentForm">
				<Grid container spacing={2} style={{ marginTop: '20px' }}>
					<Grid item xs={12} sm={7} >
						<FormTextField type={'text'} user={userImg} label="First Name" value={first_name} onChange={(e) => setFirstname(e.target.value)} marginTop="30px" />
					</Grid>
					<Grid item xs={12} sm={7} >
						<FormTextField type={'text'} user={userImg} label="Last Name" value={last_name} onChange={(e) => setLastName(e.target.value)} marginTop="15px" />
					</Grid>
					<Grid item xs={12} sm={7} >
						<FormTextField type={'email'} user={emailImg} label="Email" value={email} onChange={(event) => setEmail(event.target.value)} marginTop="15px" disabled />
					</Grid>

					<Grid item xs={12} sm={7} >
						<FormSelectField label="Gender" user={userImg} value={gender} onChange={(event) => setGender(event.target.value)}
							options={[
								{ value: "", label: "<None>" },
								{ value: "Male", label: "Male" },
								{ value: "Female", label: "Female" },
								{ value: "Prefer not to say", label: "Prefer not to say" },
							]}
						/>
					</Grid>
					{scoreTxt && (
						<Grid item xs={12} >
							<Grid container spacing={2}>
								<Grid item xs={12} sm={7} sx={{ marginTop: '30px' }}>
									<FormTextField type={'number'} user={scoreImg} label="Yards" value={yards} onChange={(e) => setYards(e.target.valueAsNumber)} marginTop="30px" />
								</Grid>
								<Grid item xs={12} sm={7} >
									<Typography variant="h6" component="h6" sx={infoText} style={{ marginLeft: '14px', marginTop: "-14px", marginBottom: '12px' }}>
										OR
									</Typography>
								</Grid>
								<Grid item xs={12} sm={7} >
									<FormTextField type={'number'} user={scoreImg} label="Feet" value={feet} onChange={(e) => setFeet(e.target.valueAsNumber)} marginTop="30px" />
								</Grid>
								<Grid item xs={12} sm={7} >
									<FormTextField type={'number'} user={scoreImg} label="Inches" value={inch} onChange={(e) => setinch(e.target.valueAsNumber)} marginTop="30px" />
								</Grid>

							</Grid>
						</Grid>
					)}
					<Grid item xs={12} sm={7} >
						<FormTextField type={'number'} user={scoreImg} label="Longest Drive" value={longest} onChange={(e) => setLongesr(e.target.valueAsNumber)} marginTop="15px" />
					</Grid>




					<Grid item xs={12}>
						<FormButton type={"submit"} handleClick={handleSubmit} style={{ marginRight: "15px" }} text={"Update"} />
						<FormButton type={"button"} handleClick={handleBack} text={"Cancel"} />
					</Grid>
				</Grid>
			</form>
		</Paper>

	);
};

export default EditForm;
