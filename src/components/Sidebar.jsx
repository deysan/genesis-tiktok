import { MdOutlineMessage, MdFavoriteBorder } from 'react-icons/md';

export const Sidebar = (props) => {

  return <div className='video-sidebar'>
    <div className='video-sidebar-button'>
      <span className='material-icons'><MdFavoriteBorder /></span>
      <p>12</p>
    </div>
    <div className='video-sidebar-button'>
      <span className='material-icons'><MdOutlineMessage /></span>
      <p>23</p>
    </div>
  </div>
};
