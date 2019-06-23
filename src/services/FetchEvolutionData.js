const endpoint = 'https://pokeapi.co/api/v2/evolution-chain/';

const FetchEvolutionData = id => {
  return fetch(`${endpoint}${id}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error))
};

export {FetchEvolutionData};