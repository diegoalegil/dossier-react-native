# Dossier de React Native con Expo

Programación Multimedia y Dispositivos Móviles (PGL) · 2.º DAM

Diego Alejandro Gil González

Aquí voy haciendo todas las prácticas del dossier de React Native con Expo y Android Studio. Todas van en este mismo proyecto y no borro ninguna, así se puede ver cómo va avanzando.

## Cómo arrancarlo

```bash
npm install
npx expo start
```

Con el emulador de Android Studio abierto, pulso la tecla `a` y se abre la app en Expo Go.

## Cómo está organizado el proyecto

Desde la práctica 4 la app abre con un índice que tiene un enlace a cada práctica, así no se pierde ninguna:

- `src/app/`: las rutas de Expo Router. Cada práctica tiene su archivo (`practica01.tsx`, `practica02.tsx`...) que solo exporta su pantalla, por ejemplo `export { default } from '../screens/HolaMundoScreen';`. El `index.tsx` es el índice con los `Link`.
- `src/app/_layout.tsx`: cambié las pestañas que traía la plantilla por un `Stack`, con el título de cada práctica arriba y la flecha para volver al índice. También quité `explore.tsx`, que era de la plantilla.
- `src/screens/`: el código de cada pantalla.
- `src/components/`: los componentes que reutilizo.
- `capturas/`: las capturas de este README.

## Prácticas

| Práctica | Estado |
|---|---|
| [1. Hola mundo](#práctica-1-hola-mundo) | Terminada |
| [2. Contador con dos botones](#práctica-2-contador-con-dos-botones) | Terminada |
| [3. InicioScreen y estilos separados](#práctica-3-inicioscreen-y-estilos-separados) | Terminada |
| [4. Tres cajas](#práctica-4-tres-cajas) | Terminada |
| [5. Modificar flex dinámicamente](#práctica-5-modificar-flex-dinámicamente) | Terminada |
| [6. Sustituir los botones](#práctica-6-sustituir-los-botones) | Terminada |
| [7. Nombre y estilos personalizados](#práctica-7-nombre-y-estilos-personalizados) | Terminada |
| [8. Círculos dinámicos](#práctica-8-círculos-dinámicos) | Terminada |

---

## Práctica 1. Hola mundo

### Qué hay que hacer
En `src/app/index.tsx` hay que hacer una pantalla que diga «¡Hola mundo! Soy Diego» con un `View` y un `Text`, fondo rosa y el texto centrado (`flex: 1`, `justifyContent: 'center'` y `alignItems: 'center'`).

### Cómo lo he hecho
1. Creé el proyecto con la plantilla por defecto de Expo:
   ```bash
   npx create-expo-app@latest dossier-react-native --template default
   ```
2. En Android Studio hice el emulador desde el Device Manager (un Pixel 8).
3. Añadí al final del `~/.bashrc` la ruta del SDK de Android para que la terminal encuentre `adb`:
   ```bash
   export ANDROID_HOME="$HOME/Android/Sdk"
   export PATH="$PATH:$ANDROID_HOME/emulator"
   export PATH="$PATH:$ANDROID_HOME/platform-tools"
   ```
   Con `source ~/.bashrc` y `adb devices` comprobé que salía el emulador como `device`.
4. Arranqué el proyecto con `npx expo start` y pulsé `a`. Se instala Expo Go en el emulador y se abre la app.
5. Cambié todo el código de `src/app/index.tsx` por la pantalla del Hola mundo:

```tsx
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.pantalla}>
      <Text>¡Hola mundo! Soy Diego</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    alignItems: 'center',
    backgroundColor: 'lightpink',
    flex: 1,
    justifyContent: 'center',
  },
});
```

Al guardar, la app se recarga sola en el emulador.

### Captura
![Práctica 1 funcionando en el emulador](capturas/practica-01-hola-mundo.png)

### Problemas que tuve
- En clase no me dio tiempo a que funcionara el emulador. Luego lo terminé siguiendo los pasos de la profe: configurar Android Studio, crear el Pixel y poner lo del `.bashrc`.

### Estado
Terminada.

---

## Práctica 2. Contador con dos botones

### Qué hay que hacer
Partiendo del ejemplo del contador, cambiar el color del borde y del fondo, redondear las esquinas con `borderRadius` y añadir otro botón que reste. El valor se enseña en un `Text`.

### Cómo lo he hecho
1. En `src/app/index.tsx` creé el estado `contador` con `useState(0)`.
2. Puse dos `Button`, cada uno con su `onPress`: el de «Incrementar» hace `setContador(n => n + 1)` y el de «Decrementar» hace `setContador(n => n - 1)`.
3. Puse el fondo de la pantalla en azul (`lightskyblue`) y metí el texto y los botones dentro de una caja (`View`) con fondo azul clarito, borde azul y `borderRadius: 20`, y puse los botones en fila con `flexDirection: 'row'`.
4. Los estilos van todos en `StyleSheet.create()`. El color de los botones lo cambio con la prop `color`, porque el `Button` nativo no deja ponerle estilos como a un `View`.

```tsx
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.pantalla}>
      <View style={styles.caja}>
        <Text style={styles.texto}>Contador: {contador}</Text>
        <View style={styles.botones}>
          <Button title="Decrementar" color="crimson" onPress={() => setContador(n => n - 1)} />
          <Button title="Incrementar" color="seagreen" onPress={() => setContador(n => n + 1)} />
        </View>
      </View>
    </View>
  );
}
```

El código del Hola mundo está en el primer commit. En la práctica 3 lo guardo como `src/screens/HolaMundoScreen.tsx` para no perderlo.

### Captura
![Práctica 2 funcionando en el emulador](capturas/practica-02-contador.png)

### Problemas que tuve
- Ninguno con el código. Lo único fue preparar el emulador en el portátil: le faltaba la imagen de Android y la tuve que volver a descargar.

### Estado
Terminada.

---

## Práctica 3. InicioScreen y estilos separados

### Qué hay que hacer
Pasar el contador de la práctica 2 a su propia pantalla, `src/screens/InicioScreen.tsx`, y que `src/app/index.tsx` solo la importe y la muestre. Los estilos con `StyleSheet.create()`.

### Cómo lo he hecho
1. Creé la carpeta `src/screens/`.
2. Moví el código del contador a `src/screens/InicioScreen.tsx` y cambié el nombre de la función a `InicioScreen`.
3. Recuperé el Hola mundo de la práctica 1 y lo guardé en `src/screens/HolaMundoScreen.tsx`, para no perderlo.
4. Dejé `src/app/index.tsx` así:

```tsx
import InicioScreen from '../screens/InicioScreen';

export default function Index() {
  return <InicioScreen />;
}
```

Lo bueno es que `src/app/` es lo que Expo Router usa como rutas y en `src/screens/` está el código de verdad de cada pantalla.

### Captura
![Práctica 3: el contador ya sale desde InicioScreen](capturas/practica-03-inicio-screen.jpg)

### Problemas que tuve
- Ninguno. Comprobé que no había errores al importar y que el contador seguía sumando y restando igual.

### Estado
Terminada.

---

## Práctica 4. Tres cajas

### Qué hay que hacer
Una pantalla `PrincipalScreen` con el texto «Contenedor Principal» y un escenario con `flex: 1` donde van tres componentes `Caja` de 100 × 100, cada una con un color que le paso por propiedades.

### Cómo lo he hecho
1. Hice el componente `src/components/Caja.tsx` con dos props: `nombre` y `bg`, que es el color y por defecto es verde. Con `style={[styles.caja, { backgroundColor: bg }]}` junto el estilo base con el color que le llega.
2. En `src/screens/PrincipalScreen.tsx` puse el título en amarillo y el escenario gris claro con `flex: 1`. Dentro van las tres cajas:

```tsx
<View style={styles.escenario}>
  <Caja nombre="1" bg="rosybrown" />
  <Caja nombre="2" bg="cornflowerblue" />
  <Caja nombre="3" bg="green" />
</View>
```

3. Las cajas salen una debajo de otra porque en React Native la columna es la dirección que viene por defecto.
4. Aquí también monté el índice de prácticas (lo explico arriba, en «Cómo está organizado el proyecto»).

### Captura
![Práctica 4: tres cajas dentro del escenario](capturas/practica-04-tres-cajas.jpg)

### Problemas que tuve
- Al cambiar las pestañas por el `Stack`, Expo Go seguía enseñando la versión vieja con las pestañas. Se arregló recargando la app.

### Estado
Terminada.

---

## Práctica 5. Modificar flex dinámicamente

### Qué hay que hacer
Ponerle a cada caja dos botones, uno que sube su `flex` y otro que lo baja, enseñar el valor y ver cómo se reparte el espacio. Cada caja con su propio estado y sin valores negativos.

### Cómo lo he hecho
1. Hice otro componente, `src/components/CajaFlex.tsx`, para no romper la práctica 4. Esta caja no tiene altura fija, porque con `height: 100` el `flex` casi no se nota (lo avisa el dossier).
2. Cada caja tiene su propio estado, `const [valorFlex, setValorFlex] = useState(1);`, y se lo paso al estilo: `{ backgroundColor: bg, flex: valorFlex }`.
3. Los botones hacen `setValorFlex(n => n + 1)` y `setValorFlex(n => Math.max(0, n - 1))`. Con el `Math.max` nunca baja de 0.
4. La pantalla es `src/screens/FlexScreen.tsx`, con las tres cajas en el escenario.

### Capturas
Al entrar, las tres tienen `flex: 1` y ocupan lo mismo:

![Práctica 5: las tres cajas con flex 1](capturas/practica-05-flex-inicio.jpg)

Después de subir la caja 2 a `flex: 3` y bajar la 3 a `flex: 0`, la 2 se queda con casi todo el espacio y la 3 solo ocupa lo que mide su contenido:

![Práctica 5: la caja 2 con flex 3 y la 3 con flex 0](capturas/practica-05-flex-cambiado.jpg)

### Problemas que tuve
- Ninguno. Me fijé en que con `flex: 0` la caja no desaparece: se queda del tamaño del texto y los botones, así que se puede volver a subir.

### Estado
Terminada.

---

## Práctica 6. Sustituir los botones

### Qué hay que hacer
Cambiar los botones de la práctica 5. El de `flex + 1` pasa a ser un `TouchableHighlight` que además saca una alerta, y el de `flex - 1` un `TouchableOpacity`. Los dos personalizados.

### Cómo lo he hecho
1. Copié la caja en `src/components/CajaTactil.tsx` (así la práctica 5 sigue igual) y cambié los `Button` por los dos componentes táctiles, cada uno con un `Text` dentro.
2. El `TouchableOpacity` es rojo y baja el valor. Al pulsarlo se vuelve medio transparente.
3. El `TouchableHighlight` es naranja y lleva `underlayColor="gold"`, que es el color que sale mientras lo tienes pulsado.
4. La función `aumentar` saca la alerta y luego sube el valor:

```tsx
const aumentar = () => {
  Alert.alert('flex + 1', `La caja ${nombre} pasa a flex ${valorFlex + 1}`);
  setValorFlex(n => n + 1);
};
```

5. Los dos botones van redondeados (`borderRadius: 20`) y con borde blanco.

### Capturas
La alerta al pulsar `flex + 1` en la caja 2:

![Práctica 6: alerta del TouchableHighlight](capturas/practica-06-alerta.jpg)

Después de cerrar la alerta y bajar la caja 1 a `flex: 0`:

![Práctica 6: botones personalizados](capturas/practica-06-botones.jpg)

### Problemas que tuve
- Ninguno. La diferencia entre los dos se nota al pulsar: el Highlight cambia de color y el Opacity solo se aclara.

### Estado
Terminada.

---

## Práctica 7. Nombre y estilos personalizados

### Qué hay que hacer
Que cada caja enseñe su nombre (Caja A, B y C) y acepte estilos que le llegan por propiedades. Al menos una con las esquinas redondeadas y otro borde.

### Cómo lo he hecho
1. Hice el componente `src/components/CajaPersonalizada.tsx` con una prop `style` de tipo `StyleProp<ViewStyle>`:

```tsx
type Props = { nombre: string; bg?: string; style?: StyleProp<ViewStyle> };
```

2. Dentro de la caja junto los estilos así: `style={[styles.porDefecto, { backgroundColor: bg, flex: valorFlex }, style]}`. El último es el que manda, así que lo que le paso desde fuera pisa al estilo por defecto.
3. En `src/screens/CajasPersonalizadasScreen.tsx`:
   - la Caja A va con el estilo por defecto;
   - la B lleva `borderRadius: 20` y un borde azul marino de 7;
   - la C lleva `borderRadius: 40` y un borde amarillo discontinuo (`borderStyle: 'dashed'`).
4. Los botones son los de la práctica 6, así que siguen funcionando.

### Captura
![Práctica 7: Caja A, B y C con estilos distintos](capturas/practica-07-cajas-estilos.jpg)

### Problemas que tuve
- Ninguno.

### Estado
Terminada.

---

## Práctica 8. Círculos dinámicos

### Qué hay que hacer
Empezar con el escenario vacío. Un botón añade círculos de un color que va cambiando, y otros dos cambian entre `wrap/nowrap` y `row/column`. Los botones tienen que ser personalizados con `TouchableOpacity` y el RGB no puede pasar de 255.

### Cómo lo he hecho
1. Hice un botón reutilizable, `src/components/BotonPersonalizado.tsx`: un `TouchableOpacity` con un título y un color que le paso por props.
2. En `src/screens/CirculosScreen.tsx` guardo los círculos en un array de estado. Cada círculo tiene `id` y `color`.
3. El color depende del número del círculo. Lo limito con `Math.min(255, ...)` y, en el verde, que va bajando, también con `Math.max(0, ...)`:

```ts
const rojo = Math.min(255, 120 + numero * 12);
const verde = Math.max(0, Math.min(255, 230 - numero * 8));
const azul = Math.min(255, 140 + (numero % 5) * 25);
```

4. Otros dos estados guardan el `flexWrap` y el `flexDirection` y se los paso al escenario. El botón enseña el valor que hay puesto, como en la figura del dossier («wrap. Pulse para cambiar»).
5. Los círculos los pinto con `map` y a cada uno le pongo `key={circulo.id}`, que React lo necesita.

### Capturas
Con `wrap` y `row`, cuando no caben más en la fila bajan a la siguiente:

![Práctica 8: diez círculos con wrap y row](capturas/practica-08-wrap-row.jpg)

Con `nowrap` y `column` salen todos en una columna y los últimos se quedan fuera, porque no pueden saltar a otra columna:

![Práctica 8: los círculos con nowrap y column](capturas/practica-08-nowrap-column.jpg)

### Problemas que tuve
- Ninguno. Al escenario le puse `overflow: 'hidden'` para que, con `nowrap`, los círculos que no caben se corten en el borde y no se salgan por encima de lo demás.

### Estado
Terminada.
