import { Typography } from "@mui/material";


const mainTitle = (theme) => ({
	color: '#FFFFFF',
	fontFamily: 'Poppins-Light',
	fontSize: '4.75rem',
	lineHeight: '4.75rem',
	textAlign: 'left',
	marginTop: '20vh',
	marginBottom : '30px',
	marginLeft : '8%',
	[theme.breakpoints.only("sm")]: {
		fontSize: '4rem',
		lineHeight: '4rem',
		marginTop: '20vh',
		marginLeft : '6%',
		marginBottom : '10px',
	},
	[theme.breakpoints.only("xs")]: {
		fontSize: '2.5rem',
		lineHeight: '2.75rem',
		marginTop: '15vh',
		marginBottom : '10px',
	},
});


const MainTitle = ({title, style, title2}) => {


	return (
		<Typography sx={mainTitle} variant="h1" component="h1" style={style}>
			{title}<br></br>{title2}
		</Typography>
	);
};

export default MainTitle;
