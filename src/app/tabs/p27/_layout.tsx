import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="inicio"
        options={{ title: 'Inicio', tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={20} color={color} /> }}
      />
      <Tabs.Screen
        name="perfil"
        options={{ title: 'Perfil', tabBarIcon: ({ color }) => <FontAwesome5 name="user" size={20} color={color} /> }}
      />
    </Tabs>
  );
}
