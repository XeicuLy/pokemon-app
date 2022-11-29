import './Card.css';

export const Card = ({ pokemon }: any) => {
  return (
    <div className='card'>
      <div className='cardImg'>
        <img src={pokemon.sprites.front_default} alt='' />
      </div>
      <h3 className='cardName'>{pokemon.name}</h3>
      <div className='cardType'>
        <p className='cardText'>Type</p>
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
          <p className='cardText'>
            Wight: <span>{pokemon.weight}</span>
          </p>
        </div>
        <div className='cardData'>
          <p className='cardText'>
            Height: <span>{pokemon.height}</span>
          </p>
        </div>
        <div className='cardData'>
          <p className='cardText'>
            Ability: <span>{pokemon.abilities[0].ability.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
