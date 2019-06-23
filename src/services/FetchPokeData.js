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
            fetch(`https://pokeapi.co/api/v2/evolution-chain/${newData.id}`)
              .then(response => response.json())
              .then(data => {
                newData.chain = data.chain;
                return newData;
              })
              .catch(error => console.error(error))
            return newData;
          })
          .catch(error => console.error(error));
      }));
    })
    .catch(error => console.error(error));
};

export {FetchPokeData};