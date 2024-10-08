import React from "react";
import { Box } from "@mui/material";
import logo from "images/logo-white.png";
import { Grid, Paper } from "@mui/material";
import { Helmet } from "react-helmet";
import MainTitle from "components/formElements/MainTitle";
import { headerLogo } from "../../Styles/HeaderStyle";

const paperBox = (theme) => ({
	flexGrow: 1,
	background: '#006bb6',
	borderRadius : '0',
	paddingBottom : '15px',
});
const paperBoxBanner = (theme) => ({
	flexGrow: 1,
	borderRadius : 0,
	minHeight : '30vh',
	marginBottom : '30px',

});

const HeaderScore = ({ text, title, bgClassName, text2 }) => {
	return (
		<>
			<Paper sx={paperBox}	>
				<Helmet >
					<title>{title} </title>
				</Helmet>
				<Grid container spacing={4} sx={{ padding: "10px" }}>
					<Grid item xs={12}>
						<Box component="img" sx={headerLogo} alt="Insights Admin Dashboard" src={logo} />
					</Grid>
					
				</Grid>
			</Paper>
			<Grid container spacing={2} sx={paperBoxBanner} className={bgClassName} >
				<Grid item xs={12} >
					<MainTitle title={text} title2={text2} style={{marginTop : '14vh'}} />
				</Grid>
			</Grid>
		</>


	);
};

export default HeaderScore;
