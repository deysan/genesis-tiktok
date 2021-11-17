import { Header } from './Header';

export const User = (props) => {
  const {nickname} = props;

  return (
    <>
      <div className='video'>
        {<Header key={nickname} {...props}/>}
      </div>
    </>
  )
};