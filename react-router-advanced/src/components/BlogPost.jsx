import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is installed and imported

function BlogPost() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blog post data
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setPost(response.data); // Ensure no extra characters or syntax errors here
      } catch (err) {
        setError('Failed to fetch the post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Blog Post {postId}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default BlogPost;