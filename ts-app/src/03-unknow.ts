let anyVar: any
anyVar = true
anyVar = undefined
anyVar = 123
anyVar = 'asd'

let anyUnknownVar: unknown
anyUnknownVar = true
anyUnknownVar = undefined
anyUnknownVar = 123
anyUnknownVar = 'asd'

//el unknown me fuerza a hacer una verificacion de tipos
if(typeof anyUnknownVar === 'string') {
  anyUnknownVar.toUpperCase()
}

const parse = (str: string): unknown => {
  return JSON.parse(str)
}
