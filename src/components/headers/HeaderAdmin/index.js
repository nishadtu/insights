import { Box } from "@mui/material";
import logo from "images/logo.png";
import { Grid, Paper, Typography } from "@mui/material";
import LogoutButton from "components/buttons/LogoutButton";
import { Helmet } from "react-helmet";
import { adminHeaderLogo, dashboardTitle, dbPaperBox } from "components/Styles/HeaderStyle";



const gridBox = (theme) => ({
	justify: "flex-end",
	alignItems: "center",
	paddingTop: '30px',
})



const HeaderAdmin = ({ text, title }) => {
	return (
		<Paper sx={dbPaperBox}	>
			<Helmet >
				<title>{title} </title>
			</Helmet>
			<Grid container sx={gridBox}>
				<Grid item xs={12} s>
					<Box component="img" sx={adminHeaderLogo} alt="Insights Admin Dashboard" src={logo} />
				</Grid>
				<Grid item xs={12} >
					<Typography sx={dashboardTitle} variant="h1" component="h1" >
						{text}
					</Typography>
				</Grid>

				<Grid item xs={12} sm={4} sx={{ textAlign: 'right' }}><LogoutButton /></Grid>
			</Grid>
		</Paper>

	);
};

export default HeaderAdmin;
