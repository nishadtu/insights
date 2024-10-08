import React, { useEffect, useState } from "react";
import { Box } from '@mui/material';
import AppHeader from "components/AppHeader";
import SideNav from "components/SideNav";
import styles from "style";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from "routes/routeNames";
import "css/Dashboard.css";
import OverView from "pages/OverviewPage";
import Dashboard from "pages/DashboardPage";
import Workflow from "pages/WorkFLowPage";
import Users from "pages/UsersPage";
import Company from "pages/CompanyPage";
import Terms from "pages/TermsPage";
import Account from "pages/AccountPage";
import Settings from "pages/SettingsPage";


const Admin = () => {
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};


	return (
		<Box>
			Test
		</Box>
	);
};

export default Admin;
