const str = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
console.log(str)

const newStr = str.replace('verde', 'rosa').replace('azul', 'laranja')
console.log(newStr)

const inc1 = newStr.includes('verde')
console.log(inc1)

const inc2 = newStr.includes('laranja')
console.log(inc2)

const strToUpperCase = str.replace(
  'mas não deixe o gato sair',
  'mas não deixe o gato sair'.toUpperCase()
)
console.log(strToUpperCase)
