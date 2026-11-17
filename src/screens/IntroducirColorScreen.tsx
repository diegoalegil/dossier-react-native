import { useState } from 'react';
import { processColor, StyleSheet, Text, View } from 'react-native';

import BotonPersonalizado from '../components/BotonPersonalizado';
import DialogoTexto from '../components/DialogoTexto';

export default function IntroducirColorScreen() {
  const [fondo, setFondo] = useState('white');
  const [visible, setVisible] = useState(false);
  const [colorEscrito, setColorEscrito] = useState('');
  const [error, setError] = useState('');

  const abrirDialogo = () => {
    setColorEscrito('');
    setError('');
    setVisible(true);
  };

  const escribir = (texto: string) => {
    setColorEscrito(texto);
    setError('');
  };

  const aceptar = () => {
    const color = colorEscrito.trim().toLowerCase();
    if (color === '') {
      setError('Escribe un color');
      return;
    }
    const procesado = processColor(color);
    if (procesado === null || procesado === undefined) {
      setError(`«${colorEscrito.trim()}» no es un color válido`);
      return;
    }
    setFondo(color);
    setVisible(false);
  };

  return (
    <View style={[styles.pantalla, { backgroundColor: fondo }]}>
      <Text style={styles.texto}>Color del fondo: {fondo}</Text>
      <BotonPersonalizado titulo="Cambiar de color" color="slateblue" onPress={abrirDialogo} />
      <DialogoTexto
        visible={visible}
        titulo="Escribe el color del fondo"
        valor={colorEscrito}
        placeholder="Por ejemplo lightblue o #ffcc00"
        error={error}
        onChangeText={escribir}
        onCancelar={() => setVisible(false)}
        onAceptar={aceptar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    gap: 20,
    justifyContent: 'center',
    padding: 20,
  },
  texto: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    fontSize: 22,
    fontWeight: 'bold',
    padding: 8,
    textAlign: 'center',
  },
});
