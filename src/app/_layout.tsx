import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Dossier de React Native' }} />
        <Stack.Screen name="practica01" options={{ title: 'Práctica 1' }} />
        <Stack.Screen name="practica02" options={{ title: 'Prácticas 2 y 3' }} />
        <Stack.Screen name="practica04" options={{ title: 'Práctica 4' }} />
        <Stack.Screen name="practica05" options={{ title: 'Práctica 5' }} />
      </Stack>
    </ThemeProvider>
  );
}
