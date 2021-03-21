import { useEffect, useState } from 'react';
import Destination from '../components/profile/Destination';

import './ProfilePage.css';

const URL = 'https://field-notes-api.herokuapp.com/api/users/profile';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const error = null;

  useEffect(() => {
    const token = {
      token: localStorage.getItem('token')
    }
    if (token) {
      fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(token)
      })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        setProfile(data)
      })
      .catch((err) => console.log(err));
    }
  }, [])

  return(
    <div className='profile-div' >
      <div className='bg-image' />
      <div className='contents' >
        <Destination />
      </div>
        {profile && <h1>{ profile.username}</h1>}
    </div>
  )
};

export default ProfilePage;