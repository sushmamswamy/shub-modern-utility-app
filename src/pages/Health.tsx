
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Health = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));
    }
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center mb-6">Health Guide</h1>
      <Card className="p-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="height">Height (cm)</Label>
          <Input
            id="height"
            type="number"
            placeholder="Enter height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            placeholder="Enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <Button onClick={calculateBMI} className="w-full">Calculate BMI</Button>
        
        {bmi && (
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Your BMI: {bmi}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Category: {getBMICategory(bmi)}
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Health;
