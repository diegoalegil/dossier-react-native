import { XMLParser } from 'fast-xml-parser';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, Text, TouchableOpacity, View } from 'react-native';

type Noticia = { title: string; link: string };

export default function Noticias() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://feeds.bbci.co.uk/mundo/rss.xml')
      .then(respuesta => respuesta.text())
      .then(texto => {
        const parser = new XMLParser();
        const datos = parser.parse(texto);
        setNoticias(datos.rss.channel.item);
      })
      .catch(() => setError('No se pudieron cargar las noticias'))
      .finally(() => setCargando(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Button
        title="Abrir la web de React Native"
        onPress={() => router.push({ pathname: '/stack/p31/web', params: { url: 'https://reactnative.dev/' } })}
      />
      {cargando && <ActivityIndicator size="large" />}
      <Text>{error}</Text>
      <FlatList
        data={noticias}
        keyExtractor={item => item.link}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ borderBottomWidth: 1, padding: 10 }}
            onPress={() => router.push({ pathname: '/stack/p31/web', params: { url: item.link } })}
          >
            <Text style={{ fontSize: 16 }}>{item.title}</Text>
            <Text style={{ color: 'blue' }}>{item.link}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
