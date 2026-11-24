import { router } from 'expo-router';
import { FlatList } from 'react-native';

import MascotaCard from '../../../components/MascotaCard';
import { mascotas } from '../../../constants/mascotas';

export default function ListaMascotas() {
  return (
    <FlatList
      data={mascotas}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <MascotaCard
          nombre={item.nombre}
          especie={item.especie}
          onPress={() => router.push({ pathname: '/drawer/p26/[id]', params: { id: item.id.toString() } })}
        />
      )}
    />
  );
}
