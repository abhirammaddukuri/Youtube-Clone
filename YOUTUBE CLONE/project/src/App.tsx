import React from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { VideoGrid } from './components/VideoGrid';

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-4 py-6 ml-[72px]">
          <div className="max-w-[2000px] mx-auto">
            <VideoGrid />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;