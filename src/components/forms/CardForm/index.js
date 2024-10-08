import React, { useEffect, useState, useRef } from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { scoreCardBox, totalScoreBox, scoreTitle, totalScoreNumber, paraTitle, paraText } from "components/Styles/CardStyle";
import icon1Img from 'images/icon1.png';
import icon2Img from 'images/icon2.png';
import icon3Img from 'images/icon3.png';
import icon4Img from 'images/icon4.png';
import icon5Img from 'images/icon5.png';

import ScoreCardBox from "components/formElements/ScoreCardBox";

const leadTitle = (theme) => ({
  color: '#017dc3',
  fontFamily: 'Poppins-Medium',
  fontSize: '4rem',
  lineHeight: '4rem',
  textAlign: 'center',
  width: '100%',
  marginTop: '0px',
  marginBottom: '50px',
  '@media (orientation: landscape)': {
    fontSize: '3.75rem',
    marginBottom: '20px',
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: '2.75rem',
    lineHeight: '3rem',
    marginBottom: '20px',
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: '2rem',
    lineHeight: '1.75rem',
    marginBottom: '20px',
  },
});

const CardForm = ({ user }) => {
  const [unique_id, setUniqueId] = useState("");
  const [chipping, setChipping] = useState("");
  const [horse, setHorse] = useState("");
  const [impossible, setImpossible] = useState("");
  const [knock, setKnock] = useState("");
  const [boxing, setBoxing] = useState("");
  const [totalScore, setTotalScore] = useState("");

  useEffect(() => {
    if (user) {
      setUniqueId(user.data().unique_id);
      setChipping(user.data().chipping);
      setHorse(user.data().horse);
      setImpossible(user.data().impossible);
      setKnock(user.data().knock);
      setBoxing(user.data().boxing);
      setTotalScore(user.data().totalScore);
    }
  }, [user]);




  return (
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 800, flexGrow: 1, boxShadow: 'none', marginTop: '0px', background: 'transparent' }}	>

      <Grid container spacing={0} style={{ marginTop: '20px' }}>
        <Grid item xs={12}>
          <Typography variant="h1" component="h1" sx={leadTitle}>
            Score Card
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={4} sx={totalScoreBox}>
          <Typography sx={scoreTitle} variant="h1" component="h1" >
            TOTAL POINTS
          </Typography>
          <Typography sx={totalScoreNumber} variant="h1" component="h1" >
            {totalScore ? totalScore : "-"}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={0}  sx={scoreCardBox}>

        <Grid item xs={12} sm={6} sx={{ background: '#017dc3' }}>
          <Grid container spacing={1}>

            <Grid item xs={12} sx={{ marginTop: '30px' }}><ScoreCardBox scoreImg={icon5Img} scoreHead="Horse Riding Sim" scoreIndividual={horse ? horse : "-"} /></Grid>
            <Grid item xs={12}><ScoreCardBox scoreImg={icon2Img} scoreHead="Knock'Em Down" scoreIndividual={knock ? knock : "-"} /></Grid>
            <Grid item xs={12}><ScoreCardBox scoreImg={icon4Img} scoreHead="Boxing Reaction" scoreIndividual={boxing ? boxing : "-"} /></Grid>
            <Grid item xs={12}><ScoreCardBox scoreImg={icon1Img} scoreHead="Impossible Putt" scoreIndividual={impossible ? impossible : "-"} /></Grid>
            <Grid item xs={12} sx={{ marginBottom: '30px' }}><ScoreCardBox scoreImg={icon3Img} scoreHead="Chipping Challenge" scoreIndividual={chipping ? chipping : "-"} /></Grid>
          </Grid>

        </Grid>
        <Grid item xs={12} sm={6} >
          <Grid item xs={12}>
            <Typography sx={paraTitle} variant="h1" component="h1" >
              See my <br></br>activity scores
            </Typography>
            <Typography sx={paraText} variant="h1" component="h1" >
              See opposite for a breakdown of how I score across all 5 activities.
            </Typography>
            <Typography sx={paraText} variant="h1" component="h1" style={{marginBottom : '25px'}}>
              If you are in the area, try the experience to see how you score
            </Typography>
          </Grid>
        </Grid>


      </Grid>

    </Paper>

  );
};

export default CardForm;
