import React from "react";
import { TextField, Box } from "@mui/material";
import scoreImg from "images/score.png";


const TextFieldStyle = (theme) => ({
	border: '#1px solid #c0c0c0',
	color: '#000',
	overflow: 'hidden',
	fontFamily: 'sequel-sans-medium-body',
	borderRadius: '40px',
	// height : '60px',
	width: '100%',
	boxShadow: '0 0 15px rgb(0 0 0 / 0.2)',
	[theme.breakpoints.only("sm")]: {

	},
	[theme.breakpoints.only("xs")]: {

	},
});


const inputIcon = (theme) => ({
	width: 30,
	maxWidth: { xs: "75%", md: "70%" },
	position : 'relative',
	left : '20px',
	top : '-90px',
	[theme.breakpoints.only("xs")]: {

	},
});

const FormScoreField = ({ label, value, onChange, type = "number", marginTop = "15px" }) => {
	return (
		<div>
			
			<TextField
				fullWidth
				style={{ margin: "0px", color: "#000", }}
				type={type}
				label={label}
				variant="filled"
				className="inputBox"
				sx={TextFieldStyle}
				inputProps={{
					sx: {
						color: '#000',
						paddingLeft: '65px',
						backgroundColor: '#FFF',
						paddingTop: '30px',
						fontSize : '45px',
						fontFamily: 'sequel-sans-medium-body',
					},
				}}
				InputLabelProps={{
					sx: {
						color: '#000',
						paddingLeft: '50px',
						fontSize: '20px',
						fontFamily: 'sequel-sans-medium-body',
						shrink: true
					},
					style: { color: "#000" },
				}}
				onChange={onChange}
				value={value}
			/>
			<Box component="img" sx={inputIcon} alt="Insights Admin Dashboard" src={scoreImg} />
		</div>

	);
};

export default FormScoreField;
