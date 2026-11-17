import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
  visible: boolean;
  titulo: string;
  valor: string;
  placeholder?: string;
  error?: string;
  onChangeText: (texto: string) => void;
  onCancelar: () => void;
  onAceptar: () => void;
};

export default function DialogoTexto({ visible, titulo, valor, placeholder, error, onChangeText, onCancelar, onAceptar }: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancelar}>
      <View style={styles.fondo}>
        <View style={styles.caja}>
          <Text style={styles.titulo}>{titulo}</Text>
          <TextInput
            style={styles.campo}
            value={valor}
            onChangeText={onChangeText}
            placeholder={placeholder}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <View style={styles.botones}>
            <Button title="Cancelar" color="gray" onPress={onCancelar} />
            <Button title="Aceptar" onPress={onAceptar} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: '#0008',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  caja: {
    backgroundColor: 'white',
    borderRadius: 12,
    gap: 12,
    padding: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  campo: {
    borderColor: 'gray',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    padding: 10,
  },
  error: {
    color: 'crimson',
  },
  botones: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
  },
});
