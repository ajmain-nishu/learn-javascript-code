//filter function implement with callback
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function myFilter(arr, cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(myFilter(arr, function(value) {
    return value % 2 === 0
}))

console.log(myFilter(arr, function(value) {
    return value > 4
}))