const prompt = require('prompt-sync')({ sigint: true });

let num = Math.ceil(Math.random() * 100)

// console.log(num)

let guess = +prompt(`I'm thinking of a number between 1 and 100.  Try to guess it.
> `)

let count = 1

if (guess > 0 && guess % 1 === 0) {
    while (guess !== num && count < 3) {
        if (guess < num) {
            guess = +prompt(`Sorry, too low! Guess again. \n> `)
        } else {
            guess = +prompt(`Sorry, too high! Guess again. \n> `)
        }
        count++
    }

    if (guess === num) {
        console.log(`Congratulations, ${num} is correct!`)
    } else if (guess < num) {
        console.log(`Sorry, too low.  I was thinking of ${num}.`)
    } else {
        console.log(`Sorry, too high.  I was thinking of ${num}.`)
    }

} else {
    console.log(`Input a valid whole number.`)
}