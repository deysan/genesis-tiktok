import { Header } from './Header';
import { Player } from './Player';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

export const Video = (props) => {

  return <div className='video-container'>
    <div className='video'>
      <Header />
      <Player />
      <Sidebar />
      <Footer />
    </div>
  </div>
};
