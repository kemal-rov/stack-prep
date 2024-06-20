/*
Write a function called fibonacci that takes 
a number n and returns the nth Fibonacci number.
*/

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
