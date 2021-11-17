import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

export const Header = ({name, nickname, avatar}) => {
  return <div className='video-header' style={{justifyContent:'flex-end'}}>
    <span className='material-icons' style={{display:'none'}}><MdArrowBack /></span>
    <Link to={name} className='video-header-link'>
      <div className='video-header-user'>
        <h3 className='video-header-name'>{nickname}</h3>
        <img className='video-header-avatar' src={avatar} alt='' />
      </div>
    </Link>
  </div>
};
