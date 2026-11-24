import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import { useState } from 'react';
import { Button, FlatList, Text, View } from 'react-native';

type Posicion = { lat: number; lon: number; timestamp: number };

export default function HistorialUbicacionesScreen() {
  const [mensaje, setMensaje] = useState('');
  const [historial, setHistorial] = useState<Posicion[]>([]);

  const guardarUbicacion = async () => {
    const permiso = await Location.requestForegroundPermissionsAsync();
    if (permiso.status !== 'granted') {
      setMensaje('Has rechazado el permiso de ubicación');
      return;
    }
    try {
      const posicion = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High, mayShowUserSettingsDialog: false });
      const nueva = { lat: posicion.coords.latitude, lon: posicion.coords.longitude, timestamp: Date.now() };
      const texto = await AsyncStorage.getItem('ubicaciones');
      const lista = texto ? JSON.parse(texto) : [];
      lista.push(nueva);
      await AsyncStorage.setItem('ubicaciones', JSON.stringify(lista));
      setMensaje('Guardada: ' + nueva.lat + ', ' + nueva.lon);
    } catch {
      setMensaje('No se pudo guardar la ubicación');
    }
  };

  const verHistorial = async () => {
    const texto = await AsyncStorage.getItem('ubicaciones');
    setHistorial(texto ? JSON.parse(texto) : []);
  };

  return (
    <View style={{ flex: 1, padding: 10, gap: 10 }}>
      <Button title="Guardar ubicación" onPress={guardarUbicacion} />
      <Button title="Historial" onPress={verHistorial} />
      <Text>{mensaje}</Text>
      <FlatList
        data={historial}
        keyExtractor={item => item.timestamp.toString()}
        renderItem={({ item }) => (
          <Text style={{ borderBottomWidth: 1, padding: 5 }}>
            {new Date(item.timestamp).toLocaleString('es-ES')}: {item.lat}, {item.lon}
          </Text>
        )}
      />
    </View>
  );
}
