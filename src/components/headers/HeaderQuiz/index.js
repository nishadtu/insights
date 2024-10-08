import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import logo from "images/logo-white.png";
import { Grid, Paper } from "@mui/material";
import { Helmet } from "react-helmet";
import q1 from "images/q1.png";
import q2 from "images/q1.png";
import q3 from "images/q1.png";
import q4 from "images/q1.png";


const headerLogoRight = (theme) => ({
	width: 200,
	maxWidth: { xs: "75%", md: "70%" },
	display: 'block',
	float: 'right',
	marginTop: '3vh',
	marginBottom: '3vh',
	marginRight: '6%',

	[theme.breakpoints.only("xs")]: {
		maxWidth: '70%',
		width: 100,
		marginTop: '20px',
	},
});


const LevelStyle = (theme) => ({
	color: '#FFF',
	fontFamily: 'Poppins-Regular',
	fontSize: '18px',
	lineHeight: '28px',
	textAlign: 'left',
	marginBottom: '5px',
	cursor: 'pointer',
	paddingLeft: '8%',
	letterSpacing: '1px',
	textTransform: "uppercase",
	[theme.breakpoints.only("xs")]: {
		fontSize: '14px',
		lineHeight: '14px',
	},
});

const QuestionStyle = (theme) => ({
	color: '#FFF',
	fontFamily: 'Poppins-Regular',
	fontSize: '26px',
	lineHeight: '34px',
	textAlign: 'left',
	marginBottom: '0px',
	cursor: 'pointer',
	paddingLeft: '8%',
	[theme.breakpoints.only("xs")]: {
		fontSize: '14px',
		lineHeight: '18px',
	},
});


const paperBox = (theme) => ({
	flexGrow: 1,
	background: '#28abdb',
	backgroundImage: 'linear-gradient(#28abdb, #236cb5)',
	boxShadow: '0 0 15px #000',
	[theme.breakpoints.only("xs")]: {

	},
});

const topLogo = (theme) => ({
	height: '5vh',
	display: 'block',
	marginTop: '3vh',
	marginBottom: '0',
	marginLeft: '8%',
});


const HeaderQuiz = ({ question, title }) => {

	const [level, setLevel] = useState("Level 1");
	const [questionNo, setQuestion] = useState("Who did Padraig Harrington defeat in a playoff to win the 2007 Open Championship?");
	const [logos, setLogo] = useState(q1);

	useEffect(() => {

		if (question === "1") {
			setQuestion("Who did Padraig Harrington defeat in a playoff to win the 2007 Open Championship?");
			setLevel("Level 1");
			setLogo(q1);
		}
		if (question === "2") {
			setQuestion("Shane Lowry became just the 3rd amateur to win on the European Tour with victory at the Irish Open, in what year?");
			setLevel("Level 2");
			setLogo(q2);
		}
		if (question === "3") {
			setQuestion("Seamus Power, alongside Padraig Harrington, represented Team Ireland at which Olympics?");
			setLevel("Level 3");
			setLogo(q3);
		}
		if (question === "4") {
			setQuestion("Brendan Lawlor claimed victory at the inaugural G4D Open in 2023, at which course?");
			setLevel("Level 4");
			setLogo(q4);
		}
		if (question === "5") {
			setQuestion("Who is the current Irish Open champion?");
			setLevel("Level 5");
			setLogo("");
		}
		if (question === "6") {
			setQuestion("The 2025 Insights Admin Dashboard will take place at what course");
			setLevel("Level 6");
			setLogo("");
		}
		if (question === "7") {
			setQuestion("The tournament record score is held by Jon Rahm since 2017, how low did he shoot?");
			setLevel("Level 7");
			setLogo("");
		}
	}, [question]);


	return (
		<>
			<Paper sx={paperBox}	>
				<Helmet >
					<title>{title} </title>
				</Helmet>
				<Grid container spacing={4} sx={{ padding: "10px" }} justify="flex-end" alignItems="center">
					<Grid item xs={8} md={6}>
						<Typography sx={LevelStyle} variant="p" component="p">
							{level}
						</Typography>
						<Typography sx={QuestionStyle} variant="p" component="p">
							{questionNo}
						</Typography>

					</Grid>
					<Grid item xs={4} md={6}>
						<Box component="img" sx={headerLogoRight} alt="Insights Admin Dashboard" src={logo} />
					</Grid>
				</Grid>
			</Paper>
			{logos && (
				<paper>
					<Grid container spacing={4}>
						<Grid item xs={6}>
							<Box component="img" sx={topLogo} alt="Insights Admin Dashboard" src={logos} />
						</Grid>
					</Grid>
				</paper>
			)}
			{!logos && (
				<paper>
					<Grid sx={{height : '8vh'}}></Grid>
				</paper>
			)}


		</>


	);
};

export default HeaderQuiz;
