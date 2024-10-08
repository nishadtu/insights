import { styled } from "@mui/material";

const StyledButton = styled("button")({
	width: "200px",
	color: "#ec1d23",
	borderRadius: "35px",
	height: "55px",
	borderWidth: "1px",
	outline: "none",
	border: "2px solid #ec1d23",
	backgroundColor: "transparent",
	textTransform : 'uppercase',
	maxWidth: "90%",
	fontSize: "18px",
	lineHeight : '18px',
	marginBottom : '15px',
	marginTop : '15px',
	fontFamily : 'Brown-Bold',
	boxShadow : 'none',
	":hover": {
		outline: "none",
		borderColor: "#ec1d23",
		backgroundColor: "transparent !important",
		color: "#ec1d23",
	},
	":focus": {
		outline: "none",
		borderColor: "#ec1d23",
		backgroundColor: "transparent",
		color: "#ec1d23",
	},
});

const FormButton = ({ type, handleClick, style, text }) => {
	return (
		<StyledButton type={type} variant="outlined" onClick={handleClick} color="secondary" style={style}>
			{text}
		</StyledButton>
	);
};

export default FormButton;
