const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


// * Create a new variable called `totalBatteries`, which holds the sum of all of the battery amounts in the `batteryBatches` array. (Note that the
// `batteryBatches` variable has been provided for you in `index.js`.) Naturally,  you should use `reduce()` for this!

// ## Conclusion

// With `reduce()`, we are able to quickly get a single summary value from the
// elements in an array. `reduce()` — like the other iterator methods we've learned  about in this section — can greatly cut down the amount of time spent recreating  common functionality. It can also make our code more efficient and expressive.

const totalBatteries = batteryBatches.reduce(function(accum, element){
    return accum + element
}, 0)







