import { useEffect, useState } from 'react';

export default function useRandomCountries({ data }) {

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

  function shuffleOptions(options) {
    const shuffledOptions = options
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a,b) => a.sort - b.sort)
      .map(({ value }) => value)
    
    return shuffledOptions
  }

  function chooseCorrectAnswer(answerOptions) {

    const answer = selectRandomCountry(answerOptions);

    const allShuffledOptions = shuffleOptions(answerOptions);

    return {
      answer: answer,
      allShuffledOptions: allShuffledOptions
    }

  }

  function chooseOptionsAndSelectAnswer(countryList, amount) {

    const randomCountries = selectRandomCountries(countryList, amount);

    const options = chooseCorrectAnswer(randomCountries);

    return options
  }


  useEffect(() => {

    const options = chooseOptionsAndSelectAnswer(data.allCountry.nodes, 4);

    console.log(options);

  }, [])

}