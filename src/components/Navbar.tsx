import { MoveRight, ScrollText } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "首頁", path: "/" },
  { name: "嘉義短片獎", path: "/about" },
  { name: "徵件流程", path: "/flow" },
  { name: "報名方式", path: "/register" },
  { name: "製作費補助", path: "/funding" },
  { name: "時間流程", path: "/timeline" },
  { name: "常見Q&A", path: "/faq" },
  { name: "聯絡我們", path: "/contact" },
];

function Navbar() {
  const [activeTab, setActiveTab] = useState("嘉義短片獎");
  const location = useLocation();

  // 根據當前路徑設置活動標籤
  useEffect(() => {
    const path = location.pathname;
    const currentItem = navItems.find((item) => item.path === path);
    if (currentItem) {
      setActiveTab(currentItem.name);
    }
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-full bg-white/10 z-50 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img
            src="https://web.forestdev.work/chiayi/opencall/logo.svg"
            alt=""
            className="w-[120px]"
          />
        </div>
        <div className="flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-4 relative hover:text-[#30E2DD] transition-colors
                ${
                  activeTab === item.name
                    ? " bg-gradient-to-t from-[#30E2DD] to-[#30E2DD00] "
                    : "text-white"
                }
              `}
              onClick={() => setActiveTab(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex ">
            <div className=" items-center text-white text-xs bg-gradient-to-r from-[#51c3f1] to-[#f77f58]  rounded-lg py-1 px-2 gap-1 bounce hidden md:flex ">
              儘速報名 <MoveRight />
            </div>
          </div>
          <button className="bg-[#30E2DD] text-black px-6 py-2 rounded-md flex items-center">
            <ScrollText className="mr-2" />
            報名專區
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
