import { useEffect, useState } from 'react';
import { Card } from './components/Card/Card';
import { pokeResult } from './types/pokemon';
import { getAllPokemon, getPokemon } from './utils/pokemon';

import '../css/App.css';

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

  return (
    <div className='App'>
      {loading ? (
        <h1>ロード中...</h1>
      ) : (
        <div className='pokemonCardContainer'>
          {pokemonData.map((pokemon, i) => {
            return <Card key={i} pokemon={pokemon} />;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
