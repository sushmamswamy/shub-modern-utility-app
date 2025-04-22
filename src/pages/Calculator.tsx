
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calculator as CalcIcon } from "lucide-react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");

  const handleNumber = (num: string) => {
    setDisplay(display === "0" ? num : display + num);
  };

  const handleOperator = (op: string) => {
    setEquation(display + " " + op + " ");
    setDisplay("0");
  };

  const calculate = () => {
    try {
      const result = eval(equation + display);
      setDisplay(result.toString());
      setEquation("");
    } catch (error) {
      setDisplay("Error");
    }
  };

  const clear = () => {
    setDisplay("0");
    setEquation("");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between animate-fade-in">
        <h1 className="text-3xl font-bold">Calculator</h1>
        <CalcIcon className="h-8 w-8 text-primary animate-pulse" />
      </div>
      <Card className="p-6 bg-gradient-to-br from-background to-secondary/5 backdrop-blur-sm border border-secondary/20 animate-scale-in">
        <div className="bg-black/5 dark:bg-white/5 p-6 rounded-lg mb-6 backdrop-blur-sm">
          <div className="text-sm text-gray-600 dark:text-gray-400 animate-slide-right">{equation}</div>
          <div className="text-4xl font-bold tracking-tighter animate-slide-left">{display}</div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <Button onClick={clear} variant="destructive" className="font-bold hover:scale-105 transition-transform">
            AC
          </Button>
          <Button onClick={() => handleOperator("+/-")} variant="outline" className="hover:scale-105 transition-transform">
            +/-
          </Button>
          <Button onClick={() => handleOperator("%")} variant="outline" className="hover:scale-105 transition-transform">
            %
          </Button>
          <Button onClick={() => handleOperator("/")} variant="secondary" className="hover:scale-105 transition-transform">
            /
          </Button>
          
          {[7, 8, 9].map((num) => (
            <Button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className="bg-primary/10 hover:bg-primary/20 text-primary-foreground hover:scale-105 transition-transform"
            >
              {num}
            </Button>
          ))}
          <Button onClick={() => handleOperator("*")} variant="secondary" className="hover:scale-105 transition-transform">
            ×
          </Button>
          
          {[4, 5, 6].map((num) => (
            <Button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className="bg-primary/10 hover:bg-primary/20 text-primary-foreground hover:scale-105 transition-transform"
            >
              {num}
            </Button>
          ))}
          <Button onClick={() => handleOperator("-")} variant="secondary" className="hover:scale-105 transition-transform">
            -
          </Button>
          
          {[1, 2, 3].map((num) => (
            <Button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className="bg-primary/10 hover:bg-primary/20 text-primary-foreground hover:scale-105 transition-transform"
            >
              {num}
            </Button>
          ))}
          <Button onClick={() => handleOperator("+")} variant="secondary" className="hover:scale-105 transition-transform">
            +
          </Button>
          
          <Button onClick={() => handleNumber("0")} className="col-span-2 bg-primary/10 hover:bg-primary/20 text-primary-foreground hover:scale-105 transition-transform">
            0
          </Button>
          <Button onClick={() => handleNumber(".")} className="bg-primary/10 hover:bg-primary/20 text-primary-foreground hover:scale-105 transition-transform">
            .
          </Button>
          <Button onClick={calculate} className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform">
            <ArrowRight className="mr-2 h-4 w-4" />
            =
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Calculator;
