import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import BotonPersonalizado from '../components/BotonPersonalizado';

const imagenes = [
  { nombre: 'Logo de React', source: require('../../assets/images/react-logo.png') },
  { nombre: 'Logo de Expo', source: require('../../assets/images/expo-logo.png') },
  { nombre: 'Icono de la app', source: require('../../assets/images/icon.png') },
  { nombre: 'Logo con brillo', source: require('../../assets/images/logo-glow.png') },
  { nombre: 'Icono de Android', source: require('../../assets/images/android-icon-foreground.png') },
];

export default function ImagenAleatoriaScreen() {
  const [indice, setIndice] = useState(0);
  const elegida = imagenes[indice];

  const elegirAleatoria = () => {
    setIndice(Math.floor(Math.random() * imagenes.length));
  };

  return (
    <View style={styles.pantalla}>
      <View style={styles.marco}>
        <Image source={elegida.source} style={styles.imagen} resizeMode="contain" />
      </View>
      <Text style={styles.nombre}>
        {elegida.nombre} ({indice + 1} de {imagenes.length})
      </Text>
      <BotonPersonalizado titulo="IMAGEN ALEATORIA" color="mediumseagreen" onPress={elegirAleatoria} />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    backgroundColor: 'whitesmoke',
    flex: 1,
    gap: 20,
    justifyContent: 'center',
    padding: 30,
  },
  marco: {
    alignItems: 'center',
    backgroundColor: 'slategray',
    borderRadius: 20,
    padding: 20,
  },
  imagen: {
    height: 200,
    width: 200,
  },
  nombre: {
    fontSize: 20,
    textAlign: 'center',
  },
});
