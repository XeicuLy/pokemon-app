export type pokemon = {
  count: number;
  next: string;
  previous?: number;
  results: Array<pokeResult>;
};

export type pokeResult = {
  name: string;
  url: string;
};
