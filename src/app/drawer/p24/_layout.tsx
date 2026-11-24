import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { TareasProvider } from '../../../context/TareasContext';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TareasProvider>
        <Drawer>
          <Drawer.Screen name="tareas" options={{ title: 'Tareas' }} />
          <Drawer.Screen name="about" options={{ title: 'About' }} />
        </Drawer>
      </TareasProvider>
    </GestureHandlerRootView>
  );
}
