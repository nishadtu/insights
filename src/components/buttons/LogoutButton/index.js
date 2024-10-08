import { useAdminAuth } from "services/UserAuthContext";
import logoutBtn from "images/logout.png"
import { Box, Typography, Grid } from "@mui/material";

const logoutBtnStyle = (theme) => ({
	width: '35px',
	display: 'block',
	margin: 'auto',
	marginRight: '10px',
});

const logoutTitle = (theme) => ({
	color: '#626366',
	display: 'block',
	fontSize: '10px',
	marginRight: '10px',
	textTransform: 'uppercase',
	marginTop: '10px',
});

const LogoutButton = () => {
	const { adminLogout } = useAdminAuth();

	const handleLogout = () => {
		adminLogout()
			.then(() => console.log("Successfully logged out"))
			.catch((err) => console.log(err.message));
	};

	return (
		<Grid onClick={handleLogout} className="logoutBtn" style={{cursor : 'pointer', width : '60px', float : 'right', position : 'absolute', top : '116px', right : '100px', zIndex : '500'}}>
				<Box component="img" sx={logoutBtnStyle} alt="Insights Admin Dashboard" src={logoutBtn} />
				<Typography sx={logoutTitle} variant="p" component="p" >
					Logout
				</Typography>
			</Grid>
	);
};

export default LogoutButton;
