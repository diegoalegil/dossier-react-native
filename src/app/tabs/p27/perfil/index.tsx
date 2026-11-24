import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Perfil() {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 25 }}>Pestaña Perfil</Text>
      <Button title="Ver detalle" onPress={() => router.push('/tabs/p27/perfil/detalle')} />
    </View>
  );
}
