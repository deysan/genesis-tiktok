import { useState, useEffect } from 'react';
import { getTrendingFeed } from '../config';
import { Video } from '../components/Video';
import { Preloader } from '../components/Preloader';

export const Main = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const [error, data] = await getTrendingFeed();
        if (error) return;
        setFeeds(data);
    };
    fetchData();
  }, []);

  // const [info, setInfo] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //       const [error, data] = await getUserInfo();
  //       if (error) return;
  //       setInfo(data);
  //   };
  //   fetchData();
  // }, []);

  // console.log()

  if (!feeds.length) {
    return <Preloader />
  } return (
    <>
      {feeds.slice(0, 30).map(feed => {
        const feedInfo = {
          id: feed.id,
          nickname: feed.authorMeta?.nickName,
          name: feed.authorMeta?.name,
          avatar: feed.authorMeta?.avatar,
          video: feed.videoUrl,
          text: feed.text,
          like: feed.diggCount,
          comment: feed.commentCount,
          hashtags: [feed.hashtags.map(hashtag => `#${hashtag.name} `)]
        };
            
        return <Video key={feed.id} {...feedInfo} />
      })}
    </>
  );
}
