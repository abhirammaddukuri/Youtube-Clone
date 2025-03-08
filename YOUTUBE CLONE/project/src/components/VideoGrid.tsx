import React from 'react';
import { VideoCard } from './VideoCard';

const VIDEOS = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=720&h=404&fit=crop',
    title: 'Building a Modern Web Application with React and TypeScript',
    channel: 'Tech Academy',
    channelImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    views: '120K',
    timestamp: '2 days ago'
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=720&h=404&fit=crop',
    title: 'A Day in the Life of a Software Engineer | Vlog',
    channel: 'Code Life',
    channelImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    views: '89K',
    timestamp: '5 days ago'
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=720&h=404&fit=crop',
    title: 'Top 10 Programming Languages to Learn in 2024',
    channel: 'Dev Insights',
    channelImage: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop',
    views: '250K',
    timestamp: '1 week ago'
  },
  {
    id: 4,
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=720&h=404&fit=crop',
    title: 'Web Development Crash Course 2024',
    channel: 'CodeMaster',
    channelImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    views: '180K',
    timestamp: '3 days ago'
  },
  {
    id: 5,
    thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=720&h=404&fit=crop',
    title: 'How to Build a Successful Tech Startup',
    channel: 'Startup Guide',
    channelImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    views: '95K',
    timestamp: '6 days ago'
  },
  {
    id: 6,
    thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=720&h=404&fit=crop',
    title: 'Machine Learning for Beginners',
    channel: 'AI Academy',
    channelImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop',
    views: '150K',
    timestamp: '4 days ago'
  }
];

export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {VIDEOS.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
}