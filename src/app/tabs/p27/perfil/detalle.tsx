import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function DetallePerfil() {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 25 }}>Detalle del perfil</Text>
      <Button title="Volver" onPress={() => router.back()} />
    </View>
  );
}
