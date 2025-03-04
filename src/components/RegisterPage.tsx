import { Dot } from "lucide-react";

function RegisterPage() {
  return (
    <section className="mb-16 mt-8">
      <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
        報名流程
      </h2>
      <div className="flex flex-col gap-10 mb-10">
        <div className="flex items-center gap-4">
          <div className="w-[60%] pr-[10%]">
            <div className="font-bold rounded-full bg-[#30E2DD] text-black p-2 px-4 w-25 mb-2 flex justify-center items-center">
              報名組別
            </div>
            <div>
              分為{" "}
              <span className="text-[#30E2DD]">「學生組」或「社會組」</span>
              二擇一，皆採網路報名。(每人限報一組別)
            </div>
          </div>
          <div className="w-1/2 flex gap-12">
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
        <div className="flex items-center gap-4">
          <div className="w-[60%]  pr-[10%]">
            <div className="font-bold rounded-full bg-[#30E2DD] text-black p-2 px-4 w-25 mb-2 flex justify-center items-center">
              報名人數
            </div>
            <div>
              分為 報名可採
              <span className="text-[#30E2DD]">「個人」或「團隊」</span>
              報名，團隊人數至多 3
              人，每人/隊限繳交作品乙式，重覆投稿者，以第一次投稿作品為準。團隊報名需以指派隊長代表報名。
            </div>
          </div>
          <div className="w-1/2 flex gap-12">
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
        <div className="flex  flex-col  gap-4">
          <div className="w-[100%]  ">
            <div className="font-bold rounded-full bg-[#30E2DD] text-black p-2 px-4 w-25 mb-2 flex justify-center items-center">
              提醒事項
            </div>
          </div>
          <div className="flex gap-10 mt-10">
            <div className="flex flex-col gap-4">
              <div className="w-1/2  mx-auto h-20">
                <img
                  src="https://web.forestdev.work/chiayi/opencall/r05.svg"
                  alt="group"
                />
              </div>
              <div>
                <span className="text-[#30E2DD]">
                  參賽者報名「學生組」，團隊報名皆需為學生
                </span>
                ，需附上目前就讀於中華民國經教育部核可立案之學校。
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-1/2 mx-auto h-20">
                <img
                  src="https://web.forestdev.work/chiayi/opencall/r06.svg"
                  alt="group"
                />
              </div>
              <div>
                <span className="text-[#30E2DD]">
                  社會組採團隊報名，允許有學生身份於團隊中
                </span>
                。學生身份不侷限報名學生組，亦可以報名社會組。
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
          報名資格
        </h2>
        <div className="flex items-center gap-2 mb-4">
          <Dot size={26} color="#30E2DD" />
          本徵件活動有興趣之民眾或團體，不限年齡、戶籍、國籍皆可報名參加。(嘉義市影視人才培育計畫學員亦可同時報名參加)
        </div>
        <div className="flex items-center gap-2">
          <Dot size={26} color="#30E2DD" />
          不限片種類型，包括但不限紀錄片、劇情片、實驗片、動畫片、VR等皆可以參加徵件。共同限制條件唯需具有嘉義市元素內容。
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
          入選須知
        </h2>
        <div className="flex items-center gap-2 mb-4">
          <Dot size={26} color="#30E2DD" />
          <div className="w-[90%]">
            若入圍者當中有未滿18歲之成員，需由法定代理人簽「未滿18歲參賽同意書」並繳交正本，未補繳者將喪失資格。
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Dot size={26} color="#30E2DD" />
          <div className="w-[90%]">
            經評選入選者，需同意簽屬20小時的免費監製及培育課程之切結書，並實際完成12-30分鐘成果影片，含片頭、片尾。
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Dot size={26} color="#30E2DD" />
          <div className="w-[90%]">
            該作品須未曾公開發表、未參選其他活動、未取得任何獎項及授權第三人使用。
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Dot size={26} color="#30E2DD" />
          <div className="w-[90%]">
            參加徵稿之作品禁止涉及色情、暴力、毀謗、人身攻擊、宗教議題、政治議題，禁止侵害他人隱私權或妨礙社會正當風俗及公共秩序作品或違反中華民國相關法令規定等情事。若有違反，除得獎者應自負法律責任外，主辦機關得取消其得獎資格，並追回其已領得之獎品。
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Dot size={26} color="#30E2DD" />
          <div className="w-[90%]">
            外籍人士敬請提供居留證或工作證影本，以利活動辦理。
          </div>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
          注意事項
        </h2>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 rounded-full bg-[#30E2DD] text-black flex justify-center items-center text-xs">
            1
          </div>
          <div className="w-[90%]">
            主辦機關及執行單位有權使用入選作品，進行公開播送公開傳輸、重製、出版或相關活動中為公開發表等利用行為，作為非商業性質行銷宣傳使用，不另致酬，參賽者並不得對主（承）辦單位行使著作人格權。
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#30E2DD] text-black flex justify-center items-center text-xs">
            2
          </div>
          <div className="w-[90%]">
            所有參賽作品或相關電腦後製軟體繪製彩色圖樣等特效或影像，禁止利用任何「生成式AI」形式等相關軟體進行影像製作，亦得運用非經授權或有版權之圖文資料，若經檢舉且執行單位確屬實，通報主辦單位核定後，依規定取消參賽或得獎資格。(詳如附件切結書)
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#30E2DD] text-black flex justify-center items-center text-xs ">
            3
          </div>
          <div className="w-[90%]">
            唯一開放可使用生成式 AI，僅限音樂與音效，可導入製作過程與作品呈現。
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#30E2DD] text-black flex justify-center items-center text-xs">
            4
          </div>
          <div className="w-[90%]">
            參賽者保證所有填寫或提送之資料內容屬實，並無偽造情事，亦或盜用任何第三人之資料，如有虛偽隱匿情事，將取消參賽資格，並追回獎金及獎狀。
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#30E2DD] text-black flex justify-center items-center text-xs">
            5
          </div>
          <div className="w-[90%]">
            主辦單位取得參賽者之個人資料，目的為辦理本活動相關評選作業之用，其蒐集、處理及利用參賽者個人資料應受個人資料保護法及相關法令之規範。本次活動所蒐集參賽者之個人資料(如報名表內文所列)，利用方式為網際網路、報紙等媒體公布得獎名單，包括姓名、得獎作品，利用期間為永久，利用地區不限，對象為主辦單位及主辦單位授權之第三人。
          </div>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 rounded-full bg-[#30E2DD] text-black flex justify-center items-center text-xs">
            6
          </div>
          <div className="w-[90%]">
            主辦單位有權視參加作品表現與評審名次以「從缺」、「不足額」或「增加得獎名額」辦理。
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#30E2DD] text-black flex justify-center items-center text-xs">
            7
          </div>
          <div className="w-[90%]">
            對本簡章內容及活動，主辦單位隨時保有一切解釋、補充說明、修改、暫停或取消一部或全部之權利。
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#30E2DD] text-black flex justify-center items-center text-xs">
            8
          </div>
          <div className="w-[90%]">
            得獎者倘為團體組，需由隊長作為代表，負責與主辦單位聯繫及獎金領取等事宜，獎金以電匯方式匯入指定匯款帳戶，並應寄回簽收領據。由得獎組別自行釐清分配獎金，與主辦單位無涉。
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#30E2DD] text-black flex justify-center items-center text-xs">
            9
          </div>
          <div className="w-[90%]">
            依稅法規定獎項價值超新臺幣20,000元者，主辦單位依法代得獎者扣繳
            10%稅額、國外人士代扣繳20%稅額。得獎者須附本人身分證明文件，以利執行單位後續申報所得稅作業。
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#30E2DD] text-black flex justify-center items-center text-xs">
            10
          </div>
          <div className="w-[90%]">
            主辦單位因故取消某參賽者之得獎資格後，主辦單位有權決定是否予以遞補，所有參賽者皆不得異議。
          </div>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 rounded-full bg-[#30E2DD] text-black flex justify-center items-center text-xs">
            11
          </div>
          <div className="w-[90%]">
            參賽作品有利用他人著作或權利時，參賽者應取得該著作之著作財產權人或權利人同意其著作或權利於參賽作品中-依創用CC（Creative
            Commons,
            creativecommons.org.tw）「姓名標示─非商業性─相同方式分享3.0臺灣版
            」授權條款授權，並提供主辦方非營利使用，範圍包括利用參賽作品（包括但不限音樂、相關海報與劇照、影片定格畫面、
            影片部分畫面）於國內外重製、散布、改作、發行、公開傳輸、播送及公開上映。
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#30E2DD] text-black flex justify-center items-center text-xs">
            12
          </div>
          <div className="w-[90%]">
            第一階段評選正取之個人或團隊，競賽期間若棄權或無法完成影片製作等情事，由主辦單位依錄取分數依序通知備取者遞補；評審結果未達評審認定標準者，主辦單位亦保留獎項從缺之權利。
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#30E2DD] text-black flex justify-center items-center text-xs">
            13
          </div>
          <div className="w-[90%]">
            主辦單位有權隨時修改本活動徵件辦法內容（包含但不限於投稿需知及評審作業），並公告於本活動網站內，不再另行通知個別參賽者。參賽者參加本活動即視為同意遵守本活動所有徵件規範，倘參賽者不願遵守本活動規範，主辦單位有權取消其參賽資格，參賽者不得異議。
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#30E2DD] text-black flex justify-center items-center text-xs">
            14
          </div>
          <div className="w-[90%]">
            得獎團隊皆須派員出席頒獎典禮活動，頒獎典禮日期將另行通知予得獎者。得獎者若無法出席，可指派人員代理出席，倘無派員代理出席者，視同放棄得獎資格。出席頒獎典禮活動，主辦單位無法提供原領薪資補償或誤餐費，請得獎團隊自行處理，尚請見諒。
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#30E2DD] text-black flex justify-center items-center text-xs">
            15
          </div>
          <div className="w-[90%]">
            頒獎典禮日期地點待定，主辦方將信件通知頒獎日。
          </div>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
          附件下載
        </h2>
        <div>
          <img
            src="https://web.forestdev.work/chiayi/opencall/r07.png"
            alt="group"
          />
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
