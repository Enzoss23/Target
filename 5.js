function stringInvertida (string){
    let invertida = '';
    for (let i = string.length - 1; i >= 0; i--) {
        invertida += string[i]
    }
    return invertida;
}

let string = prompt('Digite uma string: ');
let invertida = stringInvertida(string);
console.log('A string invertida é:', invertida);
