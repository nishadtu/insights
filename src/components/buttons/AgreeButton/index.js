import { Button } from "@mui/material";

const buttonStyle = (theme) => ({
	color: '#ec1d23',
	fontFamily: 'Radikal-Thin',
	border : '1px solid #ec1d23',
	borderRadius : '30px',
	padding : '8px 20px 2px',
	[theme.breakpoints.down("md")]: {
		padding : '8px 20px 5px',
	},
	":hover": {
		outline: "none",
		border : '1px solid #ec1d23',
	},
});



const AgreeButton = ({ type, handleClick, style, text }) => {
	return (
		<Button sx={buttonStyle} variant="outlined" style={style} onClick={handleClick}>{text}</Button>
	);
};

export default AgreeButton;
