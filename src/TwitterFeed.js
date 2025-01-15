import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

function TwitterFeed() {
  return (
    <div>
      {/* Embed a tweet by its ID */}
      <TwitterTweetEmbed tweetId={'20'} />

      {/* Or embed a timeline */}
      {/* <TwitterTimelineEmbed
            sourceType="profile"
            screenName="wordgrammer"
            options={{height: 400}}
          /> */}
    </div>
  );
}

export default TwitterFeed;