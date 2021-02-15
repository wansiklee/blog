import React, { useEffect, useRef } from 'react';

interface IPostCommentsProps {
}

const PostComments: React.FC<IPostCommentsProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const utterances = document.createElement('script');

    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo: 'wansiklee/blog',
      'issue-term': 'pathname',
      label: 'comment 😎',
      theme: 'github-light',
      crossOrigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    containerRef.current.appendChild(utterances);
  }, []);

  return <div ref={containerRef} />;
}

export default PostComments;