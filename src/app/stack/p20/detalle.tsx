import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Detalle() {
  return (
    <View style={{ padding: 10 }}>
      <Text>Esta es la segunda pantalla</Text>
      <Button title="Volver" onPress={() => router.back()} />
    </View>
  );
}
