const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=25/';

const FetchPokeData = () => {
  return fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      return Promise.all(data.results.map(item => {
        return fetch(item.url)
          .then(response => response.json())
          .then(data => {
            const newData = data;
            return fetch(`https://pokeapi.co/api/v2/pokemon-species/${newData.id}`)
            .then(response => response.json())
            .then(data => {
                newData.evolvesFrom = data.evolves_from_species;
                return newData;
              })
              .catch(error => console.error(error))
          })
          .catch(error => console.error(error));
      }));
    })
    .catch(error => console.error(error));
};

export {FetchPokeData};