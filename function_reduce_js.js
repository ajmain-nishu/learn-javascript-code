//summation using reduce function
var arr = [1, 2, 3, 4, 5]

var sum = arr.reduce(function(prev, curr) {
    return prev + curr
})
console.log(sum)