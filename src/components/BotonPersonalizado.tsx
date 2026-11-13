import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = { titulo: string; color: string; onPress: () => void };

export default function BotonPersonalizado({ titulo, color, onPress }: Props) {
  return (
    <TouchableOpacity style={[styles.boton, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    alignItems: 'center',
    borderRadius: 6,
    paddingVertical: 10,
  },
  texto: {
    color: 'white',
    fontWeight: 'bold',
  },
});
