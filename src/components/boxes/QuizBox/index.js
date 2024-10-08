import React from "react";
import { FormControlLabel, Typography, Radio, Box  } from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';


const LabelFieldStyle = (theme) => ({
	color: '#000',
	fontFamily: 'Poppins-Regular',
	width: '80%',
	fontSize : '1.75rem',
	marginTop: '0px',
	":hover": {
		color: '#FFF',
	},
	":focus": {
		color: '#FFF',
	},
	
	[theme.breakpoints.only("sm")]: {

	},
	[theme.breakpoints.only("xs")]: {
		fontSize : '14px',

	},
});

const FormControlStyle = (theme) => ({
	alignItems: 'center', 
	marginLeft : '10px', 
	background: '#FFF', 
	padding: '4vh', 
	position: 'relative',
	boxShadow: '0 0 12px rgb(0 0 0 / 0.3)',
	borderRadius : '20px',
	width: '100%',
	marginBottom : '4vh',
	":hover": {
		background: '#4e5344', 
	},
	":focus" : {
		background: '#4e5344', 
	},
	[theme.breakpoints.only("xs")]: {
		padding: '30px'
	},

});

const CheckboxStyle = (theme) => ({
	position: 'absolute', 
	right: '40px', 
	fontSize: '30px', 
	padding : '0', 
	transform: "scale(2.5)",
	[theme.breakpoints.only("xs")]: {
		fontSize: '14px', 
	},
});

const checkedIconStyle = (theme) => ({
	width : '2.25vh',
	[theme.breakpoints.only("xs")]: {
		width : '15px',
	},
});


const QuizBox = ({ labelText, value, onChange, labelStyle, FormStyle, checkedIcon}) => {
	return (
		<> 
			<FormControlLabel  sx={FormControlStyle} style={FormStyle} onChange = {onChange} control={<Radio  sx={CheckboxStyle} value={value}  icon={<RadioButtonUncheckedIcon style ={{  color: "#ffffff"}} />}   checkedIcon={<Box component="img" sx={checkedIconStyle} alt="Insights Admin Dashboard" src={checkedIcon} />} />} label={<Typography variant="h6" sx={LabelFieldStyle} style={labelStyle} >{labelText}</Typography>}   />
		</>

	);
};

export default QuizBox;
