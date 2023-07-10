import React from 'react';
import { AccessContext, HttpClient, OAuth2AuthCodePKCE } from '@bity/oauth2-auth-code-pkce';

class Ctrl {
    oauth = new OAuth2AuthCodePKCE({
        authorizationUrl: "https://lichess.org/oauth",
        tokenUrl: "https://lichess.org/api/token",
        clientId: "example.com",
        scopes: ["email:read"],
        redirectUrl: "/myGames"


    })
}

const getMyAccount = async () => {
  try {
        const response = await fetch(
          'https://lichess.org/api/account'
        );
        const data = await response.json();
    return (
      data
        );
      } catch (error) {
        console.log('Error fetching games data:', error);
      }
}

async function Profile(props) {
    const account = await getMyAccount();
    console.log(account)
    return (
        <div>
            Login here
        </div>
    );
}

export default Profile;