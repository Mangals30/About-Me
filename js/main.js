const firstName = document.querySelector('.first-name')
const lastName = document.querySelector('.last-name')
const titlesDiv = document.querySelector('.titles')
const bioDiv = document.querySelector('.bio')
const technology = document.querySelector('.technology')

let first = myLearnings.author.firstName.split('')
let last = myLearnings.author.lastName.split('')
createHeader(first, firstName)
createHeader(last, lastName)
displayTitles(myLearnings.author.titles, 0, titlesDiv);
createBio(myLearnings.author.bio, bioDiv)
displayTechs(myLearnings.techs, 0, technology)