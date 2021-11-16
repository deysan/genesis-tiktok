import { MdArrowBack } from 'react-icons/md';

export const Header = (props) => {

  return <div className='video-header'>
    <span className='material-icons'><MdArrowBack /></span>
    <div className='video-header-user'>
      <h3 className='video-header-name'>User Name</h3>
      <img className='video-header-avatar' src='https://www.w3schools.com/howto/img_avatar.png' alt='' />
    </div>
  </div>
};
