import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import MainTitle from "components/formElements/MainTitle";
// import profile from "../../Images/profile.png";
import firstRank from "images/first.png";
import secondRank from "images/second.png";
import thirdRank from "images/third.png";
import { rankIcon, proBox, nameBoxName, scoreBoxName } from "components/Styles/ProStyle";




export const ProPlayers = ({ users }) => {
	const [firstPro, setFirstPro] = useState({ first_name: "", last_name: "", scoreText: "", imageLink: "" });
	const [secondPro, setSecondPro] = useState({ first_name: "", last_name: "", scoreText: "", imageLink: "" });
	const [thirdPro, setThirdPro] = useState({ first_name: "", last_name: "", scoreText: "", imageLink: "" });
	// const [secondRank, setSecondRank] = useState(2);
	// const [thirdRank, setThirdRank] = useState(3);
	useEffect(() => {
		if (!users) {
			return;
		}


		if (users[0]) { setFirstPro(users[0]) }
		if (users[1]) { setSecondPro(users[1]) }
		if (users[2]) { setThirdPro(users[2]) }

		// (firstPro.totalScore == secondPro.totalScore) ? setSecondRank(1) : setSecondRank(2);
		// (secondPro.totalScore == thirdPro.totalScore) ? setThirdRank(secondRank) : setThirdRank(secondRank + 1);

	}, [users]);



	return (

		<Grid container sx={proBox} spacing={0} >
			<Grid item xs={12}>
				<Grid container sx={{ minHeight: '24vh', borderBottom: '1px solid #d1d1d1' }}>
					<Grid xs={6} item><Box component="img" sx={rankIcon} alt="" src={firstRank} /></Grid>
					<Grid xs={6} item>
						<Typography sx={nameBoxName} variant="h5" component="h5"  style={{marginTop : '7vh'}} >{firstPro.first_name}</Typography>
						<Typography sx={nameBoxName} variant="h5" component="h5" >{firstPro.last_name}</Typography>
						<Typography sx={scoreBoxName} variant="h5" component="h5">{firstPro.scoreText}   </Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Grid container sx={{ minHeight: '24vh', borderBottom: '1px solid #d1d1d1' }}>
					<Grid xs={6} item><Box component="img" sx={rankIcon} alt="" src={secondRank} /></Grid>
					<Grid xs={6} item>
						<Typography sx={nameBoxName} variant="h5" component="h5"  style={{marginTop : '7vh'}} >{secondPro.first_name}</Typography>
						<Typography sx={nameBoxName} variant="h5" component="h5" >{secondPro.last_name}</Typography>
						<Typography sx={scoreBoxName} variant="h5" component="h5">{secondPro.scoreText}   </Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Grid container sx={{ minHeight: '24vh' }}>
					<Grid xs={6} item><Box component="img" sx={rankIcon} alt="" src={thirdRank} /></Grid>
					<Grid xs={6} item>
						<Typography sx={nameBoxName} variant="h5" component="h5"  style={{marginTop : '7vh'}} >{thirdPro.first_name}</Typography>
						<Typography sx={nameBoxName} variant="h5" component="h5" >{thirdPro.last_name}</Typography>
						<Typography sx={scoreBoxName} variant="h5" component="h5">{thirdPro.scoreText}   </Typography>
					</Grid>
				</Grid>
			</Grid>
		
		</Grid>

	);
};
