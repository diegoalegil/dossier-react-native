import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  texto: string;
  color?: string;
  colorTexto?: string;
  ancha?: boolean;
  onPress: () => void;
};

export default function TeclaCalculadora({ texto, color = '#333333', colorTexto = 'white', ancha = false, onPress }: Props) {
  return (
    <TouchableOpacity style={[styles.tecla, { backgroundColor: color }, ancha && styles.ancha]} onPress={onPress}>
      <Text style={[styles.texto, { color: colorTexto }]}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tecla: {
    alignItems: 'center',
    aspectRatio: 1,
    borderRadius: 100,
    flex: 1,
    justifyContent: 'center',
  },
  ancha: {
    alignItems: 'flex-start',
    aspectRatio: 2.1,
    flex: 2,
    paddingLeft: 30,
  },
  texto: {
    fontSize: 30,
  },
});
