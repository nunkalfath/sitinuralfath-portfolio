import { useEffect, useState } from "react";
import { ArrowLeft, Sprout, Sun, Droplet, Calendar, Compass, Wrench, Check } from "lucide-react";
import { GardenPost, GARDEN_POSTS } from "../data/postsData";

interface GardenPostDetailProps {
  postId: number;
  onBack: () => void;
  onNavigatePost: (id: number) => void;
  dark: boolean;
}

export default function GardenPostDetail({ postId, onBack, onNavigatePost, dark }: GardenPostDetailProps) {
  const post = GARDEN_POSTS.find(p => p.id === postId) || GARDEN_POSTS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  const relatedLogs = GARDEN_POSTS.filter(p => p.id !== post.id).slice(0, 2);

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Easy": return "#A9D18E";
      case "Medium": return "#F7B267";
      case "Hard": return "#D4183D";
      default: return "#A9D18E";
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${dark ? "bg-[#1C2333] text-[#E8EDF5]" : "bg-[#F0F8EB] text-[#3F4A5A]"}`}>
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 mb-8 text-sm font-semibold transition-all duration-300 hover:opacity-85"
          style={{ color: "#A9D18E" }}
        >
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Garden
        </button>

        {/* Garden Log Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span 
              className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
              style={{ background: "#A9D18E", color: "white" }}
            >
              {post.category}
            </span>
            <span className="text-xs" style={{ color: "#8A8FA8" }}>{post.date}</span>
          </div>

          <h1 
            className="text-3xl md:text-5xl font-bold leading-tight mt-1 mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: dark ? "#E8EDF5" : "#3F4A5A" }}
          >
            {post.title}
          </h1>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-sm max-h-[420px] bg-[#C5E2B2]">
            <img
              src={`https://images.unsplash.com/${post.img}?w=1200&h=600&fit=crop&auto=format`}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* Main Grid: Info + Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Facts Panel */}
          <div className="md:col-span-1 space-y-6">
            <div 
              className="p-6 rounded-2xl border shadow-sm"
              style={{ 
                background: dark ? "#242D42" : "white",
                borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(169,209,142,0.3)"
              }}
            >
              <h3 className="font-bold text-lg mb-4 font-playfair border-b pb-2 flex items-center gap-2" style={{ color: dark ? "#A9D18E" : "#3F4A5A" }}>
                <Sprout size={18} className="text-[#A9D18E]" /> Quick Facts
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold mb-1" style={{ color: "#8A8FA8" }}>
                    <Compass size={13} /> DIFFICULTY
                  </div>
                  <span 
                    className="px-2.5 py-0.5 rounded-full text-xs font-bold text-white inline-block"
                    style={{ background: getDifficultyColor(post.difficulty) }}
                  >
                    {post.difficulty}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold mb-1" style={{ color: "#8A8FA8" }}>
                    <Calendar size={13} /> BEST SEASON
                  </div>
                  <p className="font-medium">{post.season}</p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold mb-1" style={{ color: "#8A8FA8" }}>
                    <Sun size={13} /> SUNLIGHT
                  </div>
                  <p className="font-medium">{post.sunlight}</p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold mb-1" style={{ color: "#8A8FA8" }}>
                    <Droplet size={13} /> WATERING
                  </div>
                  <p className="font-medium">{post.watering}</p>
                </div>
              </div>
            </div>

            {/* Tools/Materials Needed */}
            <div 
              className="p-6 rounded-2xl border shadow-sm"
              style={{ 
                background: dark ? "#242D42" : "white",
                borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(169,209,142,0.3)"
              }}
            >
              <h3 className="font-bold text-lg mb-4 font-playfair border-b pb-2 flex items-center gap-2" style={{ color: dark ? "#A9D18E" : "#3F4A5A" }}>
                <Wrench size={16} className="text-[#A9D18E]" /> Tools Needed
              </h3>
              <ul className="space-y-2.5 text-sm">
                {post.tools.map((t, idx) => (
                  <li key={idx} className="flex items-center gap-2 opacity-90">
                    <Check size={14} className="text-[#A9D18E]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Guide Content */}
          <div className="md:col-span-2 text-lg leading-relaxed">
            {/* Summary */}
            <p className="font-medium text-xl mb-8 leading-relaxed opacity-95 border-l-4 pl-4" style={{ borderColor: "#A9D18E" }}>
              {post.summary}
            </p>

            {/* Content Body */}
            <div 
              className="markdown-body space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Related Garden Logs */}
            <div className="mt-12 border-t pt-8" style={{ borderColor: dark ? "rgba(255,255,255,0.1)" : "rgba(169,209,142,0.2)" }}>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-6" style={{ color: "#8A8FA8" }}>
                Other Homestead Logs
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedLogs.map(p => (
                  <div 
                    key={p.id}
                    onClick={() => onNavigatePost(p.id)}
                    className="rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 border hover:-translate-y-1"
                    style={{ 
                      background: dark ? "#242D42" : "white",
                      borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(63,74,90,0.08)"
                    }}
                  >
                    <div className="h-32 overflow-hidden bg-gray-200">
                      <img 
                        src={`https://images.unsplash.com/${p.img}?w=300&h=150&fit=crop&auto=format`} 
                        alt={p.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                    <div className="p-3">
                      <span className="text-[10px] font-semibold text-[#A9D18E] uppercase">{p.category}</span>
                      <h5 className="font-bold text-sm leading-tight mt-1 line-clamp-2 group-hover:text-[#A9D18E] transition-colors">
                        {p.title}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
