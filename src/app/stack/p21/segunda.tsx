import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Segunda() {
  return (
    <View style={{ padding: 10 }}>
      <Text>Segunda pantalla</Text>
      <Button
        title="Ir a la tercera"
        onPress={() => router.push({ pathname: '/stack/p21/tercera', params: { userName: 'Diego' } })}
      />
      <Button title="Volver" onPress={() => router.back()} />
    </View>
  );
}
