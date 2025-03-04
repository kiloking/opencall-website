import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 背景影片 */}
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
      >
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        您的瀏覽器不支持影片播放
      </video>

      {/* 覆蓋層 */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">嘉義短片獎</h1>
        <p className="text-xl mb-8 max-w-2xl text-center">
          發掘嘉義之美，透過影像說故事
        </p>
        <Link
          to="/about"
          className="bg-[#30E2DD] text-black px-8 py-3 rounded-md hover:bg-[#30E2DD]/80 transition-colors"
        >
          了解更多
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
