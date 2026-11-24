import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';

import { cargarPokemon } from '../../../api/pokemon';

export default function DetallePokemon() {
  const { nombre } = useLocalSearchParams<{ nombre: string }>();
  const [pokemon, setPokemon] = useState<any>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    cargarPokemon(nombre)
      .then(datos => setPokemon(datos))
      .catch(() => setError('No se pudo cargar el Pokémon'))
      .finally(() => setCargando(false));
  }, [nombre]);

  if (cargando) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={{ padding: 10, alignItems: 'center' }}>
      <Image source={{ uri: pokemon.sprites.front_default }} style={{ width: 200, height: 200 }} />
      <Text style={{ fontSize: 30 }}>{pokemon.name}</Text>
      <Text>Número: {pokemon.id}</Text>
      <Text>Altura: {pokemon.height / 10} m</Text>
      <Text>Peso: {pokemon.weight / 10} kg</Text>
      <Text>Tipo: {pokemon.types.map((tipo: any) => tipo.type.name).join(', ')}</Text>
    </View>
  );
}
