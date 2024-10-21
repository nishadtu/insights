import React from "react";
import { Typography, Divider, Paper, Grid } from "@mui/material";
import styles from "./style";

const ChartBox = ({ chartBox, subIcon, chatBoxText, chatBoxSubText, generalFooter }) => {
    return (
        <>
            <Paper sx={styles.cardBox}>
                <Grid container spacing={0} sx={styles.gridBox}>
                    <Grid item xs={12}>
                        {chartBox}
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={styles.gridBox} style={{ paddingTop: 0, paddingBottom: '10px' }}>
                    <Grid item xs={12}>
                        <Typography gutterBottom sx={styles.generalTextStyle}>
                            {chatBoxText}
                        </Typography>
                        <Typography gutterBottom sx={styles.generalNumberStyle}>
                            {chatBoxSubText}
                        </Typography>
                    </Grid>
                </Grid>
                <Divider sx={styles.dividerStyle}></Divider>
                <Grid container spacing={2} sx={styles.gridBoxBottom}>
                    <Grid item xs={12} >
                        <Typography gutterBottom sx={styles.bottomText}>
                            {subIcon} <span style={{ position: 'relative', top: '2px', left: '5px' }}>{generalFooter}</span>
                        </Typography>
                    </Grid>

                </Grid>
            </Paper>
        </>

    );
};

export default ChartBox;
