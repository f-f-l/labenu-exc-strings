const msg1 = 'Qual é o seu nome?'
const msg2 = 'Qual sua primeira comida favorita?'
const msg3 = 'Qual sua segunda comida favorita?'
const msg4 = 'Qual sua terceira comida favorita?'

const nomeDoUsuario = prompt(msg1)
const comida1 = prompt(msg2)
const comida2 = prompt(msg3)
const comida3 = prompt(msg4)

console.log(
  `Estas são as comidas favoritas de ${nomeDoUsuario}:\n- ${comida1}\n- ${comida2}\n- ${comida3}\n `
)
