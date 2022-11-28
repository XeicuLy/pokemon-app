import { useEffect } from 'react';
import { getAllPokemon } from './utils/pokemon';

const App = () => {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      console.log(res);
    };
    fetchPokemonData();
  }, []);
  return <h1>Hello World</h1>;
};

export default App;
