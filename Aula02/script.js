idade = prompt('Quantos anos vc tem?')

if (idade < 18) {
    alert('Você NÃO pode jogar!')
}

if (idade >= 18) {
    escolhaJogador = prompt('Digite 1 - Pedra, 2 - Papel ou 3 - Tesoura.')
    escolhaComputador = Math.floor(Math.random() * 3) + 1;

    // Jogador Pedra, Computador Pedra - empate
    // Jogador Tesoura, Computador Tesoura - empate
    // Jogador Papel, Computador Papel - empate

    if (escolhaJogador == escolhaComputador) {
        alert('Empate!')
    }

    // Jogador Pedra, Computador Tesoura - Jogador vence
    // Jogador Pedra, Computador Papel - Computador vence

    if (escolhaJogador == 1) {
        if (escolhaComputador == 2) {
            alert('Computador venceu!')
        }
        if (escolhaComputador == 3) {
            alert('Você venceu!')
        }
    }

    // Jogador Tesoura, Computador Pedra - Computador vence
    // Jogador Tesoura, Computador Papel - Jogador vence

    if (escolhaJogador == 3) {
        if (escolhaComputador == 1) {
            alert('Computador venceu!')
        }
        if (escolhaComputador == 2) {
            alert('Você venceu!')
        }
    }

    // Jogador Papel, Computador Pedra - Jogador vence
    // Jogador Papel, Computador Tesoura - Computador vence

    if (escolhaJogador == 2) {
        if (escolhaComputador == 1) {
            alert('Você venceu!')
        }
        if (escolhaComputador == 3) {
            alert('Computador venceu!')
        }
    }

    alert('escolhaComputador: ' + escolhaComputador)
}


