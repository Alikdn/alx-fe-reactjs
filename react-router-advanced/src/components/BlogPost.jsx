import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();
  return <div>Blog Post Content for ID: {postId}</div>;
}

export default BlogPost;