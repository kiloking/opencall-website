function AboutPage() {
  return (
    <div className=" ">
      {/* 微件宗旨 Section */}
      <section className="mb-16 mt-8">
        <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
          微件宗旨
        </h2>
        <div className="flex">
          <div className="w-1/2">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-black"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-8">
            <p className="text-gray-300 leading-relaxed">
              廣邀全台灣願意投入拍攝短片者，無論是傳達個人影片精神、大嘉義在地場域或其各領域之面向，拍出充分吸睛、打動人心之影片，讓各地民眾從影像中看見嘉義豐富之文化內涵。
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              提案報名無須提供完整影片，只要有想法與做法即可參與，接續協力產製一起完成。
            </p>
          </div>
        </div>
      </section>

      {/* 微件主題 Section */}
      <section className="mb-16">
        <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
          微件主題
        </h2>
        <div className="text-gray-300 leading-relaxed mb-8">
          鼓勵全台灣對影視有興趣朋友，主動發現或創造嘉義市文化生活、職人精神、地方社區故事或特色活動紀實等故事內容（例如:人文風情、創業故事、地方職人、自然景觀、地標建築、生活現場等故事），希望全國朋友能盡情發揮視覺創意及創作能量，呈現出大嘉義的地方意象及文化意涵等為軸象，促進地方文化旅遊的發展，「重新認識地方」，說出地方的好故事影片。
        </div>
        <div className="text-gray-300 leading-relaxed mb-8">
          影片必須含有「<span className="text-[#30E2DD]">嘉義市境內</span>
          」元素，如嘉義市拍攝場景或以嘉義市意象取材之影像創作作品，以突顯嘉義市在地特色，呈現嘉義市多元議題之影像作品，均為喜聞樂見的對象。
        </div>

        <div className="bg-gray-800/80 py-2 text-center mb-8 tracking-wider">
          創作方向(參考但不限於以下範疇)
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            {
              title: "人文風情",
              img: "p01.png",
              description:
                "捕捉嘉義市獨特的人文風情，例如：歷史古蹟（嘉義舊監獄、城隍廟）、民俗文化（嘉義香花迎媽祖、嘉義布袋戲）、宗教信仰、木都等，展現嘉義市豐富的文化底蘊。此外，可關注「嘉義有事青年」活動中呈現的青年文化、多元議題討論，以及在地社群對嘉義人文特色的創新詮釋。",
            },
            {
              title: "地標建築",
              img: "p02.png",
              description:
                "嘉義市擁有許多特色地標建築，如嘉義火車站、嘉義市立美術館、北門車站、檜意森活村等。透過影像記錄這些建築的獨特風貌、歷史意義或現代轉型，展現嘉義市的城市記憶與發展脈絡。",
            },
            {
              title: "生活現場",
              img: "p03.png",
              description:
                "記錄嘉義市民的日常生活場景，如文化路夜市、嘉義市場、社區活動等。透過影像捕捉市民生活的點滴，展現嘉義市的市井風情與生活態度，呈現最真實的嘉義樣貌。",
            },
            {
              title: "自然景觀",
              img: "p04.png",
              description:
                "嘉義市雖為都市區域，但仍有豐富的自然景觀，如蘭潭水庫、嘉義公園等。透過影像記錄這些自然環境與城市的共存關係，展現嘉義市的生態多樣性與環境永續發展的努力。",
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
                  <p className="text-center">{item.description}</p>
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
