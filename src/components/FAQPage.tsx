function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD] text-[#30E2DD] pl-4 flex items-center">
        常見Q&A
      </h2>
      <div className="bg-gray-900 p-8 rounded-lg">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl mb-3 flex items-center">
              <span className="text-cyan-400 mr-2">Q:</span>
              如果是嘉義縣的主題可以嗎？
            </h3>
            <p className="text-gray-300 pl-6">
              <span className="text-cyan-400 mr-2">A:</span>
              徵件的主題必須以「嘉義市境內」為拍攝場景或素材，呈現嘉義市的在地特色。
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 flex items-center">
              <span className="text-cyan-400 mr-2">Q:</span>
              可以同時報名「社會組」和「學生組」嗎？
            </h3>
            <p className="text-gray-300 pl-6">
              <span className="text-cyan-400 mr-2">A:</span>
              每位參賽者僅能選擇「學生組」或「社會組」，不得同時報名兩組。
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 flex items-center">
              <span className="text-cyan-400 mr-2">Q:</span>
              我是學生，也可以報名參與社會組嗎？
            </h3>
            <p className="text-gray-300 pl-6">
              <span className="text-cyan-400 mr-2">A:</span>
              學生可報名「社會組」，社會組允許有學生身份的成員加入團隊。
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 flex items-center">
              <span className="text-cyan-400 mr-2">Q:</span>
              如果未滿18歲，能夠參賽嗎？
            </h3>
            <p className="text-gray-300 pl-6">
              <span className="text-cyan-400 mr-2">A:</span>
              若您未滿18歲，必須提供法定代理人或監護人同意書，並由法定代理人或監護人簽署同意。
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 flex items-center">
              <span className="text-cyan-400 mr-2">Q:</span>
              影片的類型有限制嗎？
            </h3>
            <p className="text-gray-300 pl-6">
              <span className="text-cyan-400 mr-2">A:</span>
              影片類型不限，包括紀錄片、劇情片、實驗片、動畫片、VR等均可參加。唯一的限制是影片必須包含嘉義市的元素。
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 flex items-center">
              <span className="text-cyan-400 mr-2">Q:</span>
              如果是團體組，組內最多可以幾個人？
            </h3>
            <p className="text-gray-300 pl-6">
              <span className="text-cyan-400 mr-2">A:</span>
              團隊報名需由指派的代表人代表報名，團隊人數上限為3人。
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 flex items-center">
              <span className="text-cyan-400 mr-2">Q:</span>
              現在報名需要提交完整的影片嗎？
            </h3>
            <p className="text-gray-300 pl-6">
              <span className="text-cyan-400 mr-2">A:</span>
              不需要！徵件採用「先審查，後拍攝」制度。參賽者只需在報名時提交創意構想和執行計畫，第一階段無需提交完整影片。成片需於114年7月15日完成。
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 flex items-center">
              <span className="text-cyan-400 mr-2">Q:</span>
              最後要完成的影片長度是？
            </h3>
            <p className="text-gray-300 pl-6">
              <span className="text-cyan-400 mr-2">A:</span>
              影片長度須為12至30分鐘，包含片名及完整演職人員名單。
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 flex items-center">
              <span className="text-cyan-400 mr-2">Q:</span>
              已經完成的影片可以參與嗎？
            </h3>
            <p className="text-gray-300 pl-6">
              <span className="text-cyan-400 mr-2">A:</span>
              參賽作品須未曾公開發表、未參選其他活動、未取得任何獎項及授權第三人使用。
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 flex items-center">
              <span className="text-cyan-400 mr-2">Q:</span>
              入選團隊能獲得什麼資助？
            </h3>
            <p className="text-gray-300 pl-6">
              <span className="text-cyan-400 mr-2">A:</span>
              社會組可獲得新台幣20,000元的基本製作費資助，學生組則可獲得新台幣10,000元的基本製作費資助。入選作品將在7月再次進行決選，並頒發額外製作費。
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 flex items-center">
              <span className="text-cyan-400 mr-2">Q:</span>
              製作費什麼時候會發放？
            </h3>
            <p className="text-gray-300 pl-6">
              <span className="text-cyan-400 mr-2">A:</span>
              入選者於完成切結書簽署後，需在114年7月15日之前提交時長為12至30分鐘的成片作品，主辦單位將於此後發放製作費。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
