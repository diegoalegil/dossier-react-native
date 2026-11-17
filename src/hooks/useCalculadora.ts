import { useState } from 'react';

export type Operacion = '+' | '-' | 'x' | '/';

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

export default function useCalculadora() {
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

  const operacionPendiente = operacion !== null && anterior !== null ? `${formatear(anterior)} ${operacion}` : ' ';

  return {
    cambiarSigno,
    limpiar,
    operacionPendiente,
    pantalla,
    porcentaje,
    pulsarIgual,
    pulsarNumero,
    pulsarOperacion,
  };
}
