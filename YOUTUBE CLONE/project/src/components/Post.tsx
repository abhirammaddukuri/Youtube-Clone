import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

interface PostProps {
  username: string;
  userImage: string;
  image: string;
  caption: string;
  likes: number;
}

export function Post({ username, userImage, image, caption, likes }: PostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-6">
      <div className="flex items-center p-4">
        <img
          src={userImage}
          alt={username}
          className="h-8 w-8 rounded-full mr-3"
        />
        <span className="font-semibold">{username}</span>
      </div>

      <img src={image} alt="Post" className="w-full" />

      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-4">
            <Heart
              onClick={handleLike}
              className={`h-6 w-6 cursor-pointer hover:scale-110 transition-transform ${
                isLiked ? 'fill-red-500 stroke-red-500' : ''
              }`}
            />
            <MessageCircle className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform" />
            <Share2 className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform" />
          </div>
          <Bookmark className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform" />
        </div>

        <div className="font-semibold mb-2">{likesCount.toLocaleString()} likes</div>
        <div>
          <span className="font-semibold mr-2">{username}</span>
          {caption}
        </div>
      </div>
    </div>
  );
}