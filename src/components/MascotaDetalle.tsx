import { Text, View } from 'react-native';

type Props = { nombre: string; especie: string; raza: string; edad: number };

export default function MascotaDetalle({ nombre, especie, raza, edad }: Props) {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 30 }}>{nombre}</Text>
      <Text>Especie: {especie}</Text>
      <Text>Raza: {raza}</Text>
      <Text>Edad: {edad} años</Text>
    </View>
  );
}
