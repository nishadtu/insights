import React from "react";
import { Checkbox, FormControlLabel, Typography  } from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const LabelFieldStyle = (theme) => ({
	color: '#000',
	fontFamily: 'sequel-sans-medium-body',
	width: '100%',
	fontSize : '16px',
	marginTop: '5px',
	marginLeft : '0px',
	textAlign : 'left',
	[theme.breakpoints.only("md")]: {
		fontSize : '14px',
	},
	[theme.breakpoints.only("sm")]: {
		fontSize : '12px',
	},
	[theme.breakpoints.only("xs")]: {
		fontSize : '12px',
	},
});



const FormCheckBox = ({ labelText, value, onChange }) => {
	return (
		<div>
			<FormControlLabel  sx={{ alignItems: 'flex-start', marginLeft : '0px' }} onChange = {onChange} control={<Checkbox    icon={<RadioButtonUncheckedIcon sx={{ boxShadow : '0 0 15px rgba(0,0,0,0.2)', borderRadius : '50%', padding : '11px'}}  />}  checkedIcon={<RadioButtonCheckedIcon style ={{  color: "#017dc3",  }} />}/>} label={<Typography variant="h6" sx={LabelFieldStyle}  >{labelText}</Typography>}   />
		</div>

	);
};

export default FormCheckBox;
