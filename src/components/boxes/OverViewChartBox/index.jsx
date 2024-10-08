
import { Box, Grid } from '@mui/material';
import React from 'react';
import ChartBox from 'components/ChartBox';
import { BarChart } from '@mui/x-charts/BarChart';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const OverViewChartBox = () => {
  return (
    <>
        <Grid container spacing={4} sx={{ marginTop: '40px' }}>
          <Grid item xs={12} sm={6} md={4} >
            <ChartBox
              chartBox={
                <Box sx={{ height: '200px', width: '100%', textAlign: 'center' }}>
                  <BarChart
                    xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                    sx={{ background: '#a2cc3a' }}
                  />
                </Box>

              }
              chatBoxText='Total Users' chatBoxSubText='Last 3 days total users' generalFooter='campaign sent 2 days ago' subIcon={<AccessTimeIcon />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <ChartBox
              chartBox={
                <Box sx={{ height: '200px', width: '100%' }}>
                  <BarChart
                    xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                    sx={{ background: '#a2cc3a' }}
                  />
                </Box>

              }
              chatBoxText='Total Users' chatBoxSubText='Last 3 days total users' generalFooter='campaign sent 2 days ago' subIcon={<AccessTimeIcon />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <ChartBox
              chartBox={
                <Box sx={{ height: '200px', width: '100%' }}>
                  <BarChart
                    xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                    sx={{ background: '#a2cc3a' }}
                  />
                </Box>

              }
              chatBoxText='Total Users' chatBoxSubText='Last 3 days total users' generalFooter='campaign sent 2 days ago' subIcon={<AccessTimeIcon />}
            />
          </Grid>
        </Grid>
    </>
  );
}

export default OverViewChartBox;