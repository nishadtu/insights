import { Box, Typography, Grid } from "@mui/material"
import register from "images/register.png";
import login from "images/login.png";
import handIcon from "images/hand.png";
import logo from "images/logo.png";
import { welcomeLogo, WelcomeGridBox, WelcomeModalHead, WelcomeModalDescription, linkButton } from "components/Styles/ModalStyle";

export const WelcomeModal = ({ handleClickRegister, handleClickLogin, eventName }) => {
    return (
        <Box sx={WelcomeGridBox}>
            <Grid item xs={12}>
                <Box component="img" sx={welcomeLogo} alt="Insights Admin Dashboard" src={logo} />
            </Grid>
            <Typography sx={WelcomeModalHead} variant="h6" component="h2">
                {eventName}
            </Typography>
            <Typography sx={WelcomeModalDescription} >
                Choose from the options below to begin the activity
            </Typography>
            <Grid container spacing={2} >
                <Grid item xs={6}>
                    <Box component="img" sx={linkButton} alt="Insights Admin Dashboard" onClick={handleClickRegister} src={register} />
                </Grid>
                <Grid item xs={6}>
                    <Box component="img" sx={linkButton} alt="Insights Admin Dashboard" onClick={handleClickLogin} src={login} />
                </Grid>
            </Grid>
            <Typography sx={WelcomeModalDescription} variant="div" component='div' style={{ marginTop: '50px' }}>
                <img src={handIcon} style={{ width: '32px', marginRight: '0px', marginTop: '-5px' }} alt="" />Touch screen to continue
            </Typography>
        </Box>
    )
}