import { useState, FormEvent, ChangeEvent } from "react";
import { Info } from "lucide-react";
import { toast } from "sonner";
function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const to = "chiayifilmstudio@gmail.com"; // 更改為您的收件信箱
    const subject = "【嘉映短片徵件】網站表單";
    const text = `\n姓名：${formData.name}\n電子信箱：${formData.email}\n主旨：${formData.subject}\n訊息內容：${formData.message}`;

    const sendData = {
      to: to,
      subject: subject,
      text: text,
    };

    try {
      const response = await fetch(
        "https://www.maizizi.vaserver.com/api/mail_api.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sendData),
        }
      );
      console.log(response.ok);
      if (response.ok) {
        setIsSending(false);
        console.log("表單已寄送成功。");
        toast("表單已寄送成功。", {
          position: "top-center",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setIsSending(false);
        toast("表單寄送失敗，請稍後再試。", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setIsSending(false);
      toast("表單寄送失敗，請稍後再試。", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
        聯絡我們
      </h2>
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
                  <div>0966-880-270(黃小姐)</div>
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
              <div className="flex items-start">
                <Info className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                <div>
                  <div className="font-medium">其他參考</div>
                  <div className="flex gap-2 flex-col mt-2">
                    <a
                      href="https://cabcy.chiayi.gov.tw/web/Cabcych/index"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      嘉義市政府文化局
                    </a>
                    <a
                      href="https://film.chiayi.gov.tw/"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      嘉義市協拍中心 | 場景簿
                    </a>
                    <a
                      href="https://youthsoullab.chiayi.gov.tw/"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      嘉義市有事青年實驗室
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl mb-6 text-cyan-400">聯絡表單</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-300 mb-2">姓名</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="請輸入您的姓名"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">電子郵件</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="請輸入您的電子郵件"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">主旨</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="請輸入主旨"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">訊息內容</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 h-32"
                  placeholder="請輸入您的訊息內容"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="bg-cyan-400 text-black px-6 py-2 rounded-md hover:bg-cyan-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? "寄送中..." : "送出訊息"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl mb-6 text-cyan-400">位置地圖</h2>
          <div className="bg-gray-800 h-80 rounded-lg flex items-center justify-center">
            {/* 這裡可以嵌入 Google Maps 或其他地圖服務 */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.211886541369!2d120.43275259999999!3d23.488876400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e97e447e8790d%3A0xeefdd10b33b77622!2z5ZiJ576p5biC5b2x6KaW6Z-z5Z-65Zyw!5e0!3m2!1szh-TW!2stw!4v1744104191509!5m2!1szh-TW!2stw"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-3  bg-white/90  p-6 rounded-lg   gap-10">
            <div className="items-center flex gap-4">
              <h2 className="text-base  text-cyan-800 whitespace-nowrap border-r-2 border-cyan-800 pr-2">
                指導單位
              </h2>
              <div className="flex justify-center w-full  ">
                <img
                  src="https://web.forestdev.work/chiayi/opencall/logo01.svg"
                  alt=""
                />
              </div>
            </div>
            <div className=" items-center flex gap-4  ">
              <h2 className="text-base  text-cyan-800 whitespace-nowrap border-r-2 border-cyan-800 pr-2">
                主辦單位
              </h2>
              <div className="flex justify-center w-full">
                <img
                  src="https://web.forestdev.work/chiayi/opencall/logo02.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="items-center flex gap-4">
              <h2 className="text-base  text-cyan-800 whitespace-nowrap border-r-2 border-cyan-800 pr-2">
                執行單位
              </h2>
              <div className="flex justify-center w-full ">
                <img
                  src="https://web.forestdev.work/chiayi/opencall/logo03.svg"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
