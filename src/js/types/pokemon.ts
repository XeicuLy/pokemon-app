export type pokemon = {
  count: number;
  next: string;
  previous?: number;
  result: Array<pokeResult>;
};

type pokeResult = {
  name: string;
  url: string;
};
