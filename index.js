const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// // const titleCased = tutorials.map(tutorials => tutorials.)
// const splitPhrase = (phrase) => phrase.split(' ')
// // const newTutorials = []


// const lowerCased = tutorials.map(tutorial => splitPhrase(tutorial))
//   debugger
//   //split words- each tutorial is now split into individual strings
//   console.log(lowerCased)
//   const upperCased = lowerCased.map(wordString => wordString[0].toUpperCase())
//   //titleized split words- each word is title cased but still in separate strings
//   const titleCased = (upperCased) => {
//     return upperCased.join(' ')
//   }
//   //titleized words joined back into strings


const titleCased = () => {
  return tutorials.map( phrase => {
    let wordsArray = phrase.split(' ')
    let capWordsArray = 
      wordsArray.map( word => word.charAt(0).toUpperCase() + word.slice(1) )
    let capTutorials = capWordsArray.join(' ')
    return capTutorials
  })
}



