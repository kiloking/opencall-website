import ReactPlayer from "react-player";
import { FileDown } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "../components/ui/dialog";

const Education = () => {
  const imgs = [
    { image: "p01.jpg" },
    { image: "p02.jpg" },
    { image: "p03.jpg" },
    { image: "p04.jpg" },
    { image: "p05.jpg" },
    { image: "p06.jpg" },
  ];
  const v2imgs = [
    { image: "v2_01.jpg" },
    { image: "v2_02.jpg" },
    { image: "v3_03.jpg" },
  ];
  const v3imgs = [
    { image: "1.jpg" },
    { image: "2.jpg" },
    { image: "3.jpg" },
    { image: "4.jpg" },
    { image: "5.jpg" },
    { image: "6.jpg" },
    { image: "7.jpg" },
    { image: "8.jpg" },
    { image: "9.jpg" },
    { image: "10.jpg" },
    { image: "11.jpg" },
    { image: "12.jpg" },
    { image: "13.jpg" },
    { image: "14.jpg" },
    { image: "15.jpg" },
    { image: "16.jpg" },
    { image: "17.jpg" },
    { image: "18.jpg" },
    { image: "19.jpg" },
    { image: "20.jpg" },
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
                url="https://www.youtube.com/watch?v=m8xTmKw9rLo"
                className=" absolute top-0 left-0 w-full h-full "
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 pl-4">
            <p className="text-gray-300 leading-relaxed">
              【影視人才培育計畫】一同打造繽紛璀璨的影視作品!
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              透過導入影視音小班教學制，課程分成「入門班」和「進
              階班」，兼具系統性與實務性的課程設計，並藉由網羅全
              台各地具有實務經驗的業師蒞臨嘉義市進行實體教學，力
              求每位學員都能與業師產生交集，並聯集琢磨新點子。
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              課程完全「免費」外，學員還將享有豐厚的影視相關資源，
              因此不論您在各行各業，對於想要透過影像說故事有興趣
              者，都非常歡迎您報名，一同釀造蠢蠢欲動的影視作品。
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              #【免費】完整系列課程 <br />
              # 三金 (金馬、金鐘、金曲) 導演領軍 <br />
              # 選擇「入門」或「進階」小班教學 <br />#
              報名入選者，享有製作資金補助
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
            課程內容
          </h2>
          <a
            target="_blank"
            href={"https://web.forestdev.work/chiayi/0225.pdf"}
            className="flex items-center text-[#30E2DD]"
          >
            <span className="mr-2">【課表日期與內容師資】</span>
            <FileDown />
          </a>
          <div className="w-full flex justify-center mt-10 ">
            <Carousel className="w-full ">
              <CarouselContent>
                {v2imgs.map((img, index) => (
                  <CarouselItem
                    key={index}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={"https://web.forestdev.work/chiayi/" + img.image}
                      alt={`v2_${index + 1}`}
                      className="w-full  object-cover rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
      <section className="mb-16 mt-8">
        <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
          學員福利
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-around gap-3">
          <div className="relative md:w-[60%] ">
            <div className=" pt-[56.25%] relative ">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=mTBuib_3dhM"
                className=" absolute top-0 left-0 w-full h-full "
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 pl-4">
            <p className="text-gray-300 leading-relaxed">
              選修課增進實作技能
              入選者享有資金補助，入門班2,000元整，進階班5,000元 整
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              結業評選獎金與結業證書
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              優先享有業師諮詢的資源
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              優先免費借用攝影設備與剪接軟體
            </p>
          </div>
        </div>
      </section>
      <section className="mb-16 mt-8">
        <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
          紀實照片
        </h2>
        <div className=" leading-relaxed text-[#00fff7] mb-4">環境</div>
        <div className="w-full flex justify-center  ">
          <Carousel className="w-full ">
            <CarouselContent>
              {imgs.map((img, index) => (
                <CarouselItem key={index} className="basis-1/4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <img
                        src={"https://web.forestdev.work/chiayi/" + img.image}
                        alt={`p${index + 1}`}
                        className="w-full object-cover rounded-lg cursor-pointer"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-7xl flex items-center justify-center ">
                      <DialogTitle className="sr-only">{`p${
                        index + 1
                      }`}</DialogTitle>
                      <img
                        src={"https://web.forestdev.work/chiayi/" + img.image}
                        alt={`p${index + 1}`}
                        className="max-h-[96vh] w-full md:w-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <section className="mb-16 mt-8">
        <div className=" leading-relaxed text-[#00fff7] mb-4">課程紀錄</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {v3imgs.map((img, idx) => (
            <Dialog key={"v3img" + idx}>
              <DialogTrigger asChild>
                <img
                  src={
                    "https://web.forestdev.work/chiayi/opencall/pic/" +
                    img.image
                  }
                  alt={`v3_${idx + 1}`}
                  className="w-full object-cover rounded-lg cursor-pointer"
                />
              </DialogTrigger>
              <DialogContent className="max-w-7xl flex items-center justify-center ">
                <DialogTitle className="sr-only">{`v3_${idx + 1}`}</DialogTitle>
                <img
                  src={
                    "https://web.forestdev.work/chiayi/opencall/pic/" +
                    img.image
                  }
                  alt={`v3_${idx + 1}`}
                  className="max-h-[96v w-full md:w-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
