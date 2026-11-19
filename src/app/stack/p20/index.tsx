import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ padding: 10 }}>
      <Text>Esta es la HomeScreen</Text>
      <Button title="Ir a la segunda pantalla" onPress={() => router.push('/stack/p20/detalle')} />
    </View>
  );
}
