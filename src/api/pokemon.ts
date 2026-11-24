export async function cargarPokemons() {
  const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=40');
  if (!respuesta.ok) {
    throw new Error('No se pudieron obtener los datos');
  }
  const datos = await respuesta.json();
  return datos.results;
}

export async function cargarPokemon(nombre: string) {
  const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/' + nombre);
  if (!respuesta.ok) {
    throw new Error('No se pudieron obtener los datos');
  }
  return await respuesta.json();
}
