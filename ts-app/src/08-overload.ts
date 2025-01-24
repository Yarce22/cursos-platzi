// Nico => [N, i, c, o] => string => string[]
// [N, i, c, o] => Nico => string

function parseStr(input: string): string[]
function parseStr(input: string[]): string
function parseStr(input: number): boolean

function parseStr (input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('') // retorna un string
  } else if (typeof input === 'string') {
    return input.split('') // retorna un array, string[]
  } else if (typeof input === 'number') {
    return !!input // Si es un numero me retornada un boolean
  }
}

const rtaArray = parseStr('Nico')
const rtaStr = parseStr(['N', 'i', 'c', 'o'])
const rtaBoolean = parseStr(253)

console.log('rtaArray', rtaArray);
console.log('rtaStr', rtaStr);
