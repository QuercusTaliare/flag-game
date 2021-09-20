import { useState } from 'react';

export default function useSubmitAnswer({ answer, choice }) {

  const [isCorrect, setIsCorrect] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function testChoice(e) {

    e.preventDefault();

    (answer?.numericCode === choice?.numbericCode) 
    ? setIsCorrect(true)
    : setIsCorrect(false)
  }

  return {
    isCorrect,
    submitted,
    testChoice
  }

}