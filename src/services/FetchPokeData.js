const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=25/';

const FetchPokeData = () => {
  return fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      return Promise.all(data.results.map(item => {
        return fetch(item.url)
          .then(response => response.json())
          .then(data => {
            return data;
          })
          .catch(error => console.error(error));
      }));
    })
    .catch(error => console.error(error));
};

export {FetchPokeData};