import { FlatList, StyleSheet, Text, View } from 'react-native';

type Producto = { id: string; nombre: string; precio: number; stock: number };

const productos: Producto[] = [
  { id: '1', nombre: 'Lamine Yamal · Destacado de la Champions', precio: 2450000, stock: 3 },
  { id: '2', nombre: 'Kylian Mbappé · Destiny for Glory', precio: 3100000, stock: 2 },
  { id: '3', nombre: 'Raphinha · POTM', precio: 485000, stock: 12 },
  { id: '4', nombre: 'Claudia Pina · POTM', precio: 310000, stock: 9 },
  { id: '5', nombre: 'Ronaldinho · Icono', precio: 4800000, stock: 1 },
  { id: '6', nombre: 'Pedri · TOTW', precio: 96000, stock: 25 },
  { id: '7', nombre: 'Aitana Bonmatí · TOTW', precio: 154000, stock: 18 },
  { id: '8', nombre: 'Frenkie de Jong · Oro raro', precio: 23000, stock: 60 },
];

export default function ListaProductosScreen() {
  return (
    <FlatList
      data={productos}
      keyExtractor={item => item.id}
      ListHeaderComponent={<Text style={styles.cabecera}>Lista Productos</Text>}
      renderItem={({ item, index }) => (
        <View style={[styles.producto, { backgroundColor: index % 2 === 0 ? 'white' : 'lightsteelblue' }]}>
          <Text style={styles.nombre}>{item.nombre}</Text>
          <Text style={styles.dato}>Precio: {item.precio} monedas</Text>
          <Text style={styles.dato}>Stock: {item.stock}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  cabecera: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 16,
    textAlign: 'center',
  },
  dato: {
    fontSize: 15,
  },
  nombre: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  producto: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
