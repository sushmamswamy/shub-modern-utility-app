
import { Home, Calculator, Heart, DollarSign, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Calculator, label: "Calculator", path: "/calculator" },
    { icon: Heart, label: "Health", path: "/health" },
    { icon: DollarSign, label: "Currency", path: "/currency" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                isActive
                  ? "text-primary"
                  : "text-gray-600 dark:text-gray-400 hover:text-primary"
              }`}
            >
              <Icon size={20} />
              <span className="text-xs">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
