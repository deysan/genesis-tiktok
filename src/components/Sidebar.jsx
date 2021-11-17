import { MdOutlineMessage, MdFavoriteBorder } from 'react-icons/md';

export const Sidebar = ({like, comment}) => {

  return <div className='video-sidebar'>
    <div className='video-sidebar-button'>
      <span className='material-icons'><MdFavoriteBorder /></span>
      <p>{like}</p>
    </div>
    <div className='video-sidebar-button'>
      <span className='material-icons'><MdOutlineMessage /></span>
      <p>{comment}</p>
    </div>
  </div>
};
