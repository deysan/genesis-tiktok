import { Header } from './Header';
import { Player } from './Player';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

export const Video = (props) => {

  const {id} = props;

  return <div className='video-container'>
    <div className='video'>
      {<Header key={id} {...props}/>}
      {<Player key={id} {...props}/>}
      {<Sidebar key={id} {...props}/>}
      {<Footer key={id} {...props}/>}
    </div>
  </div>
};
