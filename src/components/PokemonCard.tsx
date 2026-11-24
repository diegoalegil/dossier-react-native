import { Image, Text, TouchableOpacity } from 'react-native';

type Props = { nombre: string; url: string; onPress: () => void };

export default function PokemonCard({ nombre, url, onPress }: Props) {
  const id = url.split('/')[6];
  const imagen = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png';

  return (
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1 }} onPress={onPress}>
      <Image source={{ uri: imagen }} style={{ width: 70, height: 70 }} />
      <Text style={{ fontSize: 20 }}>{nombre}</Text>
    </TouchableOpacity>
  );
}
