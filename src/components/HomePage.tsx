import ReactPlayer from "react-player";

function HomePage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 背景影片 */}
      <div className="absolute inset-0 scale-[1.1]">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Dg3quoxp8ds"
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          config={{
            youtube: {
              playerVars: {
                controls: 0,
                showinfo: 0,
                rel: 0,
                modestbranding: 1,
              },
            },
          }}
        />
      </div>

      {/* 覆蓋層 - 如果需要的話 */}
    </div>
  );
}

export default HomePage;
