var agora = new Date()
var diaDaSemana = agora.getDay()

/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta 
5 = Sexta
6 = Sábado
*/

console.log('Dia' + ' ' +  diaDaSemana)

switch(diaDaSemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default: 
        console.log('[ERRO] Dia inválido')
        break                             
}


const bandaPreferida = 'Deftones'

switch (bandaPreferida) {
    case 'Anberlin':
        console.log('Minha banda preferida é Anberlin')
         break
    case 'Nx Zero':
        console.log('Minha banda preferida é Nx Zero')
        break
    case 'Oasis':
        console.log('Minha banda prefeirda é Oasis')
        break
    case 'Yellowcard':
        console.log('Minha banda prefeirda é Yellowcard')
        break
    case 'Deftones':
        console.log('Minha banda preferida é Deftones')
        break
    default:
        console.log('Não tenho uma só banda preferida.')                     
}