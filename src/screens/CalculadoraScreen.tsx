import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TeclaCalculadora from '../components/TeclaCalculadora';

type Operacion = '+' | '-' | 'x' | '/';

const GRIS = '#a5a5a5';
const NARANJA = '#ff9f0a';

const calcular = (a: number, b: number, operacion: Operacion) => {
  switch (operacion) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case 'x':
      return a * b;
    case '/':
      return b === 0 ? NaN : a / b;
  }
};

const formatear = (numero: number) => {
  if (!Number.isFinite(numero)) {
    return 'Error';
  }
  return String(parseFloat(numero.toPrecision(12)));
};

export default function CalculadoraScreen() {
  const [pantalla, setPantalla] = useState('0');
  const [anterior, setAnterior] = useState<number | null>(null);
  const [operacion, setOperacion] = useState<Operacion | null>(null);
  const [esperando, setEsperando] = useState(false);

  const pulsarNumero = (digito: string) => {
    if (pantalla === 'Error') {
      setAnterior(null);
      setOperacion(null);
    }
    if (esperando || pantalla === 'Error') {
      setPantalla(digito === '.' ? '0.' : digito);
      setEsperando(false);
      return;
    }
    if (digito === '.' && pantalla.includes('.')) {
      return;
    }
    if (pantalla.replace('-', '').replace('.', '').length >= 9) {
      return;
    }
    if (digito !== '.' && (pantalla === '0' || pantalla === '-0')) {
      setPantalla(pantalla === '-0' ? `-${digito}` : digito);
      return;
    }
    setPantalla(pantalla + digito);
  };

  const pulsarOperacion = (nueva: Operacion) => {
    const actual = parseFloat(pantalla);
    if (Number.isNaN(actual)) {
      return;
    }
    if (operacion !== null && anterior !== null && !esperando) {
      const resultado = calcular(anterior, actual, operacion);
      if (!Number.isFinite(resultado)) {
        setPantalla('Error');
        setAnterior(null);
        setOperacion(null);
        setEsperando(true);
        return;
      }
      setPantalla(formatear(resultado));
      setAnterior(resultado);
    } else {
      setAnterior(actual);
    }
    setOperacion(nueva);
    setEsperando(true);
  };

  const pulsarIgual = () => {
    if (operacion === null || anterior === null) {
      return;
    }
    const resultado = calcular(anterior, parseFloat(pantalla), operacion);
    setPantalla(formatear(resultado));
    setAnterior(null);
    setOperacion(null);
    setEsperando(true);
  };

  const limpiar = () => {
    setPantalla('0');
    setAnterior(null);
    setOperacion(null);
    setEsperando(false);
  };

  const cambiarSigno = () => {
    if (pantalla === 'Error') {
      return;
    }
    if (esperando && operacion !== null) {
      setPantalla('-0');
      setEsperando(false);
      return;
    }
    setPantalla(pantalla.startsWith('-') ? pantalla.slice(1) : `-${pantalla}`);
  };

  const porcentaje = () => {
    const actual = parseFloat(pantalla);
    if (!Number.isNaN(actual)) {
      setPantalla(formatear(actual / 100));
      setEsperando(true);
    }
  };

  return (
    <View style={styles.pantalla}>
      <Text style={styles.operacion}>
        {operacion !== null && anterior !== null ? `${formatear(anterior)} ${operacion}` : ' '}
      </Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {pantalla}
      </Text>
      <View style={styles.fila}>
        <TeclaCalculadora texto="AC" color={GRIS} colorTexto="black" onPress={limpiar} />
        <TeclaCalculadora texto="±" color={GRIS} colorTexto="black" onPress={cambiarSigno} />
        <TeclaCalculadora texto="%" color={GRIS} colorTexto="black" onPress={porcentaje} />
        <TeclaCalculadora texto="/" color={NARANJA} onPress={() => pulsarOperacion('/')} />
      </View>
      <View style={styles.fila}>
        <TeclaCalculadora texto="7" onPress={() => pulsarNumero('7')} />
        <TeclaCalculadora texto="8" onPress={() => pulsarNumero('8')} />
        <TeclaCalculadora texto="9" onPress={() => pulsarNumero('9')} />
        <TeclaCalculadora texto="x" color={NARANJA} onPress={() => pulsarOperacion('x')} />
      </View>
      <View style={styles.fila}>
        <TeclaCalculadora texto="4" onPress={() => pulsarNumero('4')} />
        <TeclaCalculadora texto="5" onPress={() => pulsarNumero('5')} />
        <TeclaCalculadora texto="6" onPress={() => pulsarNumero('6')} />
        <TeclaCalculadora texto="-" color={NARANJA} onPress={() => pulsarOperacion('-')} />
      </View>
      <View style={styles.fila}>
        <TeclaCalculadora texto="1" onPress={() => pulsarNumero('1')} />
        <TeclaCalculadora texto="2" onPress={() => pulsarNumero('2')} />
        <TeclaCalculadora texto="3" onPress={() => pulsarNumero('3')} />
        <TeclaCalculadora texto="+" color={NARANJA} onPress={() => pulsarOperacion('+')} />
      </View>
      <View style={styles.fila}>
        <TeclaCalculadora texto="0" ancha onPress={() => pulsarNumero('0')} />
        <TeclaCalculadora texto="." onPress={() => pulsarNumero('.')} />
        <TeclaCalculadora texto="=" color={NARANJA} onPress={pulsarIgual} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    backgroundColor: 'black',
    flex: 1,
    gap: 12,
    justifyContent: 'flex-end',
    padding: 15,
  },
  operacion: {
    color: GRIS,
    fontSize: 24,
    textAlign: 'right',
  },
  resultado: {
    color: 'white',
    fontSize: 80,
    textAlign: 'right',
  },
  fila: {
    flexDirection: 'row',
    gap: 12,
  },
});
