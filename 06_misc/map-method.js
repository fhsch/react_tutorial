// MAP(): Create new array from an array: functions in map() receives each number of the array in order; need to return each one

// Challenge 1: create Array of squared numbers
const nums = [1, 2, 3, 4, 5]
const squared = nums.map(function(item) {
    return item * item
})
console.log(squared)

// Challenge 2: Create array of strings with capitalized first letter
const names = ["alice", "bob", "charlie", "danielle"]
const capitalized = names.map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
})
console.log(capitalized)

// Challenge 3: add html tags to strings (arrow function even shorter with only one parameter)
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const tags = pokemon.map(poke => `<p>${poke}</p>`)
console.log(tags)