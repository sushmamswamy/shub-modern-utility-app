
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card } from "@/components/ui/card";

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
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center mb-6">Calculator</h1>
      <Card className="p-4">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">{equation}</div>
          <div className="text-3xl font-bold">{display}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <Button onClick={clear} variant="destructive">AC</Button>
          <Button onClick={() => handleOperator("+/-")}>+/-</Button>
          <Button onClick={() => handleOperator("%")}>%</Button>
          <Button onClick={() => handleOperator("/")}>/</Button>
          
          {[7, 8, 9].map((num) => (
            <Button key={num} onClick={() => handleNumber(num.toString())}>
              {num}
            </Button>
          ))}
          <Button onClick={() => handleOperator("*")}>×</Button>
          
          {[4, 5, 6].map((num) => (
            <Button key={num} onClick={() => handleNumber(num.toString())}>
              {num}
            </Button>
          ))}
          <Button onClick={() => handleOperator("-")}>-</Button>
          
          {[1, 2, 3].map((num) => (
            <Button key={num} onClick={() => handleNumber(num.toString())}>
              {num}
            </Button>
          ))}
          <Button onClick={() => handleOperator("+")}>+</Button>
          
          <Button onClick={() => handleNumber("0")} className="col-span-2">0</Button>
          <Button onClick={() => handleNumber(".")}>.</Button>
          <Button onClick={calculate} className="bg-primary">=</Button>
        </div>
      </Card>
    </div>
  );
};

export default Calculator;
