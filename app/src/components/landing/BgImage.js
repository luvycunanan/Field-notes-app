import { BsPencilSquare } from 'react-icons/bs';

import './Landing.css';

const BgImage = () => {
  return(
    <div>
      <div className='d-flex text-center text-light' id='landingPage-css' />

      <div className='bg-text'>
        <h1 className='bg-text-title'>FIELD NOTES</h1>
        <div className='bg-text-div'>
          <BsPencilSquare className='bg-icon'
          size={200}
          />
          <p className='bg-div-text'>Organize Your Travel Itinerary</p>
        </div>
      </div>
    </div>
  )
};

export default BgImage;