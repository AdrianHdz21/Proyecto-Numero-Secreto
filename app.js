/*//Variables
let numeroMaximo = 100
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 10;

//Comparacion con ciclo
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Indica un numero entre 1 y ${numeroMaximo}: `));
    // console.log(typeof(numeroUsuario));
    // console.log(numeroSecreto);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste,  el numero es: ${numeroUsuario}. Lo hiciste en
        ${intentos} ${intentos == 1 ? 'vez' : 'veces'} `);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El numero secreto es menor");
        } else {
            alert("El numero secreto es mayor");
        }

        intentos++;
        if (intentos > maximosIntentos) {
            alert(`Llegaste al numero maximo de intentos: ${maximosIntentos}`);
            break;
        }
    }
}
*/
