function fibonacci (num){
    let fib = [0, 1];
    

    while(fib[fib.length - 1] < num){
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    
    if (fib.includes(num)){
        console.log (`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log (`O número ${num} não pertence à sequência de Fibonacci.`);
    }
}
fibonacci(22);
fibonacci(3);
