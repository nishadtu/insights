import { Grid } from '@mui/material';
import React from 'react';
import styles from './style';
import GeneralBox from 'components/GeneralBox';
import PlaylistAddCircleOutlinedIcon from '@mui/icons-material/PlaylistAddCircleOutlined';


const OverViewBox = ({ nearestCount, longestCount, totalCount, nearestEmailCount, longestEmailCount }) => {

  return (
    <>
       
        <Grid container spacing={{ md: 4, sm: 2, xs: 2 }} >
          <Grid item xs={12} sm={6} md={3}>
            <GeneralBox icon={<PlaylistAddCircleOutlinedIcon sx={styles.generalIcon} />} generalText='Nearest the Pin' generalNumber={nearestCount} subIcon={<PlaylistAddCircleOutlinedIcon />} generalFooter='For entire time entries' />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <GeneralBox icon={<PlaylistAddCircleOutlinedIcon sx={styles.generalIcon} />} generalText='Longest Drive' generalNumber={longestCount} subIcon={<PlaylistAddCircleOutlinedIcon />} generalFooter='For entire time entries' />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <GeneralBox icon={<PlaylistAddCircleOutlinedIcon sx={styles.generalIcon} />} generalText='Total Users' generalNumber={totalCount} subIcon={<PlaylistAddCircleOutlinedIcon />} generalFooter='For entire time entries' />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <GeneralBox icon={<PlaylistAddCircleOutlinedIcon sx={styles.generalIcon} />} generalText='Email Sent' generalNumber={nearestEmailCount} subIcon={<PlaylistAddCircleOutlinedIcon />} generalFooter='For Nearest score email sent' />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <GeneralBox icon={<PlaylistAddCircleOutlinedIcon sx={styles.generalIcon} />} generalText='Email Sent' generalNumber={longestEmailCount} subIcon={<PlaylistAddCircleOutlinedIcon />} generalFooter='For Longest score email sent' />
          </Grid>
        </Grid>
        

    </>
  );
}

export default OverViewBox;