import { router } from 'expo-router';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function Primera() {
  const [userName, setUserName] = useState('Diego');

  return (
    <View style={{ padding: 10 }}>
      <Text>Primera pantalla</Text>
      <Button title="Ir a la segunda" onPress={() => router.push('/stack/p21/segunda')} />
      <TextInput style={{ borderWidth: 1, padding: 5 }} value={userName} onChangeText={setUserName} />
      <Button
        title="Ir a la tercera con el nombre"
        onPress={() => router.push({ pathname: '/stack/p21/tercera', params: { userName } })}
      />
    </View>
  );
}
