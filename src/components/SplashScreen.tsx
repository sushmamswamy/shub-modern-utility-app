
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

const SplashScreen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary/90 to-secondary/90 animate-fade-in">
      <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20">
        <h1 className="text-4xl font-bold text-white mb-4 animate-slide-up">
          Welcome
        </h1>
        <div className="space-y-2">
          <p className="text-2xl text-white opacity-90 animate-slide-up animation-delay-200">
            Sushma
          </p>
          <p className="text-2xl text-white opacity-90 animate-slide-up animation-delay-300">
            and
          </p>
          <p className="text-2xl text-white opacity-90 animate-slide-up animation-delay-400">
            Shreyas
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SplashScreen;
