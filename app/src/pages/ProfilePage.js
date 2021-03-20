import Destination from '../components/profile/Destination';

import './ProfilePage.css';

const ProfilePage = () => {
  return(
    <div className='profile-div' >
      <div className='bg-image' />
      <div className='contents' >
        <Destination />
      </div>
    </div>
  )
};

export default ProfilePage;