import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Primera() {
  return (
    <View style={{ padding: 10 }}>
      <Text>Primera pantalla</Text>
      <Button title="Ir a la segunda" color="#A50044" onPress={() => router.push('/stack/p22/segunda')} />
    </View>
  );
}
