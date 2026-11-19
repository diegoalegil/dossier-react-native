import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function InsertarEmoticonosScreen() {
  const [texto, setTexto] = useState('');

  return (
    <View style={styles.pantalla}>
      <View style={styles.iconos}>
        <TouchableOpacity onPress={() => setTexto(actual => actual + ' :-)')}>
          <FontAwesome5 name="smile" size={40} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTexto(actual => actual + ' :-(')}>
          <FontAwesome5 name="frown" size={40} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTexto(actual => actual + ' :-D')}>
          <FontAwesome5 name="laugh-beam" size={40} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTexto(actual => actual + ' ;-)')}>
          <FontAwesome5 name="smile-wink" size={40} color="purple" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTexto(actual => actual + ' :-O')}>
          <FontAwesome5 name="surprise" size={40} color="red" />
        </TouchableOpacity>
      </View>
      <TextInput style={styles.campo} placeholder="Escribe algo" value={texto} onChangeText={setTexto} />
    </View>
  );
}

const styles = StyleSheet.create({
  campo: {
    borderWidth: 1,
    padding: 5,
  },
  iconos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  pantalla: {
    padding: 10,
  },
});
