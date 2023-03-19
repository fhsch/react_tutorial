// No state implemented here; was just a vanilla JS exercise to 
// create something variable in contrast to props
// index.html and style.css are not used (just copied from my exercise file template)

const date = new Date();
const hours = date.getHours()

function greeting(name) {
    let timeOfDay
    if (hours >= 4 && hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if (hours >= 17 && hours < 20) {
            timeOfDay = "evening"
    } else {
            timeOfDay = "night"
    }

    return `Good ${timeOfDay}, ${name}!`
}

console.log(greeting("Felix"))