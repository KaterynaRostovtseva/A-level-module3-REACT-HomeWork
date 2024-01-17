
function Population({idNation, nation, idYear, population, slugNation, year}) {
  return (
      <div>
          <p>ID Nation: {idNation}</p>
          <p>Nation: {nation}</p>
          <p>ID Year: {idYear}</p>
          <p>Year: {year}</p>
          <p>Population: {population}</p>
          <p>Slug Nation: {slugNation}</p>   
      </div>
  );
}

export default Population;