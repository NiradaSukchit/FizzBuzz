
function FizzBuzz (num) {
    if(num % 3 === 0 && num % 5 === 0){
        return "FizzBuzz"
    }
    else if(num === 5){
        return "Buzz"
    }else if(num === 3){
        return "Fizz"
    }else{
        return num
    }
}

module.exports = FizzBuzz;