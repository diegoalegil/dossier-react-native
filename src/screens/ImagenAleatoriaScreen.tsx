import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import BotonPersonalizado from '../components/BotonPersonalizado';

const imagenes = [
  { nombre: 'Lamine Yamal', source: require('../../assets/images/celebracion-corner.jpg') },
  { nombre: 'Ka-Chow!', source: require('../../assets/images/rayo-mcqueen.jpg') },
  { nombre: 'Kilian Dictad*r', source: require('../../assets/images/uniforme-militar.jpg') },
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
