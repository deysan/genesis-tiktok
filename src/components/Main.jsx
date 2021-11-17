import { Video } from './Video';
import { useEffect, useState } from 'react';
import { getTrendingFeed, getUserInfo } from '../config';

export const Main = () => {

  const [feeds, setFeeds] = useState([]);
  // const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const [error, data] = await getTrendingFeed();
        if (error) return;
        setFeeds(data);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //       const [error, data] = await getUserInfo();
  //       if (error) return;
  //       setInfo(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      {feeds.slice(0, 5).map(feed => {
        const feedInfo = {
          id: feed.id,
          nickname: feed.authorMeta?.nickName,
          avatar: feed.authorMeta?.avatar,
          video: feed.videoUrl,
          text: feed.text,
          like: feed.diggCount,
          comment: feed.commentCount,
          hashtags: [feed.hashtags.map(hashtag => `#${hashtag.name} `)]
        };
          
        return (
          <Video key={feed.id} {...feedInfo} />
        )
      })}
    </>
  );
}
