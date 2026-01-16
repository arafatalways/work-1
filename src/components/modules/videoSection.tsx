import { Play, Clock, Share2, Heart } from "lucide-react";

const VideoEditorSection = () => {
  const videoData = [
    {
      id: 1,
      title: "Cinematic City Night",
      duration: "00:45",
      // সরাসরি কাজ করবে এমন ভিডিও লিঙ্ক
      videoUrl: "https://assets.mixkit.co",
      category: "Cinematic",
    },
    {
      id: 2,
      title: "Abstract Liquid Motion",
      duration: "01:20",
      videoUrl: "https://assets.mixkit.co",
      category: "Motion Art",
    },
    {
      id: 3,
      title: "Nature Forest Stream",
      duration: "03:15",
      videoUrl: "https://assets.mixkit.co",
      category: "Nature",
    },
  ];

  return (
    <section className={`py-20 px-6 transition-all duration-500`}>
      {/* 1. Top Center Text Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h4 className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">
          Professional Editor
        </h4>
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Elevate Your{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">
            Visual Stories
          </span>
        </h1>
        <p className={`text-lg md:text-xl max-w-2xl mx-auto font-medium`}>
          A powerful video section designed for seamless editing and premium
          viewing experience across all your devices.
        </p>
      </div>

      {/* 2. Video Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {videoData.map((video) => (
          <div
            key={video.id}
            className={`group relative rounded-[2.5rem] overflow-hidden border transition-transform duration-500 hover:-translate-y-3`}
          >
            {/* Video Player Area */}
            <div className="relative aspect-video overflow-hidden bg-black">
              <video
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                muted
                loop
                playsInline
                onMouseOver={(e) => e.currentTarget.play()}
                onMouseOut={(e) => e.currentTarget.pause()}
              >
                <source src={video.videoUrl} type="video/mp4" />
              </video>

              {/* Overlay (Hidden on Hover) */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-xl p-5 rounded-full border border-white/30">
                  <Play className="text-white fill-white" size={32} />
                </div>
              </div>

              {/* Duration Tag */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Clock size={14} className="text-blue-400" />
                {video.duration}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8">
              <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">
                {video.category}
              </span>
              <h3
                className={`text-xl font-bold mt-2 mb-4 group-hover:text-blue-500 transition-colors`}
              >
                {video.title}
              </h3>

              <div
                className={`h-px w-full mb-6 
                   "bg-gray-800" : "bg-gray-100"
                `}
              ></div>

              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <button className={` hover:text-red-500 transition-colors`}>
                    <Heart size={20} />
                  </button>
                  <button className={` hover:text-blue-500 transition-colors`}>
                    <Share2 size={20} />
                  </button>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-blue-500/30 transition-all active:scale-95">
                  Edit Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoEditorSection;
