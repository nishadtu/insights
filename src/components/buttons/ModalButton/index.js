import { styled } from "@mui/material";

const StyledModalButton = styled("button")({
	width: "150px",
	color: "#ec1d23",
	borderRadius: "25px",
	height: "45px",
	borderWidth: "1px",
	outline: "none",
	border: "1px solid #ec1d23",
	backgroundColor: "transparent",
	textTransform : 'uppercase',
	maxWidth: "90%",
	fontSize: '16px',
	fontWeight: 'bold',
	marginBottom : '15px',
	marginTop : '30px',
	fontFamily : 'Brown-Bold',
	":hover": {
		outline: "none",
		borderColor: "#ec1d23",
	},
	":focus": {
		outline: "none",
		borderColor: "#ec1d23",
	},
});

const ModalButton = ({ type, handleClick, style, text }) => {
	return (
		<StyledModalButton type={type} variant="contained" onClick={handleClick} color="success" style={style}>
			{text}
		</StyledModalButton>
	);
};

export default ModalButton;
