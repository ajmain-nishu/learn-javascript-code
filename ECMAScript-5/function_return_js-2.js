//return function
function greet(msg) {
    function greetings(name) {
        return msg + ', ' + name + '!'
      }
    return greetings 
}

var gm = greet('Good Morning')
var msg = gm('Ajmain Nishu')
console.log(msg)