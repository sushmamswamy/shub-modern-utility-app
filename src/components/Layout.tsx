
import { ReactNode } from "react";
import BottomNav from "./BottomNav";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-fuchsia-500/5 dark:from-violet-950 dark:via-purple-950 dark:to-fuchsia-950 font-['Space_Grotesk']">
      <main className="flex-1 container mx-auto px-4 pb-20 pt-6">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
