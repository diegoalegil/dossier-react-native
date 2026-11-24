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
        <Stack.Screen name="practica06" options={{ title: 'Práctica 6' }} />
        <Stack.Screen name="practica07" options={{ title: 'Práctica 7' }} />
        <Stack.Screen name="practica08" options={{ title: 'Práctica 8' }} />
        <Stack.Screen name="practica09" options={{ title: 'Práctica 9' }} />
        <Stack.Screen name="practica09-1" options={{ title: 'Práctica 9.1' }} />
        <Stack.Screen name="practica10" options={{ title: 'Prácticas 10 y 11' }} />
        <Stack.Screen name="practica12" options={{ title: 'Práctica 12' }} />
        <Stack.Screen name="practica13" options={{ title: 'Práctica 13' }} />
        <Stack.Screen name="practica14" options={{ title: 'Práctica 14' }} />
        <Stack.Screen name="practica15" options={{ title: 'Práctica 15' }} />
        <Stack.Screen name="practica16" options={{ title: 'Práctica 16' }} />
        <Stack.Screen name="practica17" options={{ title: 'Práctica 17' }} />
        <Stack.Screen name="practica18" options={{ title: 'Práctica 18' }} />
        <Stack.Screen name="practica19" options={{ title: 'Práctica 19' }} />
        <Stack.Screen name="stack/p20" options={{ headerShown: false }} />
        <Stack.Screen name="stack/p21" options={{ headerShown: false }} />
        <Stack.Screen name="stack/p22" options={{ headerShown: false }} />
        <Stack.Screen name="stack/p23" options={{ headerShown: false }} />
        <Stack.Screen name="drawer/p24" options={{ headerShown: false }} />
        <Stack.Screen name="drawer/p25" options={{ headerShown: false }} />
        <Stack.Screen name="drawer/p26" options={{ headerShown: false }} />
        <Stack.Screen name="tabs/p27" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
