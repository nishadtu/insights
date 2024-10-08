import { Grid, Paper } from "@mui/material";
import { WelcomeModal } from "components/modals/WelcomeModal";
import { WelcomeBoxGrid } from "components/Styles";
import { useNavigate } from "react-router-dom";
import routeNames from "routes/routeNames";

const Welcome = ({ eventname, eventnamefull }) => {
	const navigate = useNavigate();

	const handleClickRegister = () => {
		navigate(routeNames.register, { state: { events: eventname} });
	}
	const handleClickLogin = () => {
		navigate(routeNames.userLogin, { state: { events: eventname} });
	}
	return (
		<Paper sx={WelcomeBoxGrid}	>
			<Grid container spacing={2} justify="flex-end" alignItems="center" sx={{height : '100%'}}>
				<Grid item xs={12} >
					<WelcomeModal handleClickRegister={handleClickRegister} handleClickLogin={handleClickLogin} eventName={eventnamefull}/>
				</Grid>
			</Grid>
		</Paper>
	);
};
export default Welcome;
