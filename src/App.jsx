import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./services/UserAuthContext";
import routes from "./routes/routeNames";
import "css/Dashboard.css";
import OverView from "pages/OverviewPage";
import Dashboard from "pages/DashboardPage";
import Workflow from "pages/WorkFLowPage";
import Users from "pages/UsersPage";
import Company from "pages/CompanyPage";
import Terms from "pages/TermsPage";
import Account from "pages/AccountPage";
import Settings from "pages/SettingsPage";
import { useAnonAuth } from "services/AnonAuthContext";

import theme from './config/theme';
import { CssBaseline, ThemeProvider, Box } from '@mui/material'
import AppHeader from "components/AppHeader";
import SideNav from "components/SideNav";
import styles from "style";
import Nearest from "pages/NearestThePinPage";
import Longest from "pages/LongestDrivePage";
import RegisterPage from "pages/RegisterPage";
import UserLoginPage from "pages/UserLoginPage";
import NearestScore from "pages/NearestScorePage";
import LongestScore from "pages/LongestScorePage";

function App() {
	const { anonLogin } = useAnonAuth();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		anonLogin();
	}, []);



	return (
		<React.Fragment>
			<UserAuthContextProvider>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Box>
						<AppHeader sx={styles.container} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} sideBarOpen={open} />
						<Router>
							<SideNav open={open} handleDrawerClose={handleDrawerClose} />
							<Box component={'main'} sx={styles.mainSection}>
								<Routes basename={routes.home}>
									<Route path={routes.home} exact element={<OverView />} />
									<Route path={routes.overview} element={<OverView />} />
									<Route path={routes.dashboard} element={<Dashboard />} />
									<Route path={routes.workflow} element={<Workflow />} />
									<Route path={routes.users} element={<Users />} />
									<Route path={routes.company} element={<Company />} />
									<Route path={routes.terms} element={<Terms />} />
									<Route path={routes.account} element={<Account />} />
									<Route path={routes.settings} element={<Settings />} />
									<Route path={routes.nearest} element={<Nearest />} />
									<Route path={routes.longest} element={<Longest />} />
									<Route path={routes.register} element={<RegisterPage />} />
									<Route path={routes.userLogin} element={<UserLoginPage />} />
									<Route path={routes.nearestScore} element={<NearestScore />} />
									<Route path={routes.longestScore} element={<LongestScore />} />
								</Routes>
							</Box>
						</Router>
					</Box>
				</ThemeProvider>

			</UserAuthContextProvider>
		</React.Fragment>
	);
}

export default App;
