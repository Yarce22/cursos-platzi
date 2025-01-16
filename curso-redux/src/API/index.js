import axios from 'axios';

const getPokemon = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export { getPokemon }