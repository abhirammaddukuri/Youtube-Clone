import React from 'react';
import { Post } from './Post';

const POSTS = [
  {
    id: 1,
    username: 'john_doe',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?w=1080&h=1080&fit=crop',
    caption: 'Beautiful sunset at the beach! 🌅 #sunset #beach #vacation',
    likes: 1234
  },
  {
    id: 2,
    username: 'sarah_parker',
    userImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1080&h=1080&fit=crop',
    caption: 'Homemade pasta for dinner tonight! 🍝 #foodie #homecooking',
    likes: 2345
  }
];

export function Feed() {
  return (
    <div className="max-w-xl mx-auto">
      {POSTS.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}