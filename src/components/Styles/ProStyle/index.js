const rankIcon = (theme) => ({
	width: '18vh',
	maxWidth : '90%',
	display: 'block',
	margin : 'auto',
	marginTop : '3vh'
});

const proBox = (theme) => ({
	padding: "0px", 
	background: 'transparent', 
	maxWidth: '1024px', 
	margin: 'auto', 
	marginTop : '15px',
	boxShadow : '0 0 20px rgba(0,0,0,0.2)',
	borderRadius : '25px',
	minHeight : '74vh',

});

const nameBoxName = (theme) => ({
	color: '#ed1d24',
	fontFamily: 'Bernina-Sans-Light',
	fontSize: '2rem',
	lineHeight: '2rem',
	textAlign: 'left',
	width: '100%',
	marginBottom: '3px',
	marginTop : '10px',
	textTransform : 'uppercase',
	[theme.breakpoints.down("md")]: {
		fontSize: '14px',
		lineHeight: '20px',
	},
	[theme.breakpoints.only("sm")]: {
		fontSize: '18px',
		lineHeight: '20px',
	},
	[theme.breakpoints.only("xs")]: {
		fontSize: '14px',
		lineHeight: '16px',
	},

});
const scoreBoxName = (theme) => ({
	color: '#000000',
	fontFamily: 'Bernina-Sans-Light',
	fontSize: '1.75rem',
	lineHeight: '1.75rem',
	width: '100%',
	marginBottom: '3px',
	marginTop : '1vh',
	[theme.breakpoints.only("sm")]: {
		fontSize: '18px',
		lineHeight: '20px',
	},
	[theme.breakpoints.only("xs")]: {
		fontSize: '14px',
		lineHeight: '18px',
	},

});

export {
    proBox, 
    nameBoxName, 
    scoreBoxName,
	rankIcon
}   