/** @type {import("@mui/material").SxProps} */
const styles = {
    generalIcon: (theme) => ({
        width: '45px',
        height: '45px',
        color: '#FFF',
        [theme.breakpoints.only("sm")]: {
            width: '30px',
            height: '30px',
        },
        [theme.breakpoints.only("xs")]: {
            width: '25px',
            height: '25px',
        }
    }),
}

export default styles;

