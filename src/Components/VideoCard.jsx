import React from 'react';
import CommentSection from './CommentSection';

const VideoCard = ({ video, onLike, onAddComment }) => {
  return (
    <div className="video-card">
      <video controls src={video.url} />
      <h3>{video.title}</h3>
      <p>Posted by: {video.user}</p>
      <button onClick={() => onLike(video.id)}>Like ({video.likes})</button>
      <CommentSection video={video} onAddComment={onAddComment} />
    </div>
  );
};

export default VideoCard;