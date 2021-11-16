import {MdOutlineMessage, MdFavoriteBorder, MdArrowBack} from 'react-icons/md';

export const Video = (props) => {

  return <div className='video-container'>
    <div className='video'>
      <div className='video-header'>
        <span className='material-icons'><MdArrowBack /></span>
        <div className='video-header-user'>
          <h3 className='video-header-name'>User Name</h3>
          <img className='video-header-avatar' src='https://www.w3schools.com/howto/img_avatar.png' alt='' />
        </div>
      </div>
      <img className='video-player' src='https://via.placeholder.com/400x750' alt='' />
      <div className='video-sidebar'>
        <div className='video-sidebar-button'>
          <span className='material-icons'><MdFavoriteBorder /></span>
          <p>12</p>
        </div>
        <div className='video-sidebar-button'>
          <span className='material-icons'><MdOutlineMessage /></span>
          <p>23</p>
        </div>
      </div>
      <div className='video-footer'>
        <div className='video-footer-text'>
          <h2 className='video-footer-title'>Somanath Goudar</h2>
          <p className='video-footer-description'>Best Video Ever</p>
        </div>
      </div>
    </div>
  </div>
  
};
