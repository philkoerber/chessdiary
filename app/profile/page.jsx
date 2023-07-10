"use client"

import React, { useEffect } from 'react';
import { OAuth2AuthCodePKCE } from '@bity/oauth2-auth-code-pkce';

const oauth = new OAuth2AuthCodePKCE({
  authorizationUrl: 'https://lichess.org/oauth',
  tokenUrl: 'https://lichess.org/api/token',
  clientId: 'YOUR_CLIENT_ID', // Replace with your actual client ID
  scopes: ['email:read'],
  redirectUrl: 'http://localhost:3000/myGames', // Replace with your redirect URL
});

const Profile = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const code = await oauth.fetchAuthorizationCode();
        // Exchange the authorization code for an access token
        const token = await oauth.fetchToken(code);
        // Make authenticated requests using the access token
        const accountResponse = await fetch('https://lichess.org/api/account', {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        });
        const accountData = await accountResponse.json();
        console.log(accountData);
      } catch (error) {
        console.log('Error fetching account data:', error);
      }
    };

    fetchData();
  }, []);

  return <div className="w-full">Login here</div>;
};

export default Profile;