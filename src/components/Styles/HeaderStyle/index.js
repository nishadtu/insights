import Admin from "pages/AdminPage";

const headerLogo = (theme) => ({
	width: 160,
	marginTop: '15vh',
	[theme.breakpoints.up("md")]: {
		width: 200,
		marginTop: '10vh',
	},
});

const headerTitle = (theme) => ({
	color: '#000000',
	fontFamily: 'Bernina-Sans-Light',
	fontSize: '1.5rem',
	lineHeight: '3.5rem',
	marginTop: '10vh',
	[theme.breakpoints.only("xs")]: {
		fontSize: '1rem',
		lineHeight: '1.5rem',
	},
	[theme.breakpoints.up("md")]: {
		fontSize: '2rem',
	},
});

const paperBox = (theme) => ({
	width: '86%',
	background: 'transparent',
	borderRadius: '0',
	paddingBottom: '15px',
	boxShadow: 'none',
	marginLeft: '7%',
	
	[theme.breakpoints.only("xs")]: {
		width: '90%',
		marginLeft: '5%',
	},
});

const mainTitle = (theme) => ({
	color: '#000000',
	fontFamily: 'Bernina-Sans-Light',
	fontSize: '3rem',
	lineHeight: '3.5rem',
	marginTop: '0px',
	marginBottom: '0px',
	[theme.breakpoints.only("xs")]: {
		fontSize: '2rem',
		lineHeight: '2.25rem',
		marginTop: '20px',
		marginBottom: '15px',
	},
	[theme.breakpoints.up("md")]: {
		fontSize: '4rem',
		lineHeight: '4.5rem',
		marginTop : '20px',
		marginBottom : '20px',
	},
});

// Admin
const adminHeaderLogo = (theme) => ({
	width: 230,
	display : 'block',
	margin: '0px auto',
	[theme.breakpoints.up("md")]: {
		width: 350,
		marginTop: '2vh',
	},
});

const dashboardTitle = (theme) => ({
	color: '#000000',
	fontFamily: 'Bernina-Sans-Light',
	fontSize: '2rem',
	lineHeight: '3.5rem',
	margin : 'auto',
	textAlign : 'center',
	marginBottom : '30px',
	marginTop : '10px',
	[theme.breakpoints.only("xs")]: {
		fontSize: '2rem',
		lineHeight: '2.5rem',
		marginTop : '10px'
	},
	[theme.breakpoints.up("md")]: {
		fontSize: '3.5rem',
		marginTop : '15px',
	},
});
const dbPaperBox = (theme) => ({
	paddingLeft: '5%',
	paddingRight: '5%',
	flexGrow: 1,
	background: 'transparent',
	boxShadow: 'none',
	[theme.breakpoints.only("xs")]: {
		paddingLeft: '30px',
		paddingRight: '30px',
	},
});

export {
	headerLogo,
	paperBox,
	headerTitle,
	mainTitle,
	adminHeaderLogo,
	dashboardTitle,
	dbPaperBox
}