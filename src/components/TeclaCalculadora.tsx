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
    <TouchableOpacity style={[styles.tecla, ancha ? styles.ancha : styles.normal, { backgroundColor: color }]} onPress={onPress}>
      <Text style={[styles.texto, { color: colorTexto }, ancha && styles.textoAncho]}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tecla: {
    alignItems: 'center',
    borderRadius: 100,
    justifyContent: 'center',
  },
  normal: {
    aspectRatio: 1,
    flex: 1,
  },
  ancha: {
    alignItems: 'flex-start',
    flexBasis: 12,
    flexGrow: 2,
  },
  texto: {
    fontSize: 30,
  },
  textoAncho: {
    marginLeft: 30,
  },
});
