import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "PHAH嘉義", path: "/about", active: true },
  { name: "影視發展補助", path: "/funding", active: false },
  { name: "MV補助拍攝", path: "/mv", active: false },
  { name: "影視人才培育學院", path: "/education", active: true },
  { name: "短片徵件", path: "/shorts", active: true },
  { name: "影視工作坊", path: "/workshop", active: false },
  { name: "聯絡我們", path: "/contact", active: false },
];

function Navbar() {
  const [activeTab, setActiveTab] = useState("PHAH嘉義");
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
      <div className="w-8/12 md:w-11/12 mx-auto flex justify-between items-center">
        <div className="text-xl md:text-base font-bold">
          <Link to="/">
            <img src="./images/logo.png" alt="logo" className="w-28 " />
          </Link>
        </div>

        {/* 手機版漢堡選單按鈕 */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* 桌面版選單 */}
        <div className="hidden md:flex text-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.active ? item.path : "/"}
              className={`px-2 py-4 relative hover:text-[#30E2DD] transition-colors whitespace-nowrap
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
        <div className="hidden md:flex gap-2 items-center"></div>

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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
