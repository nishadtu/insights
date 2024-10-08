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
        p: 3,
        [theme.breakpoints.only("xs")]: {
            marginTop: '0px',
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
        textAlign: 'left',
        fontWeight: 'bold',
        [theme.breakpoints.only("xs")]: {
            fontSize: 12,
            marginTop: '-20px',
        }   
    }),
    generalNumberStyle: (theme) => ({
        color: 'text.secondary',
        fontSize: 14,
        textAlign: 'left',
        marginTop: '-5px',
        [theme.breakpoints.only("xs")]: {
            fontSize: 12,
        }
    }),
    dividerStyle: (theme) => ({
        marginTop: '0px',

    }),
    gridBoxBottom: (theme) => ({
        p: 2, 
        paddingBottom: '10px',
        paddingTop: '10px',
        [theme.breakpoints.only("xs")]: {

        }
    }),
    bottomText: (theme) => ({
        color: 'text.secondary', 
        fontSize: 14,
        [theme.breakpoints.only("xs")]: {
            fontSize: 12,
        }
    }),
}

export default styles;

