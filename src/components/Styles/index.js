
const paperBox = (theme) => ({
	flexGrow: 1,
	background: '#ff0000',
	boxShadow: '0 0 15px #000',
	[theme.breakpoints.only("xs")]: {

	},
});

const bodyActiveIcons = (theme) => ({
	width: "32px",
	height: "32px",
});

const bodyInactiveIcons = (theme) => ({
	width: "32px",
	height: "32px",
	opacity: "0.5",
});


const textIcon = (theme) => ({
	width: 20,
	marginRight: '5px',
	marginTop : '-4px',
});

const inputBox = (theme) => ({
	color: '#000',
	fontSize: '40px',
	width : '100%',
	fontFamily: 'sequel-sans-medium-body',
});

const baseCircle = (theme) => ({
	width: "30px",
	height: "30px",
	borderRadius: "50%",
	margin: "auto",
	display: "block",
});
const redCircle = (theme) => ({
	...baseCircle(theme),
	backgroundColor: "#ff001f",
});

const greenCircle = (theme) => ({
	...baseCircle(theme),
	backgroundColor: "#00ea21",
});

const yellowCircle = (theme) => ({
	...baseCircle(theme),
	backgroundColor: "#ffb400",
});

const WelcomeBoxGrid = (theme) => ({
	color: '#FFF',
	background : '#000',
	fontFamily: 'RocketSans-Regular',
	textAlign: 'center',
	height : '102vh',
	overFlow : 'hidden',
});
const infoText = (theme) => ({
	color: '#000',
	fontFamily: 'Bernina-Sans-Light',
});

export {
	paperBox,
	bodyActiveIcons,
	bodyInactiveIcons,
	textIcon,
	inputBox,
	redCircle,
	greenCircle,
	yellowCircle,
	WelcomeBoxGrid,
	infoText
}