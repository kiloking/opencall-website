import { ExternalLink } from "lucide-react";

function AboutPage() {
  return (
    <div className=" ">
      {/* 徵件宗旨 Section */}
      <section className="mb-16 mt-8">
        <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
          徵件宗旨
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-around gap-3">
          <div className="relative md:w-[60%] ">
            {/* <div className=" pt-[56.25%] relative ">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=cYvGpqvHz7o"
                className=" absolute top-0 left-0 w-full h-full "
                width="100%"
                height="100%"
              />
            </div> */}
            <img
              src="https://web.forestdev.work/chiayi/opencall/vi01.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 pl-4">
            <p className="text-gray-300 leading-relaxed">
              廣邀全台對短片創作充滿熱情的影像工作者踴躍參與！無論是展現獨特的個人風格、描繪嘉義市在地風貌，或從多元視角探索不同主題，只要能以動人且具吸引力的影片，讓觀眾透過影像感受嘉義市深厚的文化底蘊，我們都熱烈歡迎。
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              嘉映短片徵件強調{" "}
              <span className="font-bold text-[#30E2DD]">
                「先企劃，後拍攝」，因此提案報名階段無需提交完整影片!
              </span>{" "}
              僅需具備明確的創意構想與執行計畫，
              <span className="font-bold text-[#30E2DD]">
                只要能於114年7月15日前完成一部12-30分鐘的成片
              </span>
              ，即具參與資格。入選提案將獲得協力資源，一同完成精彩作品。
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              嘉映短片徵件：Roll！打磨嘉義這一場，期待與您將嘉義市的平凡，透過影像打磨成精彩，嘉義上鏡，故事開場!!
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
          影片必須含有「{" "}
          <span className="font-bold text-[#30E2DD]">嘉義市境內</span>
          」元素，{" "}
          <span className="font-bold text-[#30E2DD]">
            如嘉義市拍攝場景或以嘉義市意象取材之影像創作作品，以突顯嘉義市在地特色
          </span>
          ，呈現嘉義市多元議題之影像作品，均為喜聞樂見的對象。
        </div>

        <div className="bg-gray-800/80 py-2 text-center mb-8 tracking-wider font-bold">
          創作方向(參考但不限於以下範圍)
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "人文風情",
              img: "p01.jpg",
              description:
                "歷史古蹟：如嘉義舊監獄、嘉義城隍廟、鐵道倉庫、林業遺址等，映照城市歷史脈絡\n民俗文化：如嘉義香花迎媽祖、布袋戲、傳統工藝、在地慶典，展現在地文化的延續與活力\n宗教信仰：廟宇建築、美學風格、信眾活動與信仰傳承\n木都印象：探索嘉義作為木材重鎮的歷史記憶，從林業產業到木藝文化，體現城市獨有的文化象徵",
              sub: [
                {
                  title: "歷史古蹟",
                  desc: "如嘉義舊監獄、嘉義城隍廟、鐵道倉庫、林業遺址等，映照城市歷史脈絡",
                },
                {
                  title: "民俗文化",
                  desc: "如嘉義香花迎媽祖、布袋戲、傳統工藝、在地慶典，展現在地文化的延續與活力",
                },
                {
                  title: "宗教信仰",
                  desc: "廟宇建築、美學風格、信眾活動與信仰傳承",
                },
                {
                  title: "木都印象",
                  desc: "探索嘉義作為木材重鎮的歷史記憶，從林業產業到木藝文化，體現城市獨有的文化象徵",
                },
              ],
            },
            {
              title: "地標建築",
              img: "p02.png",
              description:
                "知名地標：如東門派出所、嘉義鐵道藝術村、北門車站、文化公園、阿里山林業村與檜意森活村等，皆為展現嘉義城市特色與歷史底蘊的重要場域\n地標活化與再利用案例：例如北門車站周邊結合文創、展演與餐飲空間的再生利用，反映嘉義在地文化與城市更新的實踐\n建築與人的互動：探索市民如何與地標共處，如何在這些場域中生活、工作與記憶",
              sub: [
                {
                  title: "知名地標",
                  desc: "如東門派出所、嘉義鐵道藝術村、北門車站、文化公園、阿里山林業村與檜意森活村等，皆為展現嘉義城市特色與歷史底蘊的重要場域",
                },
                {
                  title: "地標活化與再利用案例",
                  desc: "例如北門車站周邊結合文創、展演與餐飲空間的再生利用，反映嘉義在地文化與城市更新的實踐",
                },
                {
                  title: "建築與人的互動",
                  desc: "探索市民如何與地標共處，如何在這些場域中生活、工作與記憶",
                },
              ],
            },

            {
              title: "自然景觀",
              img: "p04.jpg",
              description:
                "蘭潭風景區：湖光山色、晨昏倒影，四季更迭中展現靜謐之美\n嘉義植物園與嘉義公園（含射日塔區域）：綠意環繞中的歷史與生活脈動，是市民休憩與活動的重要場域\n中央噴水圓環與市區綠帶：街景中的綠意與流動水景，體現城市空間的生命力與節奏感",
              sub: [
                {
                  title: "蘭潭風景區",
                  desc: "湖光山色、晨昏倒影，四季更迭中展現靜謐之美",
                },
                {
                  title: "嘉義植物園與嘉義公園（含射日塔區域）",
                  desc: "綠意環繞中的歷史與生活脈動，是市民休憩與活動的重要場域",
                },
                {
                  title: "中央噴水圓環與市區綠帶",
                  desc: "街景中的綠意與流動水景，體現城市空間的生命力與節奏感",
                },
              ],
            },
            {
              title: "生活故事",
              img: "p03.jpg",
              description:
                "城市日常風景：文化路夜市的熱鬧節奏、傳統市場的熟悉喧囂、市區街頭的庶民風景與社區活動現場；\n私房在地角落：如隱藏於巷弄間的老屋咖啡館、風格獨具的文創小店、融合創意與傳統的日常場景，以及嘉義人最愛的火雞肉飯早餐文化；\n青年創業故事：「嘉義有事青年」等青年返鄉創業案例，展現青年如何結合地方文化、歷史記憶與現代商業模式，打造屬於嘉義的品牌與生活風格；",
              sub: [
                {
                  title: "城市日常風景",
                  desc: "文化路夜市的熱鬧節奏、傳統市場的熟悉喧囂、市區街頭的庶民風景與社區活動現場",
                },
                {
                  title: "私房在地角落",
                  desc: "如隱藏於巷弄間的老屋咖啡館、風格獨具的文創小店、融合創意與傳統的日常場景，以及嘉義人最愛的火雞肉飯早餐文化",
                },
                {
                  title: "青年創業故事",
                  desc: "「嘉義有事青年」等青年返鄉創業案例，展現青年如何結合地方文化、歷史記憶與現代商業模式，打造屬於嘉義的品牌與生活風格",
                },
                {
                  title: "人與地方的關係",
                  desc: "透過人物故事、街頭互動、社區連結等視角，展現人如何在城市中生活、成長與實現夢想",
                },
              ],
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
                  <p className="text-left whitespace-pre-wrap leading-6  ">
                    {item.sub.map((sub) => (
                      <div key={sub.title} className="my-2">
                        <span className="font-bold text-white">
                          {sub.title}:
                        </span>
                        {sub.desc}
                      </div>
                    ))}
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
          {/* <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full">
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
          </button> */}

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <div className="w-full md:w-1/3">
              <img
                src="https://web.forestdev.work/chiayi/opencall/h01.png"
                alt="第一屆頒獎合照"
                className="w-full h-40 object-cover"
              />
              <p className="text-center mt-2">第一屆頒獎合照</p>
            </div>
            <div className="w-full md:w-1/3">
              <img
                src="https://web.forestdev.work/chiayi/opencall/h02.png"
                alt="第一屆決選合照"
                className="w-full h-40 object-cover"
              />
              <p className="text-center mt-2">第一屆決選合照</p>
            </div>
            <div className="w-full md:w-1/3">
              <img
                src="https://web.forestdev.work/chiayi/opencall/h03.png"
                alt="作品放映"
                className="w-full h-40 object-cover"
              />
              <p className="text-center mt-2">作品放映</p>
            </div>
          </div>

          {/* <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full">
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
          </button> */}
        </div>

        <button className="bg-[#30E2DD] text-black px-6 py-2 rounded-md flex items-center mx-auto mt-3">
          <a
            href="https://www.youtube.com/@%E5%98%89%E7%BE%A9%E5%B8%82%E5%BD%B1%E8%A6%96%E9%9F%B3%E5%B0%8F%E7%B5%84/videos"
            target="_blank"
            className="flex items-center gap-2"
          >
            第一屆嘉義市短片獎入圍作品
            <ExternalLink size={16} />
          </a>
        </button>
      </section>
    </div>
  );
}

export default AboutPage;
