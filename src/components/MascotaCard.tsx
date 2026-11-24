import { Text, TouchableOpacity } from 'react-native';

type Props = { nombre: string; especie: string; onPress: () => void };

export default function MascotaCard({ nombre, especie, onPress }: Props) {
  return (
    <TouchableOpacity style={{ borderBottomWidth: 1, padding: 10 }} onPress={onPress}>
      <Text style={{ fontSize: 20 }}>{nombre}</Text>
      <Text>{especie}</Text>
    </TouchableOpacity>
  );
}
