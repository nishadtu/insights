import React from "react";
import { Box, Grid, Typography } from "@mui/material";




const inputIcon = (theme) => ({
	width: '65px',
	[theme.breakpoints.only("xs")]: {
		width: '60px',
		margin :'0px'
	},
});
const GridBox = (theme) => ({
	maxWidth: '80%',
	margin: '2px auto',
	marginRight : '8%',
	[theme.breakpoints.only("xs")]: {
		margin :'0px auto'
	},
});

const scoreTitleSub = (theme) => ({
	color: '#FFFFFF',
	fontFamily: 'Poppins-Medium',
	fontSize: '12px',
	lineHeight: '16px',
	textAlign: 'center',
	width: '100%',
	marginTop: '10px',
	marginBottom: '0px',
	textTransform : 'uppercase',
	borderBottom : '2px solid #FFF',
	[theme.breakpoints.only("sm")]: {
		fontSize: '12px',
		lineHeight: '14px',
		marginTop: '10px',
		marginBottom: '5px',
	},
	[theme.breakpoints.only("xs")]: {
		fontSize: '12px',
		lineHeight: '16px',
		marginTop: '5px',
		marginBottom: '0',
	},
});

const totalScoreNumberSub = (theme) => ({
	color: '#FFFFFF',
	fontFamily: 'Poppins-Medium',
	fontSize: '30px',
	lineHeight: '30px',
	textAlign: 'center',
	width: '100%',
	marginTop: '2px',
	marginBottom: '0px',
	[theme.breakpoints.only("sm")]: {
		fontSize: '2.25rem',
		lineHeight: '2.25rem',
		marginTop: '0px',
	},
	[theme.breakpoints.only("xs")]: {
		fontSize: '1.75rem',
		lineHeight: '2.25rem',
		marginTop: '0',
		marginBottom: '0px',
	},
});

const ScoreCardBox = ({ scoreImg, scoreHead, scoreIndividual,}) => {
	return (

		<Grid container sx={GridBox}>
			<Grid item xs={4} >
				<Box component="img" sx={inputIcon} alt="Insights Admin Dashboard" src={scoreImg} />
			</Grid>
			<Grid item xs={8}>
				<Typography sx={scoreTitleSub} variant="h1" component="h1" >
					{scoreHead}
				</Typography>
				<Typography sx={totalScoreNumberSub} variant="h1" component="h1" >
					{scoreIndividual}
				</Typography>
			</Grid>
		</Grid>


	);
};

export default ScoreCardBox;
