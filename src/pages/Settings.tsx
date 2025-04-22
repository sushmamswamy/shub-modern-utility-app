
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Settings = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center mb-6">Settings</h1>
      <Card className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="notifications">Notifications</Label>
          <Switch id="notifications" />
        </div>
        
        <div className="flex items-center justify-between">
          <Label htmlFor="darkMode">Dark Mode</Label>
          <Switch id="darkMode" />
        </div>
        
        <Button variant="outline" className="w-full">
          Clear History
        </Button>
        
        <Button variant="outline" className="w-full">
          About App
        </Button>
      </Card>
    </div>
  );
};

export default Settings;
