function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl mb-8 border-l-4 border-cyan-400 pl-4 flex items-center">
        <span className="text-cyan-400 mr-2">|</span> 聯絡我們
      </h1>
      <div className="bg-gray-900 p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl mb-6 text-cyan-400">聯絡資訊</h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <div className="font-medium">電話</div>
                  <div>0966-880-270</div>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <div className="font-medium">電子郵件</div>
                  <div>chiayifilmstudio@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <div className="font-medium">地址</div>
                  <div>嘉義市西區北興街460號</div>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <div className="font-medium">辦公時間</div>
                  <div>週六至週日 13:30-17:00</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl mb-6 text-cyan-400">指導單位</h2>
              <h2 className="text-xl mb-6 text-cyan-400">主辦單位</h2>
              <h2 className="text-xl mb-6 text-cyan-400">執行單位</h2>
            </div>
          </div>

          <div>
            <h2 className="text-xl mb-6 text-cyan-400">聯絡表單</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">姓名</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="請輸入您的姓名"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">電子郵件</label>
                <input
                  type="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="請輸入您的電子郵件"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">主旨</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="請輸入主旨"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">訊息內容</label>
                <textarea
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 h-32"
                  placeholder="請輸入您的訊息內容"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-cyan-400 text-black px-6 py-2 rounded-md hover:bg-cyan-300 transition-colors"
              >
                送出訊息
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl mb-6 text-cyan-400">位置地圖</h2>
          <div className="bg-gray-800 h-80 rounded-lg flex items-center justify-center">
            {/* 這裡可以嵌入 Google Maps 或其他地圖服務 */}
            <div className="text-gray-400">地圖載入中...</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
