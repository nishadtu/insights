import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import FormButton from "components/buttons/FormButton";
import FormTextField from "components/formElements/FormTextField";
import { isValidEmail } from "helpers";
import UserDataService from "services/services";
import userImg from "images/user.png";
import emailImg from "images/email.png";
import FormSelectField from "components/formElements/FormSelectField";
import { useNavigate } from "react-router-dom";
import routeNames from "routes/routeNames";
import { infoText } from "components/Styles";


const AddForm = ({ handleModalMessage, eventName, sendCloseModal }) => {
	const [first_name, setFirstname] = useState("");
	const [last_name, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("");
	const [events, setEvents] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		setEvents(eventName);
	}, [eventName]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (first_name === "" || last_name === "" || email === "" || gender === "") {
			handleModalMessage("All fields must be completed to register the user", true, "Sorry");
			return;
		} else if (!isValidEmail(email)) {
			handleModalMessage("Invalid emall address.", true, "Sorry");
			setEmail("");
			return;
		} else {
			const docSnap = await UserDataService.getUser(email);
			console.log(docSnap.data());
			if (docSnap.data()) {
				handleModalMessage("This email already exists. Please enter another one.", true, "Sorry");
				setEmail("");
				return;
			}
			handleModalMessage("Your data is being submitted.", true, "Please Wait");
			var register_date = new Date().toLocaleString("en-US", { timeZone: "Europe/London" });
			var unique_id = new Date().getTime().toString();
			const newUser = { unique_id, first_name, last_name, email, gender, register_date };
			try {
				await UserDataService.addUser(newUser);
				handleModalMessage("New user added successfully.", false, "Success");
				setTimeout(() => {
					{ events === 'nearest' ? navigate(routeNames.nearestScore, { state: { email: email} }) : navigate(routeNames.longestScore, { state: { email: email} })};
				}, 1000);
			} catch (err) {
				handleModalMessage(err.message, true);
			}
			setFirstname("");
			setLastName("");
			setEmail("");
			setGender("");
		}
	};

	const handleClickLogin = () => {
		navigate(routeNames.userLogin, { state: { events: events } });
	}

	return (
		<Paper sx={{ maxWidth: {xs : '90%', md : '70%'}, flexGrow: 1, boxShadow: 'none', marginTop: '5px', background: 'transparent', marginLeft : '7%'}}	>
			<form method="post" className="" id="sentForm" autoComplete="off">
				<Grid container spacing={1} style={{ marginTop: '0' }}>

					<Grid item xs={12} sm={7} >
						<FormTextField type={'text'} user={userImg} label="First Name" value={first_name} onChange={(e) => setFirstname(e.target.value)} marginTop="0" />
					</Grid>
					<Grid item xs={12} sm={7} >
						<FormTextField type={'text'} user={userImg} label="Last Name" value={last_name} onChange={(e) => setLastName(e.target.value)} marginTop="0" />
					</Grid>
					<Grid item xs={12} sm={7} >
						<FormTextField type={"email"} user={emailImg} label="Email" value={email} onChange={(event) => setEmail(event.target.value)} marginTop="0" />
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
					<Grid item xs={12}>
						<FormButton type={"button"} handleClick={handleSubmit} style={{ marginRight: "15px", marginTop: '20px' }} text={"Submit"} />
					</Grid>
					<Grid item xs={12} sx={{  marginTop: '10px' }}>
						<Typography variant="p" component="p" sx={infoText}>
						Already registered? Please <span onClick={handleClickLogin} style={{ color: '#c61633', cursor: 'pointer' }}>Login Here</span>
						</Typography>
					</Grid>
				</Grid>
			</form>
		</Paper>

	);
};

export default AddForm;
