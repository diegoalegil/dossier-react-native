import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

export type Tarea = { id: number; texto: string; completada: boolean };

type TareasContexto = { tareas: Tarea[]; setTareas: Dispatch<SetStateAction<Tarea[]>> };

const TareasContext = createContext<TareasContexto | null>(null);

const tareasIniciales: Tarea[] = [
  { id: 1, texto: 'Terminar la práctica 23', completada: false },
  { id: 2, texto: 'Entregar el dossier en Moodle', completada: false },
  { id: 3, texto: 'Abrir los sobres de FC 27', completada: true },
];

export function TareasProvider({ children }: { children: ReactNode }) {
  const [tareas, setTareas] = useState<Tarea[]>(tareasIniciales);
  return <TareasContext.Provider value={{ tareas, setTareas }}>{children}</TareasContext.Provider>;
}

export function useTareas() {
  const valor = useContext(TareasContext);
  if (!valor) {
    throw new Error('Falta el proveedor de tareas');
  }
  return valor;
}
