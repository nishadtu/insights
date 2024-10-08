import React, { useEffect, useState } from "react";
import { db } from "firebase-config";
import { collection, orderBy, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { LeadTable } from "components/tables/LeadTable";
import { DB_NAME } from "constants";
import LoadingSpinner from "components/LoadingSpinner";
import { Grid, Paper } from "@mui/material";
import { ProPlayers } from "components/ProPlayers";
import HeaderLead from "components/headers/HeaderLead";
import preloader from 'images/preloader.png';
import { useNavigate } from 'react-router-dom';
import routeNames from "routes/routeNames";

const paperBox = (theme) => ({
	flexGrow: 1,
	marginBottom: '45px',
	background: 'transparent',
	boxShadow: 'none',
	width: '90%',
	margin: 'auto',
	[theme.breakpoints.down("md")]: {
		maxWidth: '700px',
		width: '95%',
	},
});



const userCollectionRef = collection(db, DB_NAME);

const Lead = () => {
	const [users, loading, error] = useCollection(
		query(userCollectionRef, where('gender', '==', 'Male'), orderBy("score", 'asc'), orderBy("register_date", 'desc'),),
		{
			snapshotListenOptions: { includeMetadataChanges: true },
		}
	);
	const [usersMapped, setUsersMapped] = useState([]);
	useEffect(() => {
		setUsersMapped(users?.docs?.map((doc) => ({ id: doc.id, ...doc.data() })));
	}, [users]);
	const navigate = useNavigate();
	const [screenLoading, setScreenLoading] = useState(true);
	const [loadingScreen, setLoading] = useState(false);

	useEffect(() => {
		setScreenLoading(true);
		setLoading(false);
		setTimeout(() => {
			setScreenLoading(false);
			setLoading(true);
		}, 3000);
		setTimeout(() => navigate(routeNames.leadNearestWomen), 30000);
	}, [navigate]);


	return (
		<>
			{screenLoading && (
				<div id="overlayer">
					<div className="page_loader"> <span /> <span /><span /><span />
					</div>
					<img
						src={preloader}
						className="preloaderImg"
						alt="Rocket Mortgage"
					/>

				</div>
			)}
			{loadingScreen && (


				<div id="leaderBoard">


					<HeaderLead text="Nearest the Pin | Men's Leaderboard" title="Leaderboard" titleStyle={{ display: 'none' }} />
					<Paper sx={paperBox}	>
						<Grid container spacing={6}>
							<Grid item xs={12} sm={8}>
								{!error && loading ? <LoadingSpinner /> : <LeadTable users={usersMapped} />}
							</Grid>
							<Grid item xs={12} sm={4}>
								<ProPlayers users={usersMapped} />
							</Grid>
						</Grid>
					</Paper>

				</div>
			)}
		</>

	);
};

export default Lead;
