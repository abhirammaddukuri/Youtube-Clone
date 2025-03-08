import React from 'react';
import { Story } from './Story';

const STORIES = [
  {
    username: 'your_story',
    imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop'
  },
  {
    username: 'john_doe',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    username: 'jane_smith',
    imageUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop'
  },
  {
    username: 'alex_wilson',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  },
  {
    username: 'sarah_parker',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop'
  }
];

export function Stories() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {STORIES.map((story) => (
          <Story key={story.username} {...story} />
        ))}
      </div>
    </div>
  );
}