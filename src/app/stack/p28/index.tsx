import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TextInput, View } from 'react-native';

import { cargarPokemons } from '../../../api/pokemon';
import PokemonCard from '../../../components/PokemonCard';

type Pokemon = { name: string; url: string };

export default function ListaPokemon() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    cargarPokemons()
      .then(lista => setPokemons(lista))
      .catch(() => setError('No se pudieron cargar los Pokémon'))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const filtrados = pokemons.filter(pokemon => pokemon.name.includes(busqueda.toLowerCase()));

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput style={{ borderWidth: 1, padding: 5 }} placeholder="Buscar" value={busqueda} onChangeText={setBusqueda} />
      {filtrados.length === 0 && <Text>No hay resultados</Text>}
      <FlatList
        data={filtrados}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PokemonCard
            nombre={item.name}
            url={item.url}
            onPress={() => router.push({ pathname: '/stack/p28/[nombre]', params: { nombre: item.name } })}
          />
        )}
      />
    </View>
  );
}
