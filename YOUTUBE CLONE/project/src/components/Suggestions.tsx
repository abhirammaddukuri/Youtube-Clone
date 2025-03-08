import React from 'react';

const SUGGESTIONS = [
  {
    username: 'emma_wilson',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop',
    subtitle: 'Followed by alex + 2 more'
  },
  {
    username: 'michael_brown',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    subtitle: 'Followed by sarah + 3 more'
  },
  {
    username: 'sophia_lee',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    subtitle: 'New to Instagram'
  }
];

export function Suggestions() {
  return (
    <div className="mt-4">
      <div className="flex justify-between mb-4">
        <span className="text-gray-500 font-semibold">Suggestions For You</span>
        <button className="text-sm font-semibold">See All</button>
      </div>
      
      {SUGGESTIONS.map((suggestion) => (
        <div key={suggestion.username} className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <img
              src={suggestion.image}
              alt={suggestion.username}
              className="h-8 w-8 rounded-full mr-3"
            />
            <div>
              <div className="text-sm font-semibold">{suggestion.username}</div>
              <div className="text-xs text-gray-500">{suggestion.subtitle}</div>
            </div>
          </div>
          <button className="text-xs font-semibold text-blue-500">Follow</button>
        </div>
      ))}
    </div>
  );
}