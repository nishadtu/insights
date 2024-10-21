import React, { useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { PROPERTY_ID, CLIENT_ID } from 'constants';
import { Button } from '@mui/material';

const GoogleAnalyticsApp = () => {
  const propertyId = PROPERTY_ID;
  const startDate = 'yyyy-mm-dd';
  const endDate = 'yyyy-mm-dd';

  const googleLogin = useGoogleLogin( {
    clientId: CLIENT_ID,
    responseType: 'token',
    onSuccess: async ( tokenResponse ) => {
      const accessToken = tokenResponse?.access_token;
      if ( accessToken ) {
        fetchData(accessToken)
      }
    },
    onError: ( error ) => {
      console.error( error );
    }
  } );

  const fetchData = async ( accessToken ) => {
    console.log(accessToken);
    try {
      const metrics = [{ name: 'activeUsers' }];
      const dimensions = [{ name: 'country' }];

      const requestBody = {
        dateRanges: [{ startDate, endDate }],
        metrics,
        dimensions,
      };

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ accessToken }`,
      };

      const apiResponse = await axios.post(
        `https://analyticsdata.googleapis.com/v1beta/properties/${ propertyId }:runReport`,
        requestBody,
        { headers }
      );

      const responseData = apiResponse.data;
      console.log( "responseData", responseData );
    } catch ( error ) {
      console.error( error );
    }
  };

  useEffect( () => {
    if ( googleLogin.tokenResponse?.access_token ) {
      fetchData( googleLogin.tokenResponse.access_token );
    }
  }, [googleLogin.tokenResponse, fetchData] );

  return (
    <div className="App" style={{ padding: '5%'}}>
      <h1>Google Analytics Report</h1>
      <Button onClick={ googleLogin }>Check Analytics</Button>
    </div>
  );
};

export default GoogleAnalyticsApp;