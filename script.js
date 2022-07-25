let nameNav = window.prompt('Insira o Nome da Nave: ')
let choice = window.prompt('Deseja entrar em dobra? \n' +
    ' 1 - Sim \n ' +
    '2 - Não \n')
let dobra = parseInt(0)

switch (choice) {
    case '1':
        while (choice != 2) {
            dobra = parseInt(dobra + 1)
            choice = window.prompt('Deseja fazer a dobra novamente?' + " \n" +
                ' 1 - Sim \n ' +
                '2 - Não \n')
        }
        alert('Nome da Nave: ' + nameNav + " \n" +
            'Dobras realizadas: ' + dobra)
        break;

    case '2':
        alert('Nome da Nave: ' + nameNav + " \n" +
            'Dobras realizadas: ' + dobra)
        alert('Finalizando Programa')
        break;
        
    default:
        alert('Fora do Escopo! \n' +
            'As únicas opções possível são 1 e 2. \n' +
            '1 - Sim ou 2 = Não.')
        break;
}
