import { MoveRight, ScrollText, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "首頁", path: "/" },
  { name: "嘉映短片徵件", path: "/about" },
  { name: "徵件流程", path: "/flow" },
  { name: "報名方式", path: "/register" },
  { name: "製作費補助", path: "/funding" },
  { name: "時間流程", path: "/timeline" },
  { name: "常見Q&A", path: "/faq" },
  { name: "聯絡我們", path: "/contact" },
];

function Navbar() {
  const [activeTab, setActiveTab] = useState("嘉映短片徵件");
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className="w-11/12 md:w-10/12 mx-auto flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold">嘉映短片徵件</div>

        {/* 手機版漢堡選單按鈕 */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* 桌面版選單 */}
        <div className="hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-4 relative hover:text-[#30E2DD] transition-colors
                ${
                  activeTab === item.name
                    ? "bg-gradient-to-t from-[#30E2DD] to-[#30E2DD00]"
                    : "text-white"
                }
              `}
              onClick={() => setActiveTab(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* 桌面版按鈕 */}
        <div className="hidden md:flex gap-2 items-center">
          <div className="flex">
            <div className="items-center text-white text-xs bg-gradient-to-r from-[#51c3f1] to-[#f77f58] rounded-lg py-1 px-2 gap-1 bounce flex">
              儘速報名 <MoveRight />
            </div>
          </div>
          <a
            href="https://docs.google.com/forms/d/1HsD8Sp3s3c46_NuGr4-LURbJonFmCmEcJRh8fqhowBU/viewform?edit_requested=true"
            className="bg-[#30E2DD] text-black px-6 py-2 rounded-md flex items-center"
            target="_blank"
          >
            <ScrollText className="mr-2" />
            報名專區
          </a>
        </div>

        {/* 手機版選單 */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900/95 md:hidden">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-6 py-4 hover:bg-gray-800 ${
                    activeTab === item.name ? "text-[#30E2DD]" : "text-white"
                  }`}
                  onClick={() => {
                    setActiveTab(item.name);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://docs.google.com/forms/d/1HsD8Sp3s3c46_NuGr4-LURbJonFmCmEcJRh8fqhowBU/viewform?edit_requested=true"
                className="mx-4 my-4 bg-[#30E2DD] text-black px-6 py-2 rounded-md flex items-center justify-center"
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
              >
                <ScrollText className="mr-2" />
                報名專區
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
