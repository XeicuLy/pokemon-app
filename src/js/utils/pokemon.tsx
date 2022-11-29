import { pokemon } from '../types/pokemon';

export const getAllPokemon = (url: string): Promise<pokemon> => {
  return new Promise(resolve => {
    fetch(url)
      .then(res => res.json())
      .then(data => resolve(data));
  });
};

export const getPokemon = (url: string) => {
  return new Promise(resolve => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data);
      });
  });
};
