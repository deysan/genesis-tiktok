import { Header } from './Header';
import { Player } from './Player';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

export const Video = (props) => {

  const {nickname, video, text, like} = props;

  return (
    <>
      <div className='video'>
        {<Header key={nickname} {...props}/>}
        {<Player key={video} {...props}/>}
        {<Sidebar key={like} {...props}/>}
        {<Footer key={text} {...props}/>}
      </div>
    </>
  )
};
