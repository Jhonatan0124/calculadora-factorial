document.getElementById('calculateButton').addEventListener('click', function() {
    let number = prompt("Por favor, ingresa un número:");

    // Verificar que sea número
    number = Number(number);
    if (isNaN(number) || number < 0) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    // Operacion del factorial
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    // Muestra el resultado
    document.getElementById('result').innerText = `El factorial de ${number} es: ${factorial}`;
    console.log(`El factorial de ${number} es: ${factorial}`);
});
