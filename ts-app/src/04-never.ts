const withoutEnd = () => {
  while (true) {
    console.log('Nunca parar');
  }
}

const fail = (msg: string) => {
  throw new Error(msg)
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string'
  } else if (Array.isArray(input)) {
    return 'es un array'
  } else {
    return fail('not match')
  }
}

console.log(example('Hola'))
console.log(example([2,3,4,5,6]))
console.log(example(1234))
console.log(example('Hasta aquí llega el fail'))
