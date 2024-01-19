function Swapi({item}) {
    return (
        <div>
            <h4>Name: {item['name']}</h4>
            <p>Height: {item.height}</p>
            <p>Mass: {item.mass}</p>
            <p>Hair color: {item.hair_color === 'n/a'? 'none': item.hair_color}</p>
            <p>Skin color: {item.skin_color}</p>
            <p style={{ color: item.eye_color, marginLeft: '5px' }}>Eye color: {item.eye_color}</p>
            <p>Birth year: {item.birth_year}</p>
            <p>Gender: {item.gender === 'n/a'? 'none': item.gender}</p>
            <p>Homeworld: {item.homeworld}</p>
      </div>
    );
  }
  
  export default Swapi;