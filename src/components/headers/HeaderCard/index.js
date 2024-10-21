import React from "react";
import { Box } from "@mui/material";
import logo from "images/logo.png";
import { Grid, Paper, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { paperBox } from "components/Styles/HeaderStyle";
import { headerTitle, headerLogo, mainTitle } from "components/Styles/HeaderStyle";




const HeaderCard = ({ title }) => {
	return (
		<>
			<Paper sx={paperBox}	>
				<Helmet >
					<title>{title} </title>
				</Helmet>
				
			</Paper>
		</>


	);
};

export default HeaderCard;
