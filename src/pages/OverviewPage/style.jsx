/** @type {import("@mui/material").SxProps} */
const styles = {
    overFlowBox: (theme) => ({
        padding: '50px',
        backgroundColor: '#FFF',
        color: '#000',
        [theme.breakpoints.only("xs")]: {
            padding: '30px',
        }
    }),
    heading: (theme) => ({
        fontSize: '2.5rem',
        marginTop: '40px',
        fontWeight: '400',
        [theme.breakpoints.only("xs")]: {

        }
    }),
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

