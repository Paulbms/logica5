document.getElementById('start').addEventListener('click', startGame);

function startGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    const attempts = [];
    let guessed = false;

    while (!guessed) {
        let userGuess = prompt('Introduce un número entre 1 y 100:');
        if (userGuess === null) return;  // Si el usuario cancela el prompt, salir del bucle

        userGuess = parseInt(userGuess);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert('Por favor, introduce un número válido entre 1 y 100.');
            continue;
        }

        attempts.push(userGuess);

        if (userGuess === secretNumber) {
            document.getElementById('message').innerText = 'Felicidades, adivinaste el número secreto';
            displayAttempts(attempts);
            guessed = true;
        } else {
            alert('Ups, el número secreto es incorrecto, vuelve a intentarlo.');
        }
    }
}

function displayAttempts(attempts) {
    const attemptsList = document.getElementById('attempts');
    attemptsList.innerHTML = '';

    attempts.forEach((attempt, index) => {
        const li = document.createElement('li');
        li.textContent = `Intento ${index + 1}: ${attempt}`;
        attemptsList.appendChild(li);
    });
}
