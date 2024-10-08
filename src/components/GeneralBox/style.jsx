/** @type {import("@mui/material").SxProps} */
const styles = {
    cardBox: (theme) => ({
        minWidth: '100%',
        overflow: 'initial',
        background: '#F1F1F1',
        [theme.breakpoints.only("xs")]: {

        }
    }),
    gridBox: (theme) => ({
        marginTop: '40px',
        p: 3,
        [theme.breakpoints.only("xs")]: {
            marginTop: '30px',
        }
    }),
    iconBox: (theme) => ({
        background: '#a2cc3a',
        padding: '25px',
        width: '100px',
        height: '100px',
        position: 'relative',
        top: '-60px',
        textAlign: 'center',
        borderRadius: '20px',
        [theme.breakpoints.only("sm")]: {
            height: '60px',
            width: '60px',
            padding: '15px',
        },
        [theme.breakpoints.only("xs")]: {
            height: '50px',
            width: '50px',
            padding: '13px',
            top: '-50px'
        }
    }),
    generalTextStyle: (theme) => ({
        color: 'text.secondary',
        fontSize: 16,
        textAlign: 'right',
        marginTop: '-10px',
        [theme.breakpoints.only("xs")]: {
            fontSize: 14,
        }
    }),
    generalNumberStyle: (theme) => ({
        color: 'text.secondary',
        fontSize: 26,
        textAlign: 'right',
        fontWeight: 'bold',
        marginTop: '-10px',
        [theme.breakpoints.only("xs")]: {
            fontSize: 20,
        }
    }),
    dividerStyle: (theme) => ({
        marginTop: '-60px',
        [theme.breakpoints.only("sm")]: {
            marginTop: '-30px'
        },
        [theme.breakpoints.only("xs")]: {
            marginTop: '-30px'
        }
    }),
    gridBoxBottom: (theme) => ({
        p: 2, 
        padding: '10px 16px 5px', 

        [theme.breakpoints.only("xs")]: {

        }
    }),
    bottomText: (theme) => ({
        color: 'text.secondary', 
        fontSize: 14,
        [theme.breakpoints.only("xs")]: {

        }
    }),
}

export default styles;
