// Компонент для відображення списку епізодів
  const Episodes = ({ episodes }) => (
    <div>
        <h4>Episodes</h4>
      {episodes.map((i, index)=> (
        <Episode key={index} episode={i} />
      ))}
    <hr />
    </div>
  );

// Компонент для відображення епізода
  function Episode({ episode }) {
    if(episode.characters !== undefined) {
        return(
            <div>
              <h3> Name: {episode.name}</h3>
              <Characters characters ={episode.characters}/>
              <hr />
            </div>
        )
    } else {
        return(
            <div>
              <p>Name: {episode.name}</p>
            </div>
        )
    }
  };

// Компонент для відображення списку персонажів
const Characters = ({characters}) => (
    <div>
    <h4>Characters</h4>
    {characters.map((character, index) => (
        <Character key={index} character={character} />
    ))}
    </div>
);

// Компонент для відображення персонажа
function Character({ character }){
    if(character.episode !== undefined) {
        return(
            <div>
            <p>Name: {character.name}</p>
            <p>Gender: {character.gender}</p>
            <img src={character.image} alt={`${character.name}'s image`} />
            <Episodes episodes ={character.episode}/>
            </div>
        )
    } else {
        return(
            <div>
            <p>Name: {character.name}</p>
            </div>
        )
    }
    
};

function RickAndMorthy({episodes, characters}) {
    return (
        <div>
            <Episodes episodes ={episodes}/>
            <Characters characters ={characters}/>
      </div>
    );
  }

  export default RickAndMorthy;