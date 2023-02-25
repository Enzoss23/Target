function fibonacci (num){
    let fib = [0, 1];
    
// a sequência de fibonacci
    while(fib[fib.length - 1] < num){
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
 // verificação se o pertence a sequência ou não   
    if (fib.includes(num)){
        console.log (`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log (`O número ${num} não pertence à sequência de Fibonacci.`);
    }
}
//chamando a função para rodar a sequência e averificação
fibonacci(22);//número que não pertence a sequência
fibonacci(3);//número que pertence a sequência
