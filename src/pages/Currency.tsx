
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Currency = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState<number | null>(null);

  const currencies = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "INR"];

  const convertCurrency = () => {
    // Mock conversion (replace with actual API call)
    const mockRate = 0.85;
    setResult(parseFloat(amount) * mockRate);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center mb-6">Currency Converter</h1>
      <Card className="p-4 space-y-4">
        <div className="space-y-2">
          <Input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Select value={fromCurrency} onValueChange={setFromCurrency}>
            <SelectTrigger>
              <SelectValue placeholder="From" />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((currency) => (
                <SelectItem key={currency} value={currency}>
                  {currency}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={toCurrency} onValueChange={setToCurrency}>
            <SelectTrigger>
              <SelectValue placeholder="To" />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((currency) => (
                <SelectItem key={currency} value={currency}>
                  {currency}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button onClick={convertCurrency} className="w-full">
          Convert
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold">
              {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
            </h3>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Currency;
