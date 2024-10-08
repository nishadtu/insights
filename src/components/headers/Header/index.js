import React from "react";
import { Box } from "@mui/material";
import logo from "images/logo.png";
import { Grid, Paper, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { paperBox } from "components/Styles/HeaderStyle";
import { headerTitle, headerLogo, mainTitle } from "components/Styles/HeaderStyle";




const Header = ({ text, title, eventName }) => {
	return (
		<>
			<Paper sx={paperBox}	>
				<Helmet >
					<title>{title} </title>
				</Helmet>
				<Grid container spacing={4} >
					<Grid item xs={12}>
						<Typography sx={headerTitle} variant="h6" component="h2">
							{eventName}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Box component="img" sx={headerLogo} alt="Dashboard" src={logo} />
					</Grid>
					<Grid item xs={12}>
						<Typography sx={mainTitle} variant="h6" component="h2">
							{text}
						</Typography>
					</Grid>


				</Grid>
			</Paper>
		</>


	);
};

export default Header;
