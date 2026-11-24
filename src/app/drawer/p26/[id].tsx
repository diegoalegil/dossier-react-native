import { router, useLocalSearchParams } from 'expo-router';
import { Button, Text, View } from 'react-native';

import MascotaDetalle from '../../../components/MascotaDetalle';
import { mascotas } from '../../../constants/mascotas';

export default function FichaMascota() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const mascota = mascotas.find(actual => actual.id === Number(id));

  if (!mascota) {
    return <Text>No existe esa mascota</Text>;
  }

  return (
    <View>
      <MascotaDetalle nombre={mascota.nombre} especie={mascota.especie} raza={mascota.raza} edad={mascota.edad} />
      <Button title="Volver" onPress={() => router.back()} />
    </View>
  );
}
