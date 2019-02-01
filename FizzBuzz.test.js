const FizzBuzz = require("./FizzBuzz")

test("Write a program that prints the numbers from 1 to 100", () => {
    expect(FizzBuzz(1)).toBe(1);
}) ;

test(' %3 ', () => {
    expect(FizzBuzz(9)).toBe("Fizz");
});

test(' %5 ', () =>{
    expect(FizzBuzz(10)).toBe('Buzz');
});

test(' %3 & %5 ', () =>{
    expect(FizzBuzz(15)).toBe('FizzBuzz');
});
