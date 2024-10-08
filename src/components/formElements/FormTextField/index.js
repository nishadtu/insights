import React from "react";
import { TextField, Box } from "@mui/material";



const TextFieldStyle = (theme) => ({
	border: '#1px solid #c0c0c0',
	color: '#000',
	overflow: 'hidden',
	fontFamily: 'sequel-sans-medium-body',
	borderRadius: '25px',
	height : '50px',
	width: '100%',
	boxShadow: '0 0 15px rgb(0 0 0 / 0.2)',
	[theme.breakpoints.up("md")]: {
		height : '60px',
	},
});


const inputIcon = (theme) => ({
	width: 25,
	maxWidth: { xs: "75%", md: "70%" },
	position : 'relative',
	left : '20px',
	top : '-38px',
	[theme.breakpoints.up("md")]: {
		width: 30,
		top : '-45px',
	},
});

const FormTextField = ({ label, value, onChange, onFocus, user, type = "text", marginTop, userImgStyle, maximumDigit, disabled }) => {
	return (
		<div>
			
			<TextField
				fullWidth
				style={{ margin: "0px", color: "#000" }}
				type={type}
				label={label}
				variant="filled"
				className="inputBox"
				sx={TextFieldStyle}
				disabled={disabled}
				inputProps={{
					sx: {
						color: '#000',
						paddingLeft: '65px',
						backgroundColor: '#FFF',
						paddingTop: {md : '25px', sm : '20px', xs : '20px'},
						fontFamily: 'sequel-sans-medium-body',
					},
					maxLength: maximumDigit,
	
				}}
				InputLabelProps={{
					sx: {
						color: '#000',
						paddingLeft: '50px',
						fontSize: '20px',
						fontFamily: 'sequel-sans-medium-body',
						paddingTop : {md : '5px', sm : '0', xs : '0'},
						shrink: true
					},
					style: { color: "#000" },
				}}
				onChange={onChange}
				value={value}
				onFocus={onFocus}
			/>
			<Box component="img" sx={inputIcon} alt="Insights Admin Dashboard" src={user} style={userImgStyle}/>
		</div>

	);
};

export default FormTextField;
