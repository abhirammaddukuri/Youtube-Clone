import React from 'react';
import { Home, Compass, Clock, ThumbsUp, PlaySquare, Film, Gamepad, Newspaper, Trophy, Flame } from 'lucide-react';

const MENU_ITEMS = [
  { icon: Home, label: 'Home' },
  { icon: Compass, label: 'Explore' },
  { icon: PlaySquare, label: 'Shorts' },
  { icon: Film, label: 'Subscriptions' },
  { icon: Clock, label: 'History' },
  { icon: ThumbsUp, label: 'Liked' },
  { icon: Gamepad, label: 'Gaming' },
  { icon: Newspaper, label: 'News' },
  { icon: Trophy, label: 'Sports' },
  { icon: Flame, label: 'Trending' },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-14 w-[72px] h-screen bg-[#0f0f0f] z-40 pb-4">
      <div className="flex flex-col items-center pt-4">
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className="w-full flex flex-col items-center py-4 px-1 text-white hover:bg-[#272727]"
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-[10px]">{item.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}