import { useEffect, useState } from "react";
import { ArrowLeft, Calendar, Clock, Share2, Copy, Check, Heart } from "lucide-react";
import { BlogPost, BLOG_POSTS } from "../data/postsData";

interface BlogPostDetailProps {
  postId: number;
  onBack: () => void;
  onNavigatePost: (id: number) => void;
  dark: boolean;
}

export default function BlogPostDetail({ postId, onBack, onNavigatePost, dark }: BlogPostDetailProps) {
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState(12);
  const [hasLiked, setHasLiked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const post = BLOG_POSTS.find(p => p.id === postId) || BLOG_POSTS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(l => l + 1);
      setHasLiked(true);
    } else {
      setLikes(l => l - 1);
      setHasLiked(false);
    }
  };

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${dark ? "bg-[#1C2333] text-[#E8EDF5]" : "bg-[#FFF8EF] text-[#3F4A5A]"}`}>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 z-50 transition-all duration-100" 
        style={{ width: `${scrollProgress}%`, background: "#8EC5FC" }} 
      />

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 mb-8 text-sm font-semibold transition-all duration-300 hover:opacity-80"
          style={{ color: "#8EC5FC" }}
        >
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Blog
        </button>

        {/* Article Header */}
        <header className="mb-10 text-center md:text-left">
          <span 
            className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 inline-block"
            style={{ background: "#8EC5FC", color: "white" }}
          >
            {post.category}
          </span>
          <h1 
            className="text-3xl md:text-5xl font-bold leading-tight mt-3 mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: dark ? "#FFF8EF" : "#3F4A5A" }}
          >
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm mb-8" style={{ color: "#8A8FA8" }}>
            <span className="flex items-center gap-1.5"><Calendar size={15} /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={15} /> {post.readTime} read</span>
            <span className="flex items-center gap-1.5"><Heart size={15} /> {likes} likes</span>
          </div>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-md max-h-[420px] bg-[#E8E0D5]">
            <img
              src={`https://images.unsplash.com/${post.img}?w=1200&h=600&fit=crop&auto=format`}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3 text-lg leading-relaxed">
            {/* Summary */}
            <p className="font-medium text-xl mb-8 leading-relaxed opacity-90 border-l-4 pl-4" style={{ borderColor: "#8EC5FC" }}>
              {post.summary}
            </p>

            {/* Rich Text Body */}
            <div 
              className="markdown-body space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                fontFamily: "'Poppins', sans-serif"
              }}
            />

            {/* Post Interaction */}
            <div className="border-t border-b py-6 my-10 flex items-center justify-between" style={{ borderColor: dark ? "rgba(255,255,255,0.1)" : "rgba(63,74,90,0.1)" }}>
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleLike} 
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 text-sm font-semibold ${
                    hasLiked 
                      ? "bg-red-500/10 border-red-500 text-red-500" 
                      : "border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <Heart size={16} fill={hasLiked ? "currentColor" : "none"} />
                  {hasLiked ? "Liked" : "Like"} ({likes})
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm font-semibold transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                  {copied ? "Link Copied!" : "Copy Link"}
                </button>
              </div>
            </div>

            {/* Author Profile */}
            <div 
              className="p-6 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-5 mb-12 border" 
              style={{ 
                background: dark ? "#242D42" : "#FFF8EF",
                borderColor: dark ? "rgba(255,255,255,0.1)" : "rgba(142,197,252,0.2)"
              }}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&auto=format" 
                  alt="Siti Nur Alfath" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-bold text-lg mb-1" style={{ color: "#8EC5FC" }}>Siti Nur Alfath</h4>
                <p className="text-xs mb-3 font-semibold" style={{ color: "#8A8FA8" }}>Physics Educator & UI/UX Developer</p>
                <p className="text-sm leading-relaxed opacity-80">
                  Physics educator turned UI/UX developer & homestead enthusiast. Passionate about coding interfaces, teaching science through visual storytelling, and growing vegetables in our backyard homestead.
                </p>
              </div>
            </div>
          </article>

          {/* Related/Sidebar (For large screen, otherwise stack) */}
          <aside className="lg:col-span-1 space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 border-b pb-2" style={{ color: "#8A8FA8" }}>
              Related Posts
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
              {relatedPosts.map(p => (
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
                    <span className="text-[10px] font-semibold text-[#8EC5FC] uppercase">{p.category}</span>
                    <h5 className="font-bold text-sm leading-tight mt-1 line-clamp-2 group-hover:text-[#8EC5FC] transition-colors">
                      {p.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
