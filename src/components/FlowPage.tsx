import { Dot } from "lucide-react";
function FlowPage() {
  const step1 = [
    {
      title: "片名/片種",
      icon: "https://web.forestdev.work/chiayi/opencall/paper.svg",
      etc: "",
    },
    {
      title: "製作立意\n(500字內)",
      icon: "https://web.forestdev.work/chiayi/opencall/paper.svg",
      etc: "",
    },
    {
      title: "故事內容簡述\n(500字內)",
      icon: "https://web.forestdev.work/chiayi/opencall/paper.svg",
      etc: "",
    },
    {
      title: "人物介紹/腳本分鏡/場景設定\n(500字內)",
      icon: "https://web.forestdev.work/chiayi/opencall/paper.svg",
      etc: "",
    },
    {
      title: "嘉義元素說明\n推廣效益評估\n(500字內)",
      icon: "https://web.forestdev.work/chiayi/opencall/paper.svg",
      etc: "",
    },
    {
      title: "後續故事內容發展方向\n(500字內)",
      icon: "https://web.forestdev.work/chiayi/opencall/paper.svg",
      etc: "",
    },
    {
      title: "片花",
      icon: "https://web.forestdev.work/chiayi/opencall/paper_y.svg",
      etc: "選填",
    },
    {
      title: "其他補充/加分事項\n(可提供雲端連結)",
      icon: "https://web.forestdev.work/chiayi/opencall/paper_y.svg",
      etc: "選填",
    },
  ];
  const step1_2 = [
    {
      title: "主題 (15%)",
      desc: "傳達的核心思想或情感",
    },
    {
      title: "內容 (30%)",
      desc: "敘事能力與完整度",
    },
    {
      title: "創意 (10%)",
      desc: "原創性與創意傳達",
    },
    {
      title: "情感共鳴與影響力 (10%)",
      desc: "作品情感的說服力與感染力",
    },
    {
      title: "嘉義市元素-場景/人物/故事 (30%)",
      desc: "對嘉義文化特色的詮釋",
    },
  ];
  const step2 = [
    {
      title: "常態課20堂",
      icon: "https://web.forestdev.work/chiayi/opencall/icon02.svg",
    },
    {
      title: "選修課7堂",
      icon: "https://web.forestdev.work/chiayi/opencall/icon03.svg",
    },
    {
      title: "監製協力",
      icon: "https://web.forestdev.work/chiayi/opencall/icon04.svg",
    },
    {
      title: "影視音基地課表",
      icon: "https://web.forestdev.work/chiayi/opencall/icon05.svg",
    },
  ];
  const step3 = [
    {
      title:
        "以1920*1080(FHD)或以上avi/mov/mpg/wmv/mp4 (h264)格式，影片編輯軟體不限。",
      icon: "https://web.forestdev.work/chiayi/opencall/icon06.svg",
    },
    {
      title: "避免超出FHD 16:9 的通用安全框。",
      icon: "https://web.forestdev.work/chiayi/opencall/icon07.svg",
    },
    {
      title: "片長12-30分鐘，含片頭與片尾。",
      icon: "https://web.forestdev.work/chiayi/opencall/icon08.svg",
    },
    {
      title:
        "影片字幕或口白，以本國語言(國語或臺與)為宜，可搭配其他語言，並加註中文字幕。",
      icon: "https://web.forestdev.work/chiayi/opencall/icon09.svg",
    },
    {
      title: "行字幕字數盡量不要超過20個字，並以14個字數以內為佳。",
      icon: "https://web.forestdev.work/chiayi/opencall/icon10.svg",
    },
    {
      title:
        "字體大小請控制在50~70個畫素之間為佳，避免小於50個畫素影響易讀性。",
      icon: "https://web.forestdev.work/chiayi/opencall/icon11.svg",
    },
    {
      title: "收音必須使用外接或隱藏式麥克風收音，以保證聲軌品質。",
      icon: "https://web.forestdev.work/chiayi/opencall/icon12.svg",
    },
  ];

  return (
    <section className="mb-16 mt-8">
      <div className=" rounded-full bg-[#FBB03B] flex items-center justify-center text-black gap-2 w-[30%] mx-auto">
        <div className="w-12 h-12  flex items-center justify-center">
          <img
            src="https://web.forestdev.work/chiayi/opencall/s2_icon01.svg"
            alt="先審查，後拍攝"
          />
        </div>
        <div className=" text-lg ">「先審查，後拍攝」</div>
      </div>
      <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
        第 1 階段 : 企劃提案
      </h2>
      <div className="py-4">
        <div className="grid grid-cols-5 gap-4 ">
          {step1.map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src={item.icon} alt={item.title} />
              </div>
              <div
                className={` whitespace-pre-wrap text-center text-sm ${
                  item.etc ? "text-amber-500" : "text-white"
                }`}
              >
                {item.title}
              </div>
              <div className="text-sm text-black bg-amber-500  px-2 rounded-full">
                {item.etc}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-800/80 py-2 text-center mb-8 tracking-wider">
        評分標準
      </div>
      <div className="flex gap-4 justify-evenly items-center">
        <div className="flex flex-col gap-8 ">
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
        <div className="flex flex-col gap-4 w-1/2">
          <img
            src="https://web.forestdev.work/chiayi/opencall/chart01.png"
            alt="評分標準"
          />
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center w-8/12 mx-auto my-6">
        <div className=" rounded-full text-zinc-800 bg-zinc-500 py-2 px-4 whitespace-nowrap">
          初選審查
        </div>
        <div className="text-sm">
          由主辦單位邀集相關領域之專家、學者組成評審團，擇優選出入選者，學生組及社會組，
          <span className="text-[#30E2DD]">各5至7組，備取2組為限。</span>
        </div>
      </div>
      <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
        第 2 階段 : 協力產製
      </h2>
      <div className="grid grid-cols-4 gap-4 justify-center items-center w-12/12 mx-auto my-6">
        {step2.map((item) => (
          <div key={item.title} className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src={item.icon} alt={item.title} />
            </div>
            <div className="text-sm">{item.title}</div>
          </div>
        ))}
      </div>
      <div className="bg-gray-800/80 py-2 text-center mb-8 tracking-wider">
        監製名單
      </div>
      <div className="w-12/12 mx-auto my-6">
        <img
          src="https://web.forestdev.work/chiayi/opencall/master.png"
          alt="監製名單"
        />
      </div>
      <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
        第 3 階段 : 成果影片決選
      </h2>
      <div>
        邀請影視產業界、學者及專家組成評審委員會，進行最終決審，並於頒獎典禮上頒發獎金、獎狀與講座。
      </div>
      <div className="bg-gray-800/80 py-2 text-center mb-8 tracking-wider">
        繳交影片格式
      </div>
      <div className="grid grid-cols-2 gap-4 justify-center items-center w-12/12 mx-auto my-6">
        {step3.map((item) => (
          <div key={item.title} className="flex  items-center gap-4">
            <div className="w-[32%] flex items-center justify-center">
              <div className="w-14 h-14 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="max-w-full object-contain h-full"
                />
              </div>
            </div>

            <div className="text-sm w-[60%]">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FlowPage;
