
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.43edc0634e0743b985370d94e09b95f1',
  appName: 'shub-modern-utility-app',
  webDir: 'dist',
  server: {
    url: 'https://43edc063-4e07-43b9-8537-0d94e09b95f1.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      gradleArgs: ['-PcdvMinSdkVersion=21']
    }
  }
};

export default config;
