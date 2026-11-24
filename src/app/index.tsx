import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      <Text style={styles.titulo}>Prácticas de React Native con Expo</Text>
      <Link href="/practica01" style={styles.enlace}>
        Práctica 1. Hola mundo
      </Link>
      <Link href="/practica02" style={styles.enlace}>
        Prácticas 2 y 3. Contador
      </Link>
      <Link href="/practica04" style={styles.enlace}>
        Práctica 4. Tres cajas
      </Link>
      <Link href="/practica05" style={styles.enlace}>
        Práctica 5. Flex dinámico
      </Link>
      <Link href="/practica06" style={styles.enlace}>
        Práctica 6. Botones Touchable
      </Link>
      <Link href="/practica07" style={styles.enlace}>
        Práctica 7. Nombres y estilos
      </Link>
      <Link href="/practica08" style={styles.enlace}>
        Práctica 8. Círculos dinámicos
      </Link>
      <Link href="/practica09" style={styles.enlace}>
        Práctica 9. Alineación e imágenes
      </Link>
      <Link href="/practica09-1" style={styles.enlace}>
        Práctica 9.1. Imagen aleatoria
      </Link>
      <Link href="/practica10" style={styles.enlace}>
        Prácticas 10 y 11. Calculadora
      </Link>
      <Link href="/practica12" style={styles.enlace}>
        Práctica 12. Color aleatorio
      </Link>
      <Link href="/practica13" style={styles.enlace}>
        Práctica 13. Introducir el color
      </Link>
      <Link href="/practica14" style={styles.enlace}>
        Práctica 14. Borde con Switch
      </Link>
      <Link href="/practica15" style={styles.enlace}>
        Práctica 15. Formulario de persona
      </Link>
      <Link href="/practica16" style={styles.enlace}>
        Práctica 16. Lista de productos
      </Link>
      <Link href="/practica17" style={styles.enlace}>
        Práctica 17. Tarjetas del IMC
      </Link>
      <Link href="/practica18" style={styles.enlace}>
        Práctica 18. Diario de emociones
      </Link>
      <Link href="/practica19" style={styles.enlace}>
        Práctica 19. Insertar emoticonos
      </Link>
      <Link href="/stack/p20" style={styles.enlace}>
        Práctica 20. Primer Stack
      </Link>
      <Link href="/stack/p21" style={styles.enlace}>
        Práctica 21. Stack con tres pantallas
      </Link>
      <Link href="/stack/p22" style={styles.enlace}>
        Práctica 22. Personalizar la cabecera
      </Link>
      <Link href="/stack/p23" style={styles.enlace}>
        Práctica 23. Lista de tareas
      </Link>
      <Link href="/drawer/p24/tareas" style={styles.enlace}>
        Práctica 24. Drawer con tareas y About
      </Link>
      <Link href="/drawer/p25" style={styles.enlace}>
        Práctica 25. Drawer personalizado
      </Link>
      <Link href="/drawer/p26" style={styles.enlace}>
        Práctica 26. Mascotas con Drawer
      </Link>
      <Link href="/tabs/p27/inicio" style={styles.enlace}>
        Práctica 27. Tabs con Stack
      </Link>
      <Link href="/stack/p28" style={styles.enlace}>
        Práctica 28. Pokémon
      </Link>
      <Link href="/practica29" style={styles.enlace}>
        Práctica 29. Ubicación
      </Link>
      <Link href="/practica30" style={styles.enlace}>
        Práctica 30. Historial de ubicaciones
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    gap: 12,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  enlace: {
    backgroundColor: 'aliceblue',
    borderColor: 'royalblue',
    borderRadius: 10,
    borderWidth: 2,
    color: 'navy',
    fontSize: 18,
    padding: 14,
  },
});
