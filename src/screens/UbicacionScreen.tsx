import * as Location from 'expo-location';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function UbicacionScreen() {
  const [mensaje, setMensaje] = useState('');
  const [latitud, setLatitud] = useState(0);
  const [longitud, setLongitud] = useState(0);

  const pedirPermiso = async () => {
    const permiso = await Location.requestForegroundPermissionsAsync();
    if (permiso.status === 'granted') {
      setMensaje('Permiso concedido');
    } else {
      setMensaje('Has rechazado el permiso de ubicación');
    }
  };

  const obtenerUbicacion = async () => {
    const permiso = await Location.getForegroundPermissionsAsync();
    if (permiso.status !== 'granted') {
      setMensaje('Primero tienes que dar el permiso');
      return;
    }
    try {
      const posicion = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High, mayShowUserSettingsDialog: false });
      setLatitud(posicion.coords.latitude);
      setLongitud(posicion.coords.longitude);
      setMensaje('Ubicación obtenida');
    } catch {
      setMensaje('No se pudo obtener la ubicación');
    }
  };

  return (
    <View style={{ padding: 10, gap: 10 }}>
      <Button title="Pedir permiso" onPress={pedirPermiso} />
      <Button title="Obtener ubicación" onPress={obtenerUbicacion} />
      <Text>{mensaje}</Text>
      <Text>Latitud: {latitud}</Text>
      <Text>Longitud: {longitud}</Text>
    </View>
  );
}
