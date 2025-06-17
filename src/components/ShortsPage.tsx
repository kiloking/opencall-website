import { Dot, ExternalLink } from "lucide-react";
import { useState } from "react";
import ReactPlayer from "react-player";

const ShortsPage = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };
  const step1_2 = [
    {
      title: "主題 (15%)",
      desc: "記憶點與感染力",
    },
    {
      title: "內容 (30%)",
      desc: "敘事能力與完整度",
    },
    {
      title: "創意 (15%)",
      desc: "原創性與創意傳達",
    },
    {
      title: "情感共鳴與影響力 (10%)",
      desc: "作品情感的說服力與感染力",
    },
    {
      title: "嘉義市元素的深度 (30%)",
      desc: "場景、人物、故事等",
    },
  ];
  return (
    <div className=" ">
      {/* 徵件宗旨 Section */}
      <section className="mb-16 mt-8">
        <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
          徵件宗旨
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-around gap-3">
          <div className="relative md:w-[60%] ">
            <div className=" pt-[56.25%] relative ">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=9y3QTGa34XA"
                className=" absolute top-0 left-0 w-full h-full "
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 pl-4">
            <p className="text-gray-300 leading-relaxed">
              廣邀全台對短片創作充滿熱情的影像工作者踴躍參與！無論是展現獨特的個人風格、描繪嘉義市在地風貌，或從多元視角探索不同主題，只要能以動人且具吸引力的影片，讓觀眾透過影像感受嘉義市深厚的文化底蘊，我們都熱烈歡迎。
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              PHAH嘉義短片徵件強調{" "}
              <span className="font-bold text-[#30E2DD]">
                「先企劃，後拍攝」，因此提案報名階段無需提交完整影片!
                報名階段僅需回答4個問題，且具備明確的創意構想與執行計畫，並能於114年7月15日前完成一部12-30分鐘的成片
              </span>
              ，即具參與資格。入選提案將獲得協力資源，一同完成精彩作品。
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              PHAH嘉義，是臺語的「拍」，也是一種行動的開始，邀請您用鏡頭「拍」下嘉義的日常、風景、人物與故事，PHAH
              就是您與嘉義市對話的開端!
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
          歡迎全台對影像創作充滿熱情的朋友，以鏡頭主動發掘或創造嘉義市的文化風貌、職人精神、地方社區故事與特色活動紀實。無論是人文風情、創業歷程、地方職人、自然景觀、地標建築，或是日常生活的精彩片段，皆鼓勵運用視覺創意與敘事張力，呈現嘉義市的獨特意象與文化內涵，訴說屬於嘉義市的精彩篇章。
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
          ].map((item, index) => (
            <div
              key={item.title}
              className="relative aspect-video group cursor-pointer perspective-1000"
              onClick={() => handleCardClick(index)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  flippedIndex === index ? "rotate-y-180" : ""
                } group-hover:rotate-y-180`}
              >
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
                  className="absolute w-full h-full text-lg p-4 overflow-auto rotate-y-180 backface-hidden text-white"
                  style={{
                    backgroundImage: `url(https://web.forestdev.work/chiayi/opencall/imgbg01.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h3 className="text-2xl font-bold mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-left whitespace-pre-wrap leading-6">
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
        <div className=" rounded-full bg-[#FBB03B] flex items-center justify-center text-black gap-2 w-[80%] md:w-[30%] mx-auto mb-4 md:mb-0 ">
          <div className="w-12 h-12  flex items-center justify-center">
            <img
              src="https://web.forestdev.work/chiayi/opencall/s2_icon01.svg"
              alt="先審查，後拍攝"
            />
          </div>
          <div className=" text-lg font-bold ">「先企劃，後拍攝」</div>
        </div>
        <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
          報名流程
        </h2>
        <div className="flex flex-col gap-10 mb-10">
          <div className="flex flex-col md:flex-row items-start gap-4 ">
            <div className="w-full md:w-[60%] pr-[10%]">
              <div className="font-bold rounded-full bg-[#30E2DD] text-black p-2 px-4 w-25 mb-2 flex justify-center items-center">
                報名組別
              </div>
              <div className=" inline-block">
                分為{" "}
                <span className="text-[#30E2DD]">「學生組」或「社會組」</span>
                二擇一，皆採{" "}
                <a
                  href="https://docs.google.com/forms/d/1HsD8Sp3s3c46_NuGr4-LURbJonFmCmEcJRh8fqhowBU/edit"
                  className="text-[#30E2DD] hover:text-cyan-300  items-center gap-1 inline-flex"
                >
                  <ExternalLink size={16} /> 網路報名。
                </a>
                <br />
                (每人限報一組別)
              </div>
            </div>
            <div className="w-full md:w-1/2 flex gap-12">
              <div>
                <img
                  src="https://web.forestdev.work/chiayi/opencall/r01.png"
                  alt="group"
                />
              </div>
              <div>
                <img
                  src="https://web.forestdev.work/chiayi/opencall/r02.png"
                  alt="group"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4 mt-4 b">
            <div className="w-full md:w-[60%]  pr-[10%]">
              <div className="font-bold rounded-full bg-[#30E2DD] text-black p-2 px-4 w-25 mb-2 flex justify-center items-center">
                報名人數
              </div>
              <div>
                分為 報名可採
                <span className="text-[#30E2DD]">「個人」或「團隊」</span>
                報名，團隊人數至多 3
                人，每人/隊限繳交作品乙式，重覆投稿者，以第一次投稿作品為準。
                <br />
                團隊報名需以指派代表人作為聯絡窗口。
              </div>
            </div>
            <div className="w-full md:w-1/2 flex gap-12">
              <div>
                <img
                  src="https://web.forestdev.work/chiayi/opencall/r03.png"
                  alt="group"
                />
              </div>
              <div>
                <img
                  src="https://web.forestdev.work/chiayi/opencall/r04.png"
                  alt="group"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800/80 py-2 text-center mb-8 tracking-wider">
          評分標準
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-evenly items-center">
          <div className="flex flex-col gap-8 w-full md:w-1/2">
            {step1_2.map((item) => (
              <div key={item.title}>
                <div className="text-base text-[#30E2DD] flex items-center ">
                  <Dot size={26} />
                  {item.title}
                </div>
                <div className="pl-6">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <img
              src="https://web.forestdev.work/chiayi/opencall/chart01.png"
              alt="評分標準"
            />
          </div>
        </div>
        <div className="bg-gray-800/80 py-2 text-center mt-8 mb-8 tracking-wider font-bold flex items-center justify-center gap-2 px-4">
          <div>監製名單</div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-start items-center  w-10/12 mx-auto my-6">
          <div className=" rounded-full text-zinc-800 bg-sky-400 py-2 px-4 whitespace-nowrap font-bold">
            協力監製
          </div>
          <div className="leading-6">
            每組入選者將配選一位監製，透過線上或線下方式協助控管進度、解決問題，確保最終完整的
            12 分鐘影片可以順利完成，並達到最佳呈現效果。
          </div>
        </div>
        <div className="w-12/12 mx-auto my-6">
          <img
            src="https://web.forestdev.work/chiayi/opencall/master2.png"
            alt="監製名單"
          />
        </div>
      </section>
    </div>
  );
};

export default ShortsPage;
