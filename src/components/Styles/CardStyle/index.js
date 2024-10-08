  const paraTitle = (theme) => ({
	color: '#000000',
	fontFamily: 'Poppins-Medium',
	fontSize: '1.75rem',
	lineHeight: '2.25rem',
	width: '100%',
	marginTop: '40px',
	marginBottom: '10px',
	marginLeft : '15%',
	paddingRight : '25%',
	[theme.breakpoints.only("sm")]: {
	  fontSize: '1.85rem',
	  lineHeight: '2.75rem',
	  marginTop: '30px',
	  marginBottom: '10px',
	},
	[theme.breakpoints.only("xs")]: {
	  fontSize: '1.5rem',
	  lineHeight: '2rem',
	  marginTop: '20px',
	  marginBottom: '10px',
	},
  });
  const paraSub = (theme) => ({
	color: '#000000',
	fontFamily: 'Poppins-Medium',
	fontSize: '2rem',
	lineHeight: '2.25rem',
	width: '100%',
	marginTop: '40px',
	marginBottom: '10px',
	marginLeft : '20px',
	[theme.breakpoints.only("sm")]: {
	  fontSize: '1.85rem',
	  lineHeight: '2.55rem',
	  marginTop: '30px',
	  marginBottom: '10px',
	},
	[theme.breakpoints.only("xs")]: {
	  fontSize: '1.5rem',
	  lineHeight: '2rem',
	  marginTop: '20px',
	  marginBottom: '10px',
	},
  });

  
  const videoFrame = (theme) => ({
	width : 600,
    maxWidth : '100%',
    position : 'relative',
    top : 0,
	boxShadow : '0 0 15px rgba(0,0,0,0.5)',

});



const socialTitle = (theme) => ({
	color: '#000000',
	fontFamily: 'sequel-sans-medium-body',
	fontSize: '1.25rem',
	lineHeight: '2rem',
	width: '80%',
	margin : 'auto',
	marginTop: '-60px',
	marginBottom: '30px',
	textAlign : 'center',
	[theme.breakpoints.only("sm")]: {
	  fontSize: '1.25rem',
	  lineHeight: '1.5rem',
	  marginTop: '-40px',
	  marginBottom: '43px',
	},
	[theme.breakpoints.only("xs")]: {
	  fontSize: '1.1rem',
	  lineHeight: '1.5rem',
	  marginTop: '-40px',
	  marginBottom: '30px',
	},
  });

  const totalScoreBox = (theme) => ({
	flexGrow: 1,
	background: '#FFF',
	maxWidth: '160px',
	borderRadius: ' 25px',
	boxShadow: '0 0 20px rgba(0,0,0,0.2)',
	display: 'block',
	margin: 'auto',
	overflow : 'hidden',
});



const scoreTitle = (theme) => ({
	color: '#FFFFFF',
	fontFamily: 'Poppins-Regular',
	fontSize: '1.25rem',
	lineHeight: '1.25rem',
	textAlign: 'center',
	width: '100%',
	paddingTop: '10px',
	paddingBottom: '10px',
	background : '#017dc3',
	[theme.breakpoints.only("sm")]: {
	  fontSize: '1.25rem',
	  lineHeight: '1.75rem',
	  paddingTop: '8px',
	paddingBottom: '8px',
	},
	[theme.breakpoints.only("xs")]: {
	  fontSize: '0.85rem',
	  lineHeight: '1.5rem',
	  paddingTop: '5px',
	paddingBottom: '5px',
	},
  });
  
  const totalScoreNumber = (theme) => ({
	color: '#000000',
	fontFamily: 'Poppins-SemiBold',
	fontSize: '4.5rem',
	lineHeight: '4.5rem',
	textAlign: 'center',
	width: '100%',
	marginTop: '10px',
	marginBottom: '10px',
	[theme.breakpoints.only("sm")]: {
	  fontSize: '2.75rem',
	  lineHeight: '2.75rem',
	  marginTop: '5px',
	marginBottom: '5px',
	},
	[theme.breakpoints.only("xs")]: {
	  fontSize: '2.25rem',
	  lineHeight: '2.25rem',
	  marginTop: '10px',
	  marginBottom: '10px',
	},
  });

  const scoreCardBox = (theme) => ({
	margin: 'auto', 
	maxWidth: 600, 
	flexGrow: 1, 
	marginTop: '5px', 
	background: '#FFFFFF',
	borderRadius : '25px',
	overflow : "hidden",
	marginTop : '30px',
	boxShadow : '0 0 15px rgba(0,0,0,0.2)',
});

const paraText = (theme) => ({
	color: '#000000',
	fontFamily: 'Poppins-Regular',
	fontSize: '1.25rem',
	lineHeight: '1.95rem',
	textAlign: 'left',
	width: '100%',
	marginTop: '30px',
	marginBottom: '10px',
	marginLeft : '15%',
	paddingRight : '25%',
	[theme.breakpoints.only("sm")]: {
	  fontSize: '1.35rem',
	  lineHeight: '1.95rem',
	  marginTop: '20px',
	  marginBottom: '25px',
	},
	[theme.breakpoints.only("xs")]: {
	  fontSize: '0.9rem',
	  lineHeight: '1.25rem',
	  marginTop: '15px',
	  marginBottom: '10px',
	},
  });

  export {
	paraTitle,
	socialTitle,
	totalScoreBox,
	scoreTitle,
	totalScoreNumber,
	scoreCardBox,
	paraText,
	paraSub
}