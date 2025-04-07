import ReactPlayer from "react-player";

function AboutPage() {
  return (
    <div className=" ">
      {/* 徵件宗旨 Section */}
      <section className="mb-16 mt-8">
        <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
          徵件宗旨
        </h2>
        <div className="flex md:flex-row items-center justify-around gap-3">
          <div className="relative w-[60%] ">
            <div className=" pt-[56.25%] relative ">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=cYvGpqvHz7o"
                className=" absolute top-0 left-0 w-full h-full "
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 pl-4">
            <p className="text-gray-300 leading-relaxed">
              廣邀全台對短片創作充滿熱情的影像工作者，不論是展現個人影像風格、呈現嘉義的在地場域，或探索各領域的多元視角，皆歡迎以動人且具吸引力的影片，讓觀眾透過影像感受嘉義豐厚的文化底蘊。
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              提案報名無需提交完整影片，只要具備明確的創意構想與執行計畫，114年7月完成至少12分鐘的成片，即可參與，後續將協力完成製作，共同打造精彩作品。
            </p>
          </div>
        </div>
      </section>

      {/* 徵件主題 Section */}
      <section className="mb-16">
        <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
          徵件主題
        </h2>
        <div className="text-gray-300 leading-relaxed mb-8">
          歡迎全台對影像創作充滿熱情的朋友，以鏡頭主動發掘或創造嘉義市的文化風貌、職人精神、地方社區故事與特色活動紀實。無論是人文風情、創業歷程、地方職人、自然景觀、地標建築，或是日常生活的精彩片段，皆鼓勵運用視覺創意與敘事張力，呈現嘉義的獨特意象與文化內涵，訴說屬於嘉義的精彩篇章。
        </div>
        <div className="text-gray-300 leading-relaxed mb-8">
          影片必須含有「<span className="text-[#30E2DD]">嘉義市境內</span>
          」元素，如嘉義市拍攝場景或以嘉義市意象取材之影像創作作品，以突顯嘉義市在地特色，呈現嘉義市多元議題之影像作品，均為喜聞樂見的對象。
        </div>

        <div className="bg-gray-800/80 py-2 text-center mb-8 tracking-wider font-bold">
          創作方向(參考但不限於以下範圍)
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            {
              title: "人文風情",
              img: "p01.jpg",
              description:
                "捕捉嘉義市獨特的人文風情，例如：歷史古蹟（嘉義舊監獄、城隍廟）、民俗文化（嘉義香花迎媽祖、嘉義布袋戲）、宗教信仰、木都等，展現嘉義市豐富的文化底蘊。",
            },
            {
              title: "地標建築",
              img: "p02.png",
              description:
                "取景嘉義市的知名地標，例如：東門派出所、嘉義鐵道藝術村、北門車站、文化公園、阿里山林業村與檜意森活村等，展現嘉義市的城市景觀與歷史特色。\n影像內容可融入因應社會需求而進行的地標活化或再利用案例，例如北門車站周邊的文創與餐飲空間。",
            },

            {
              title: "自然景觀",
              img: "p04.jpg",
              description:
                "取景紀錄嘉義市的自然美景，例如：蘭潭風景區、嘉義植物園、嘉義公園（含射日塔區域）、中央噴水圓環等，展現嘉義市自然與城市交融的風光。",
            },
            {
              title: "生活故事",
              img: "p03.jpg",
              description:
                "透過影像紀錄嘉義市的市井風情，從文化路夜市、傳統市場到社區活動，細膩呈現市民的生活樣貌與獨特態度。挖掘只有在地人熟知的私房角落，如隱藏版咖啡館、特色文創小店，或是嘉義人最愛的火雞肉飯早餐新風貌。\n此外，也關注「嘉義有事青年」計畫中的創業故事，探索青年如何結合地方文化、歷史與現代商業模式，打造獨具嘉義特色的品牌，展現這座城市的活力與創新。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="relative aspect-video group cursor-pointer perspective-1000"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                {/* 正面 */}
                <div className="absolute w-full h-full backface-hidden">
                  <img
                    src={`https://web.forestdev.work/chiayi/opencall/${item.img}`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <span className="absolute inset-0 flex items-center justify-center text-2xl font-medium">
                    {item.title}
                  </span>
                </div>

                {/* 背面 */}
                <div
                  className="absolute w-full h-full  text-lg p-4 overflow-auto rotate-y-180 backface-hidden text-white"
                  style={{
                    backgroundImage: `url(https://web.forestdev.work/chiayi/opencall/imgbg01.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h3 className="text-2xl font-bold mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-center whitespace-pre-wrap ">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 歷屆花絮 Section */}
      <section className="mb-16">
        <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
          歷屆花絮
        </h2>
        <div className="relative bg-gray-800 p-4">
          <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex justify-center gap-4">
            <div className="w-1/3">
              <img
                src="https://web.forestdev.work/chiayi/opencall/h01.png"
                alt="第一屆頒獎合照"
                className="w-full h-40 object-cover"
              />
              <p className="text-center mt-2">第一屆頒獎合照</p>
            </div>
            <div className="w-1/3">
              <img
                src="https://web.forestdev.work/chiayi/opencall/h02.png"
                alt="第一屆決選合照"
                className="w-full h-40 object-cover"
              />
              <p className="text-center mt-2">第一屆決選合照</p>
            </div>
            <div className="w-1/3">
              <img
                src="https://web.forestdev.work/chiayi/opencall/h03.png"
                alt="作品放映"
                className="w-full h-40 object-cover"
              />
              <p className="text-center mt-2">作品放映</p>
            </div>
          </div>

          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
