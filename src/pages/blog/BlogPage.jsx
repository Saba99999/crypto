import React, { useState, useEffect } from 'react';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchedPosts = [
      { id: 1, title: 'Understanding Bitcoin', date: '2024-06-01', author: 'John Doe', content: 'Bitcoin is a decentralized digital currency...' },
      { id: 2, title: 'Ethereum: The World Computer', date: '2024-06-02', author: 'Jane Doe', content: 'Ethereum is a decentralized platform that runs smart contracts...' },
    ];
    setPosts(fetchedPosts);
  }, []);

  return (
    <div className="blog-container">
      {posts.map(post => (
        <div key={post.id} className="blog-post">
          <h2 className="blog-post-title">{post.title}</h2>
          <div className="blog-post-meta">
            <span>{post.date}</span> by <span>{post.author}</span>
          </div>
          <p className="blog-post-content">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
