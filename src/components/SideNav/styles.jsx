const buttonStyle = (theme) => ({
    color: '#000000',
    fontFamily : 'Arial',
    textDecoration : 'none',
    ":hover": {
        color: 'red',
    },
    ":focus": {
        color: 'green',
    },
    "&:active": {
        color: 'red',
    }
});


export {
	buttonStyle

}