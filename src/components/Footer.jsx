export const Footer = ({text, hashtags}) => {

  return <div className='video-footer'>
    <div className='video-footer-text'>
      <h3 className='video-footer-title'>{text}</h3>
      {hashtags ? <p className='video-footer-description'>{hashtags}</p> : null}
    </div>
  </div>
};
