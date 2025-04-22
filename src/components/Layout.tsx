
import { ReactNode } from "react";
import BottomNav from "./BottomNav";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1 container mx-auto px-4 pb-20 pt-6">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
