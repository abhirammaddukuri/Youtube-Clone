import React from 'react';
import { MoreVertical } from 'lucide-react';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  channel: string;
  channelImage: string;
  views: string;
  timestamp: string;
}

export function VideoCard({ thumbnail, title, channel, channelImage, views, timestamp }: VideoCardProps) {
  return (
    <div className="cursor-pointer">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full aspect-video object-cover rounded-xl"
        />
      </div>
      <div className="flex mt-3">
        <img
          src={channelImage}
          alt={channel}
          className="h-9 w-9 rounded-full mr-3"
        />
        <div className="flex-1">
          <h3 className="text-white font-medium line-clamp-2">{title}</h3>
          <p className="text-[#AAAAAA] text-sm mt-1">{channel}</p>
          <div className="text-[#AAAAAA] text-sm">
            {views} views • {timestamp}
          </div>
        </div>
        <button className="p-1 hover:bg-[#272727] rounded-full h-8 w-8">
          <MoreVertical className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
}