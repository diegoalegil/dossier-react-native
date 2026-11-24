import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Inicio() {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 25 }}>Pestaña Inicio</Text>
      <Button title="Ver detalle" onPress={() => router.push('/tabs/p27/inicio/detalle')} />
    </View>
  );
}
