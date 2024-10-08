import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

const TextFieldStyle = (theme) => ({
	border: '#1px solid #c0c0c0',
	color: '#000',
	overflow: 'hidden',
	fontFamily: 'sequel-sans-medium-body',
	borderRadius: '25px',
	// height : '60px',
	width: '100%',
	height: '50px',
	boxShadow: '0 0 15px rgb(0 0 0 / 0.2)',
	":hover": {
		backgroundColor: "#FFF",
		outline: "none",
	},
	":focus": {
		backgroundColor: "FFF",
		outline: "none",
	},
	[theme.breakpoints.up("md")]: {
		height : '60px',
	},
});
const inputIcon = (theme) => ({
	width: 25,
	maxWidth: { xs: "75%", md: "70%" },
	position: 'relative',
	left: '20px',
	top: '-38px',
	[theme.breakpoints.up("md")]: {
		width: 30,
		top : '-45px',
	},
});


const FormSelectField = ({ label, value, onChange, options, user }) => {
	return (
		<>
			<FormControl variant="filled" sx={TextFieldStyle}>
				<InputLabel style={{ color: "#000", paddingLeft: "50px", fontFamily: 'sequel-sans-medium-body', paddingTop: '5px', fontSize : '20px' }}>{label}</InputLabel>
				<Select
					value={value}
					className="selectBox"
					onChange={onChange}
					inputProps={{
						sx: {
							color: "#000",
							backgroundColor: "#FFF",
							paddingTop: {md : '25px', sm : '22px', xs : '20px'},
							paddingLeft: '60px',
						},
						MenuProps: {
							MenuListProps: {
								sx: {
									backgroundColor: "#FFF",
								},
							},
						},
					}}
				>
					{options.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</Select>
				
			</FormControl>
			<Box component="img" sx={inputIcon} alt="Amgen Irish Open" src={user} />
		</>


	);
};

export default FormSelectField;
