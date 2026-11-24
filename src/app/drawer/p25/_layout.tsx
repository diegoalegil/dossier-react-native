import { Drawer, DrawerContentScrollView, DrawerItemList } from 'expo-router/drawer';
import { Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerStyle: { width: 200, backgroundColor: 'lightyellow' },
          drawerActiveTintColor: 'orange',
          headerStyle: { backgroundColor: 'orange' },
          headerTintColor: '#fff',
        }}
        drawerContent={props => (
          <DrawerContentScrollView {...props}>
            <Text style={{ fontSize: 20, padding: 10 }}>Menú de Diego</Text>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        )}
      >
        <Drawer.Screen name="index" options={{ title: 'Inicio' }} />
        <Drawer.Screen name="about" options={{ title: 'About' }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
