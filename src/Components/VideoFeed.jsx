import React, { useState } from 'react';
import videosData from '../Data/videos';
import VideoCard from './VideoCard';

const VideoFeed = () => {
  const [videos, setVideos] = useState(videosData);

  const handleLike = (id) => {
    setVideos(videos.map((video) =>
      video.id === id
        ? { ...video, likes: video.likes + 1 }
        : video
    ));
  };

  const handleAddComment = (videoId, commentText) => {
    setVideos(videos.map((video) =>
      video.id === videoId
        ? {
            ...video,
            comments: [
              ...video.comments,
              {
                id: video.comments.length + 1,
                user: 'User', // Replace with the actual logged-in user's name
                text: commentText,
              },
            ],
          }
        : video
    ));
  };

  return (
    <div className="video-feed">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          onLike={handleLike}
          onAddComment={handleAddComment}
        />
      ))}
    </div>
  );
};

export default VideoFeed;