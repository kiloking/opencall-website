function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl mb-8 border-l-4 border-cyan-400 pl-4 flex items-center">
        <span className="text-cyan-400 mr-2">|</span> 常見Q&A
      </h1>
      <div className="bg-gray-900 p-8 rounded-lg">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl mb-3 flex items-center">
              <span className="text-cyan-400 mr-2">Q:</span>
              參賽資格有哪些限制？
            </h3>
            <p className="text-gray-300 pl-6">
              <span className="text-cyan-400 mr-2">A:</span>
              本競賽不限國籍、年齡、性別，對影像創作有興趣者皆可報名。可以個人或團體名義參加，團體報名請指定一名代表人。
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 flex items-center">
              <span className="text-cyan-400 mr-2">Q:</span>
              短片的長度有限制嗎？
            </h3>
            <p className="text-gray-300 pl-6">
              <span className="text-cyan-400 mr-2">A:</span>
              短片長度需在5-15分鐘之間，包含片頭和片尾。
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 flex items-center">
              <span className="text-cyan-400 mr-2">Q:</span>
              可以使用什麼格式提交作品？
            </h3>
            <p className="text-gray-300 pl-6">
              <span className="text-cyan-400 mr-2">A:</span>
              作品需以MP4格式提交，解析度至少為1920x1080 (Full HD)。
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 flex items-center">
              <span className="text-cyan-400 mr-2">Q:</span>
              是否可以使用過去已完成的作品參賽？
            </h3>
            <p className="text-gray-300 pl-6">
              <span className="text-cyan-400 mr-2">A:</span>
              不可以。參賽作品必須是為本次競賽全新創作的作品，不得使用過去已發表或參加其他競賽的作品。
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 flex items-center">
              <span className="text-cyan-400 mr-2">Q:</span>
              製作金如何發放？
            </h3>
            <p className="text-gray-300 pl-6">
              <span className="text-cyan-400 mr-2">A:</span>
              入選者將獲得製作金的50%作為前期製作費用，完成作品並通過審核後，發放剩餘50%製作金。
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 flex items-center">
              <span className="text-cyan-400 mr-2">Q:</span>
              作品的著作權歸屬？
            </h3>
            <p className="text-gray-300 pl-6">
              <span className="text-cyan-400 mr-2">A:</span>
              作品著作權歸創作者所有，但獲獎者需簽署授權合約，同意作品授權嘉義市政府進行非商業性質的推廣使用。
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 flex items-center">
              <span className="text-cyan-400 mr-2">Q:</span>
              拍攝地點必須在嘉義市嗎？
            </h3>
            <p className="text-gray-300 pl-6">
              <span className="text-cyan-400 mr-2">A:</span>
              是的，作品主要拍攝地點必須在嘉義市內，且必須包含嘉義市地標元素。
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 flex items-center">
              <span className="text-cyan-400 mr-2">Q:</span>
              如何取得拍攝許可？
            </h3>
            <p className="text-gray-300 pl-6">
              <span className="text-cyan-400 mr-2">A:</span>
              入選者可獲得嘉義市內拍攝場地協調與申請協助，但仍需遵守各場地的規定和限制。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
