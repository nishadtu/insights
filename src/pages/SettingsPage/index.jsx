
import { Box } from '@mui/material';
import React from 'react';
const styles = {
  about: {
    padding: '50px',
    textAlign: 'center',
    backgroundColor: '#474e5d',
    color: 'white',
  }
};

const Settings = () => {
  return (
    <>
      <Box sx={styles.about}>
        <h1>Settings Page</h1>

        <p>Some text about who we are and what we do.</p>
      </Box>
    </>
  );
}

export default Settings;