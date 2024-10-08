import { useState } from "react";
import { isValidEmail } from "helpers";
import FormGroup from "./FormGroup";
import { Grid, Paper } from "@mui/material";
import FormButton from "components/buttons/FormButton";

export const LoginForm = ({ handleModalMessage, handleLogin }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (email === "" || password === "") {
			handleModalMessage("All fields must be completed to login.", true);
			return;
		}
		if (!isValidEmail(email)) {
			handleModalMessage("Invalid email address.", true);
			return;
		} else {
			handleLogin(email, password);
		}
		setEmail("");
		setPassword("");
	};

	return (

		<Paper sx={{ maxWidth: { xs: '90%', md: '70%' }, flexGrow: 1, boxShadow: 'none', marginTop: '5px', background: 'transparent', marginLeft: '7%' }}	>
			<form method="post" className="" id="sentForm" autoComplete="off">
				<Grid container spacing={1} style={{ marginTop: '30px' }}>

					<Grid item xs={12} sm={7} >
						<FormGroup id={"useremail"} type={"email"} handleChange={(value) => setEmail(value)} label="User Email" />
					</Grid>

					<Grid item xs={12} sm={7} >
						<FormGroup id={"password"} type={"password"} handleChange={(value) => setPassword(value)} label="User Password" />
					</Grid>

					<Grid item xs={12}>
						<FormButton type={"button"} handleClick={handleSubmit} style={{ marginTop: '20px' }} text={"Login"} />
					</Grid>

				</Grid>
			</form>
		</Paper>
	);
};
