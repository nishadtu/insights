import React from "react";
import { Typography, Button, CardContent, CardActions, Card, Box, Divider, Grid} from "@mui/material";
import styles from "./style";

const GeneralBox = ({ icon, subIcon, generalText, generalNumber, generalFooter }) => {
    return (
        <>
            <Card sx={styles.cardBox}>
                <Grid container spacing={2} sx={styles.gridBox}>
                    <Grid item xs={5}>
                        <Box sx={styles.iconBox}>
                            {icon}
                        </Box>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography gutterBottom sx={styles.generalTextStyle}>
                            {generalText}
                        </Typography>
                        <Typography gutterBottom sx={styles.generalNumberStyle}>
                            {generalNumber}
                        </Typography>
                    </Grid>
                </Grid>
                <Divider sx={styles.dividerStyle}></Divider>
                <Grid container spacing={1} sx={styles.gridBoxBottom}>
                    <Grid item xs={12} >
                        <Typography gutterBottom sx={styles.bottomText}>
                            {subIcon} <span style={{ position: 'relative', top: '2px', left: '5px' }}>{generalFooter}</span>
                        </Typography>
                    </Grid>

                </Grid>
            </Card>
        </>

    );
};

export default GeneralBox;
