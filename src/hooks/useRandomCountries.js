import { useEffect, useState } from 'react';

export default function useRandomCountries() {

  // const [randomCountries, setRandomCountries] = useState([]);

  // const [allCountries, setAllCountries] = useState(data.allCountry.nodes);

  function selectRandomCountry(countryList) {

    return countryList[Math.floor(Math.random() * countryList.length)];

  }

  function selectRandomCountries(countryList, amount) {

    const randomCountriesList = [];

    const countryPool = [ ...countryList ];

    for (let i = 0; i < amount; i++) {
      const country = selectRandomCountry(countryPool);

      // Remove country from next possible selections
      countryPool.pop(country)

      randomCountriesList.push(country)

    }

    return randomCountriesList;

  }

  return {
    selectRandomCountries
  }

}