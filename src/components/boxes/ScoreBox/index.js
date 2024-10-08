import React from "react";
import { FormControlLabel, Typography, Radio  } from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';


const LabelFieldStyle = (theme) => ({
	color: '#000',
	fontFamily: 'sequel-sans-medium-body',
	fontSize : '1.5rem',
	marginTop: '0px',
});

const FormControlStyle = (theme) => ({
	alignItems: 'center', 
	marginLeft : '10px', 
	background: '#FFF', 
	padding: '0px', 
	position: 'relative',
	boxShadow: '0 0 12px rgb(0 0 0 / 0.3)',
	borderRadius : '10px',
	width: '100%',
	display : 'block',
	textAlign : 'center',
});

const CheckboxStyle = (theme) => ({
	display : 'none',
});





const ScoreBox = ({ labelText, value, onClick, labelStyle, FormStyle, checkedIcon}) => {
	return (
		<div>
			{/* <FormControlLabel  sx={FormControlStyle} style={FormStyle} onChange = {onChange} control={<Radio  sx={CheckboxStyle} value={value}  icon={<RadioButtonUncheckedIcon style ={{  color: "#ffffff"}} />}  checkedIcon={<CheckCircleIcon style ={{  color: "#FFFFFF",  }} />}/>} label={<Typography variant="h6" sx={LabelFieldStyle} style={labelStyle} >{labelText}</Typography>}   /> */}
	
			<FormControlLabel  sx={FormControlStyle} style={FormStyle} onClick = {onClick} control={<Radio  sx={CheckboxStyle} value={value}     />} label={<Typography variant="h6" sx={LabelFieldStyle} style={labelStyle} >{labelText}</Typography>}   />
		</div>

	);
};

export default ScoreBox;
