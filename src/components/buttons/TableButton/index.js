import { Box, Typography, Grid } from "@mui/material";

const logoutBtnStyle = (theme) => ({
	width: '35px',
	display: 'block',
	margin: 'auto',
	marginRight: '10px',
	[theme.breakpoints.down("sm")]: {
		width: '25px',
	},
});

const logoutTitle = (theme) => ({
	color: '#626366',
	display: 'block',
	fontSize: '10px',
	marginRight: '10px',
	textTransform: 'uppercase',
	marginTop: '10px',
});


const TableButton = ({handleClick, buttonTexts, iconBtn}) => {

	return (
		<>
			<Grid onClick={handleClick} style={{cursor : 'pointer'}}>
				<Box component="img" sx={logoutBtnStyle} alt="Mondelez" src={iconBtn} />
				<Typography sx={logoutTitle} variant="p" component="p" >
					{buttonTexts}
				</Typography>
			</Grid>
		</>
	);
};

export default TableButton;
