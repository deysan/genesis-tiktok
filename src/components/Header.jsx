import { MdArrowBack } from 'react-icons/md';

export const Header = ({nickname, avatar}) => {

  return <div className='video-header'>
    <span className='material-icons'><MdArrowBack /></span>
    <div className='video-header-user'>
      <h3 className='video-header-name'>{nickname}</h3>
      <img className='video-header-avatar' src={avatar} alt='' />
    </div>
  </div>
};
