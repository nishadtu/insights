/** @type {import("@mui/material").SxProps} */
const styles = {
    container: {
      display: 'flex',
      bgcolor: 'neutral.light',
      height: 'calc(100% - 64px)',
    },
    mainSection: (theme) => ({
      width: '100%',
      height: '100%',
      overflow: 'auto',
      padding: '50px',
      paddingLeft: '55px',
      [theme.breakpoints.only("xs")]: {
          padding: '30px',
          paddingLeft: '50px',
      }
  }),
  }
  
  export default styles;