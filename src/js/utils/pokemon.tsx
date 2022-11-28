import { pokemon } from '../types/pokemon';

export const getAllPokemon = (url: string): Promise<pokemon> => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => resolve(data));
  });
};
