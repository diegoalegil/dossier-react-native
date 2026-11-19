import { router, useLocalSearchParams } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Tercera() {
  const { userName } = useLocalSearchParams<{ userName: string }>();

  return (
    <View style={{ padding: 10 }}>
      <Text>Tercera pantalla</Text>
      <Text>Hola, {userName}</Text>
      <Button title="Volver" onPress={() => router.back()} />
    </View>
  );
}
