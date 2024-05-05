function calcularSoma() {
    let num1 = parseInt(document.getElementById('numero1').value);
    let num2 = parseInt(document.getElementById('numero2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerHTML = "Por favor, insira números válidos.";
    } else {
        let soma = num1 + num2;
        document.getElementById('resultado').innerHTML = "O resultado da soma é " + soma;
    }
}