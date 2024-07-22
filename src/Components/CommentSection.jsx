import React, { useState } from 'react';

const CommentSection = ({ video, onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    onAddComment(video.id, comment);
    setComment('');
  };

  return (
    <div className="comment-section">
      <h4>Comments</h4>
      <form onSubmit={handleAddComment}>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
          required
        />
        <button type="submit">Post</button>
      </form>
      <ul>
        {video.comments.map((c) => (
          <li key={c.id}>
            <strong>{c.user}:</strong> {c.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;