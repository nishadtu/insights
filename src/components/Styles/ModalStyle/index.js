import { Modal } from "@mui/material";

const ModalLogo = (theme) => ({
	width: 180, 
    maxWidth: { xs: "75%", md: "70%" }, 
    display: "block", 
    margin: "auto", 
    marginTop: '20px',
	[theme.breakpoints.only("xs")]: {
		width: 140, 
	},
});

const closeButton = (theme) => ({
	width: 30, 
    position: 'absolute', 
    right: '10px', 
    top: '15px'
});

const styleEmailModal = (theme) => ({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 600,
	bgcolor: "#FFFFFF",
	border: "2px solid #FFFFFF",
	boxShadow: 24,
	p: 5,
	outline: "none",
	color: "#FFF",
	textAlign: "center",
	borderRadius: "20px",
	[theme.breakpoints.only("xs")]: {
		// override the default behavior if within these breakpoints (inclusive)
		maxWidth: '90%'
	},
});

const ModalHead = (theme) => ({
	color: '#000000',
	fontFamily: 'Bernina-Sans-Light',
	fontSize: '3rem',
	lineHeight: '3rem',
	marginTop: '10px',
	textAlign: 'center',
	marginBottom: '0px',
	[theme.breakpoints.only("xs")]: {
		fontSize: '2rem',
		lineHeight: '2.25rem',
		marginTop: '0',
		marginBottom: '15px',
	},
});

const styleModal = (theme) => ({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 450,
	bgcolor: "#FFFFFF",
	border: "2px solid #FFFFFF",
	boxShadow: 24,
	p: 5,
	outline: "none",
	color: "#FFF",
	textAlign: "center",
	borderRadius: "20px",
	[theme.breakpoints.only("xs")]: {
		maxWidth : '80%',
	},
});

const ModalDescription = (theme) => ({
	textAlign: 'center',
	fontFamily: 'CircularXX-Regular',
	color: '#000000',
	fontSize: '1.35rem',
	lineHeight: '2rem',
	marginTop: '5px',
	padding: '10px 20px',
	letterSpacing : '1px',
	[theme.breakpoints.only("xs")]: {
		fontSize: '1.25rem',
		lineHeight: '1.75rem',
	},
});

// WelcomeBox
const welcomeLogo = (theme) => ({
	width : 200,
	maxWidth : '80%',
	[theme.breakpoints.only("xs")]: {
		maxWidth : '70%',
	},
});
const WelcomeGridBox = (theme) => ({
    justify: "flex-end",
    alignItems: "center",
    width: '800px',
    maxWidth: '75%',
    borderRadius: '25px',
    background: '#FFF',
    display: 'block',
    margin: 'auto',
    padding: '2rem 4rem 2rem',
    boxShadow: '0 0 15px rgba(0,0,0,0.5)',
    [theme.breakpoints.only("xs")]: {
        width: '100%',
        margin: 'auto',
        maxWidth: '80%',
        padding: '30px',
        minHeight: 'auto',
    },
});
const WelcomeModalHead = (theme) => ({
	color: '#000000',
	fontFamily: 'Bernina-Sans-Light',
	fontSize: '3.25rem',
	lineHeight: '3.5rem',
	marginTop: '20px',
	textAlign: 'center',
	marginBottom: '0px',
	[theme.breakpoints.only("xs")]: {
		fontSize: '2rem',
		lineHeight: '2.25rem',
		marginTop: '20px',
		marginBottom: '15px',
	},
});
const WelcomeModalDescription = (theme) => ({
	textAlign: 'center',
	fontFamily: 'CircularXX-Regular',
	color: '#000000',
	fontSize: '0.9rem',
	lineHeight: '1.25rem',
	marginTop: '5px',
	[theme.breakpoints.only("xs")]: {
		fontSize: '1.24rem',
		lineHeight: '1.5rem',
		maxHeight: '50vh',
	},
});
const linkButton = (theme) => ({
    width: '95%',
    display: 'block',
    margin: 'auto',
    marginTop: '35px',
    boxShadow: '0 0 20px rgba(0,0,0,0.15)',
    borderRadius: '20px',

});

//Terms Modal
const termsLogo = (theme) => ({
	width: 220, 
	maxWidth: { xs: "85%", md: "70%" }, 
	[theme.breakpoints.only("xs")]: {
		maxWidth : '80%',
	},
});

const styleTerms = (theme) => ({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 800,
	maxWidth: "80%",
	bgcolor: "#FFF",
	border: "2px solid #FFF",
	borderRadius: "20px",
	boxShadow: 24,
	p: 7,
	outline: "none",
	color: "#012b53",
	maxHeight: "85vh",
	overflowY: "auto",
	[theme.breakpoints.only("xs")]: {
		p: 3,
		maxHeight: "95vh",
	},
});

const termsModalHead = (theme) => ({
	color: '#000000',
	fontFamily: 'Bernina-Sans-Light',
	fontSize: '2.75rem',
	lineHeight: '3.5rem',
	marginTop: '20px',
	marginBottom: '0px',
	[theme.breakpoints.only("xs")]: {
		fontSize: '2rem',
		lineHeight: '2.25rem',
		marginTop: '20px',
		marginBottom: '15px',
	},
});
const termsModalDescription = (theme) => ({
	maxHeight: '50vh',
	overflow: 'auto',
	textAlign: 'left',
	fontFamily: 'CircularXX-Regular',
	color: '#000000',
	fontSize: '.85rem',
	lineHeight: '1.25rem',
	marginTop: '15px',
	padding: '10px',
	[theme.breakpoints.only("xs")]: {
		fontSize: '.75rem',
		lineHeight: '1rem',
	},
});

// Email Modal

const emailModal = (theme) => ({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 600,
	bgcolor: "#F1F1F1",
	border: "2px solid #F1F1F1",
	boxShadow: 24,
	p: 5,
	outline: "none",
	color: "#FFF",
	textAlign: "center",
	borderRadius: "20px",
	[theme.breakpoints.only("xs")]: {
		// override the default behavior if within these breakpoints (inclusive)
		maxWidth: '90%'
	},
});


export {
    styleTerms,
	ModalLogo,
	WelcomeModalHead,
	WelcomeModalDescription,
	termsLogo,
    closeButton,
    styleEmailModal,
    ModalHead,
	styleModal,
	ModalDescription,
	welcomeLogo,
	WelcomeGridBox,
	linkButton,
	termsModalHead,
	termsModalDescription,
	emailModal
}