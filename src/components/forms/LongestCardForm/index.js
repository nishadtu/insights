import React, { useEffect, useState, useRef } from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { scoreCardBox, totalScoreBox, scoreTitle, totalScoreNumber, paraTitle, paraText } from "components/Styles/CardStyle";




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

const LongestCardForm = ({ user }) => {
  const [nearest, setNearest] = useState("");

  useEffect(() => {
    if (user) {
       setNearest(user.data().scoreText);
    }
  }, [user]);




  return (
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 800, flexGrow: 1, boxShadow: 'none', marginTop: '50px', background: 'transparent' }}	>

      <Grid container spacing={0} style={{ marginTop: '20px' }}>
        <Grid item xs={12}>
          <Typography variant="h1" component="h1" sx={leadTitle}>
            Longest Drive score
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={4} sx={totalScoreBox}>
          <Typography sx={scoreTitle} variant="h1" component="h1" >
            TOTAL POINTS
          </Typography>
          <Typography sx={totalScoreNumber} variant="h1" component="h1" >
            {longest ? longest : "-"}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={0}  sx={scoreCardBox}>

        
        <Grid item xs={12}  >
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

export default LongestCardForm;
