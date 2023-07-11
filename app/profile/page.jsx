import React from 'react';

const headers = {
    Authorization: 'Bearer ' + process.env.LICHESS_TOKEN,
};

const getUser = async () => {
    fetch('https://lichess.org/api/account', { headers })
  .then(res => res.json())
  .then(console.log);
}

async function Profile(props) {
    // const data = await getUser();
    // console.log(data)

    return (
        <div>
            ok
        </div>
    );
}

export default Profile;