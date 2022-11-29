export const Card = ({ pokemon }: any) => {
  return (
    <div className='card'>
      <div className='cardImg'>
        <img src={pokemon.sprites.front_default} alt='' />
      </div>
      <h3 className='cardName'>{pokemon.name}</h3>
      <div className='cardType'>
        <p>タイプ</p>
        {pokemon.types.map((type: any, i: number) => {
          return (
            <div key={i}>
              <span className='typeName'>{type.type.name}</span>
            </div>
          );
        })}
      </div>
      <div className='cardInfo'>
        <div className='cardData'>
          <p>重さ: {pokemon.weight}</p>
        </div>
        <div className='cardData'>
          <p>高さ: {pokemon.height}</p>
        </div>
        <div className='cardData'>
          <p>アビリティ: {pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
};