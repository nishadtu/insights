import React, { useEffect } from 'react';
import { CLIENT_ID } from 'constants';
import GoogleAnalyticsApp from 'components/GoogleAnalyticsApp';
import { GoogleOAuthProvider } from '@react-oauth/google';

const GoogleLogin = () => {
	

	return (
		<GoogleOAuthProvider clientId={CLIENT_ID}>
			<GoogleAnalyticsApp />
		</GoogleOAuthProvider>
	);
};

export default GoogleLogin;