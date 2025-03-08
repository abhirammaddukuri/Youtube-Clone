import React from 'react';

interface StoryProps {
  username: string;
  imageUrl: string;
}

export function Story({ username, imageUrl }: StoryProps) {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="bg-gradient-to-tr from-yellow-400 to-pink-600 p-0.5 rounded-full">
        <div className="bg-white p-0.5 rounded-full">
          <img
            src={imageUrl}
            alt={username}
            className="h-14 w-14 rounded-full cursor-pointer hover:scale-105 transition-transform"
          />
        </div>
      </div>
      <span className="text-xs text-gray-500">{username}</span>
    </div>
  );
}