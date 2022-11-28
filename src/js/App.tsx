import { useEffect, useState } from 'react';
import { pokeResult } from './types/pokemon';
import { getAllPokemon, getPokemon } from './utils/pokemon';

const App = () => {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';

  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      // 各ポケモンの詳細データを取得
      loadPokemon(res.results);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data: Array<pokeResult>): Promise<any> => {
    let _pokemonData: any = await Promise.all(
      data.map(pokemon => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };
  console.log(pokemonData);

  return <div>{loading ? <h1>ロード中...</h1> : <h1>ポケモンデータを取得しました</h1>}</div>;
};

export default App;
