
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Settings as SettingsIcon, ChevronRight, SliderVertical } from "lucide-react";

const Settings = () => {
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [animations, setAnimations] = useState(true);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between animate-slide-up">
        <h1 className="text-3xl font-bold text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Settings
        </h1>
        <SettingsIcon className="h-8 w-8 text-primary animate-pulse" />
      </div>

      <div className="grid gap-4">
        <Card className="p-6 bg-gradient-to-br from-background to-secondary/5 backdrop-blur-sm border border-secondary/20 animate-scale-in">
          <h2 className="text-xl font-semibold mb-4">Appearance</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="darkMode">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">Toggle dark theme</p>
              </div>
              <Switch
                id="darkMode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
                className="data-[state=checked]:bg-primary"
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="animations">Animations</Label>
                <p className="text-sm text-muted-foreground">Enable UI animations</p>
              </div>
              <Switch
                id="animations"
                checked={animations}
                onCheckedChange={setAnimations}
                className="data-[state=checked]:bg-primary"
              />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-background to-secondary/5 backdrop-blur-sm border border-secondary/20 animate-slide-left animation-delay-200">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="notifications">Push Notifications</Label>
                <p className="text-sm text-muted-foreground">Get important updates</p>
              </div>
              <Switch
                id="notifications"
                checked={notifications}
                onCheckedChange={setNotifications}
                className="data-[state=checked]:bg-primary"
              />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-background to-secondary/5 backdrop-blur-sm border border-secondary/20 animate-slide-right animation-delay-300">
          <h2 className="text-xl font-semibold mb-4">Data & Privacy</h2>
          <div className="space-y-4">
            <Button variant="outline" className="w-full group hover:scale-105 transition-transform">
              Clear Calculator History
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="w-full group hover:scale-105 transition-transform">
              Clear Health History
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="w-full group hover:scale-105 transition-transform">
              Clear Currency History
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-background to-secondary/5 backdrop-blur-sm border border-secondary/20 animate-slide-up animation-delay-400">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground">
              <p>Version: 1.0.0</p>
              <p>Created by: Sushma and Shreyas</p>
            </div>
            <Button variant="outline" className="w-full group hover:scale-105 transition-transform">
              Check for Updates
              <SliderVertical className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
