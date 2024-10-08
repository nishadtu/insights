import { styled } from "@mui/material";

const StyledButton = styled("button")({
	width: "150px",
	color: "#000",
	borderRadius: "30px",
	height: "50px",
	borderColor: "#000",
	borderWidth: "1px",
	outline: "none",
	border: "1px solid #000",
	backgroundColor: "transparent",
	maxWidth: "100%",
	":hover": {
		color: "#ff0000",
		backgroundColor: "transparent",
		outline: "none",
		borderColor: "#ff0000",
	},
});

const EditFormButton = ({ type, handleClick, style, text }) => {
	return (
		<StyledButton type={type} variant="outlined" onClick={handleClick} color="secondary" style={style}>
			{text}
		</StyledButton>
	);
};

export default EditFormButton;
