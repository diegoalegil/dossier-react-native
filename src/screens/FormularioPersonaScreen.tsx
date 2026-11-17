import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

import BotonPersonalizado from '../components/BotonPersonalizado';

type DatosPersona = {
  nombre: string;
  edad: string;
  casado: boolean;
  jubilado: boolean;
};

type Resumen = {
  nombre: string;
  edad: number;
  casado: boolean;
  jubilado: boolean;
};

export default function FormularioPersonaScreen() {
  const [datos, setDatos] = useState<DatosPersona>({
    nombre: '',
    edad: '',
    casado: false,
    jubilado: false,
  });
  const [resumen, setResumen] = useState<Resumen | null>(null);

  function cambiarCampo<K extends keyof DatosPersona>(campo: K, valor: DatosPersona[K]) {
    setDatos(actual => ({ ...actual, [campo]: valor }));
    setResumen(null);
  }

  const enviar = () => {
    const nombre = datos.nombre.trim();
    const edad = Number(datos.edad);
    if (nombre === '') {
      Alert.alert('Falta el nombre', 'Escribe el nombre de la persona.');
      return;
    }
    if (!/^\d+$/.test(datos.edad.trim()) || edad > 130) {
      Alert.alert('Edad no válida', 'La edad tiene que ser un número entero entre 0 y 130.');
      return;
    }
    setResumen({ nombre, edad, casado: datos.casado, jubilado: datos.jubilado });
  };

  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenedor} keyboardShouldPersistTaps="handled">
      <Text style={styles.etiqueta}>Nombre</Text>
      <TextInput
        style={styles.campo}
        value={datos.nombre}
        onChangeText={texto => cambiarCampo('nombre', texto)}
        placeholder="Nombre"
      />
      <Text style={styles.etiqueta}>Edad</Text>
      <TextInput
        style={styles.campo}
        value={datos.edad}
        onChangeText={texto => cambiarCampo('edad', texto)}
        placeholder="Edad"
        keyboardType="numeric"
      />
      <View style={styles.fila}>
        <Text style={styles.etiqueta}>Casado</Text>
        <Switch value={datos.casado} onValueChange={valor => cambiarCampo('casado', valor)} />
      </View>
      <View style={styles.fila}>
        <Text style={styles.etiqueta}>Jubilado</Text>
        <Switch value={datos.jubilado} onValueChange={valor => cambiarCampo('jubilado', valor)} />
      </View>
      <BotonPersonalizado titulo="Enviar" color="seagreen" onPress={enviar} />
      {resumen !== null && (
        <View style={styles.resumen}>
          <Text style={styles.tituloResumen}>Resumen</Text>
          <Text style={styles.textoResumen}>Nombre: {resumen.nombre}</Text>
          <Text style={styles.textoResumen}>Edad: {resumen.edad} años</Text>
          <Text style={styles.textoResumen}>Casado: {resumen.casado ? 'Sí' : 'No'}</Text>
          <Text style={styles.textoResumen}>Jubilado: {resumen.jubilado ? 'Sí' : 'No'}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    backgroundColor: 'whitesmoke',
  },
  contenedor: {
    gap: 10,
    padding: 20,
  },
  etiqueta: {
    fontSize: 18,
  },
  campo: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    padding: 10,
  },
  fila: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resumen: {
    backgroundColor: 'aliceblue',
    borderColor: 'royalblue',
    borderRadius: 10,
    borderWidth: 2,
    gap: 6,
    marginTop: 10,
    padding: 15,
  },
  tituloResumen: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textoResumen: {
    fontSize: 16,
  },
});
