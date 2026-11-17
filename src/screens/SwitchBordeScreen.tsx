import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function SwitchBordeScreen() {
  const [activo, setActivo] = useState(false);

  return (
    <View style={[styles.pantalla, activo && styles.borde]}>
      <Text style={styles.texto}>{activo ? 'Borde activado' : 'Borde desactivado'}</Text>
      <Switch
        style={styles.switch}
        value={activo}
        onValueChange={setActivo}
        thumbColor={activo ? 'orange' : 'brown'}
        trackColor={{ false: 'tan', true: 'moccasin' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    gap: 30,
    justifyContent: 'center',
  },
  borde: {
    borderColor: 'red',
    borderWidth: 10,
  },
  texto: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  switch: {
    transform: [{ scale: 1.5 }],
  },
});
