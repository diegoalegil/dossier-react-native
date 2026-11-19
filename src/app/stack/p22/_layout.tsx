import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        title: 'Diego',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#004D98' },
        headerTintColor: '#fff',
        headerBackVisible: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="segunda" />
    </Stack>
  );
}
