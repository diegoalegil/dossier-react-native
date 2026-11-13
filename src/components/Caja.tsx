import { StyleSheet, Text, View } from 'react-native';

type Props = { nombre: string; bg?: string };

export default function Caja({ nombre, bg = 'green' }: Props) {
  return (
    <View style={[styles.caja, { backgroundColor: bg }]}>
      <Text style={styles.texto}>{nombre}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  caja: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    height: 100,
    justifyContent: 'center',
    width: 100,
  },
  texto: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
