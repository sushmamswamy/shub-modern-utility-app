
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Calculator as CalcIcon, Equal, Delete, Plus, Minus, X, Divide } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 p-6 font-['Space_Grotesk']">
      <div className="max-w-md mx-auto space-y-8">
        <div className="flex items-center justify-between animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Calculator
          </h1>
          <CalcIcon className="h-8 w-8 text-purple-600 animate-pulse" />
        </div>

        <Card className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 shadow-xl shadow-purple-500/10">
          <div className="bg-white/5 rounded-xl p-6 mb-6">
            <div className="text-sm text-purple-300 h-6 text-right animate-slide-right">
              {equation}
            </div>
            <div className="text-4xl font-bold tracking-wider text-right animate-slide-left">
              {display}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <Button
              onClick={clear}
              variant="destructive"
              className="col-span-2 font-bold bg-red-500/80 hover:bg-red-600/80 backdrop-blur-sm"
            >
              <Delete className="mr-2 h-4 w-4" />
              Clear
            </Button>
            <Button
              onClick={() => handleOperator("%")}
              className="bg-purple-600/80 hover:bg-purple-700/80 backdrop-blur-sm"
            >
              %
            </Button>
            <Button
              onClick={() => handleOperator("/")}
              className="bg-purple-600/80 hover:bg-purple-700/80 backdrop-blur-sm"
            >
              <Divide className="h-4 w-4" />
            </Button>

            {[7, 8, 9].map((num) => (
              <Button
                key={num}
                onClick={() => handleNumber(num.toString())}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-lg font-medium hover:scale-105 transition-transform"
              >
                {num}
              </Button>
            ))}
            <Button
              onClick={() => handleOperator("*")}
              className="bg-purple-600/80 hover:bg-purple-700/80 backdrop-blur-sm"
            >
              <X className="h-4 w-4" />
            </Button>

            {[4, 5, 6].map((num) => (
              <Button
                key={num}
                onClick={() => handleNumber(num.toString())}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-lg font-medium hover:scale-105 transition-transform"
              >
                {num}
              </Button>
            ))}
            <Button
              onClick={() => handleOperator("-")}
              className="bg-purple-600/80 hover:bg-purple-700/80 backdrop-blur-sm"
            >
              <Minus className="h-4 w-4" />
            </Button>

            {[1, 2, 3].map((num) => (
              <Button
                key={num}
                onClick={() => handleNumber(num.toString())}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-lg font-medium hover:scale-105 transition-transform"
              >
                {num}
              </Button>
            ))}
            <Button
              onClick={() => handleOperator("+")}
              className="bg-purple-600/80 hover:bg-purple-700/80 backdrop-blur-sm"
            >
              <Plus className="h-4 w-4" />
            </Button>

            <Button
              onClick={() => handleNumber("0")}
              className="col-span-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-lg font-medium hover:scale-105 transition-transform"
            >
              0
            </Button>
            <Button
              onClick={() => handleNumber(".")}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-lg font-medium hover:scale-105 transition-transform"
            >
              .
            </Button>
            <Button
              onClick={calculate}
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 hover:scale-105 transition-all duration-300"
            >
              <Equal className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Calculator;
