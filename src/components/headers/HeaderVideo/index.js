import React from "react";
import { Box } from "@mui/material";
import logo from "images/logo-white.png";
import { Grid, Paper } from "@mui/material";
import { Helmet } from "react-helmet";
import { headerLogo } from "../../Styles/HeaderStyle";
import { paperBox } from "../../Styles/HeaderStyle";



const HeaderVideo = ({ title, }) => {
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
		</>
	);
};

export default HeaderVideo;
