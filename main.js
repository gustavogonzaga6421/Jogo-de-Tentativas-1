// Exibe uma mensagem de boas-vindas
alert('Bem-Vindo ao Número Secreto do Gustavo');

// Define o limite superior para a validação dos palpites
let limit = 100;

// Gera o número secreto aleatório entre 1 e 10
let secret_number = parseInt(Math.random() * 10) + 1;

// Inicializa as variáveis para armazenar o palpite do jogador e contar as tentativas
let guess;
let guess_count = 1;

// Inicia um loop que continuará até que o jogador acerte o número secreto
while (secret_number != guess) {
    // Solicita um palpite ao jogador e converte o valor para um número inteiro
    guess = parseInt(prompt("Digite um número de 1 à 10"));

    // Verifica se o palpite é inválido (não é um número ou está fora do intervalo permitido)
    if (isNaN(guess) || guess < 1 || guess > limit) {
        // Exibe uma mensagem de erro e continua o loop pedindo um novo palpite
        alert(`Por favor, insira um número válido entre 1 e ${limit}`);
        continue; // Pula o restante do código e pede um novo palpite
    }

    // Verifica se o palpite está correto
    if (secret_number == guess) {
        // Define a palavra correta para "tentativa(s)" dependendo do número de tentativas
        let word_attempts = guess_count > 1 ? 'tentativas' : 'tentativa';
        // Exibe uma mensagem de sucesso ao jogador
        alert(`Parabéns, você acertou! ${guess_count} ${word_attempts}`);
    } else {
        // Caso o palpite esteja incorreto, dá uma dica se o número secreto é maior ou menor
        if (secret_number < guess) {
            alert(`O número secreto é menor do que o seu palpite ${guess}`);
        } else {
            alert(`O número secreto é maior que o seu palpite ${guess}`);
        }
        // Incrementa o contador de tentativas
        guess_count++;
    }
}
