
import { Box } from '@mui/material';
import React from 'react';
const styles = {
  about: {
    padding: '50px',
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white',
  }
};

const Dashboard = () => {
  return (
    <>
      <Box sx={styles.about}>
        <h1>Dashboard Page</h1>

        <p>Some text about who we are and what we do.</p>
      </Box>
    </>
  );
}

export default Dashboard;