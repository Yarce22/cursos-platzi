import {describe, it, expect} from 'vitest'

describe("Mi primer test", () => {
  it("la suma de dos números", () => {
    const suma = (a: number, b: number) => a + b
    const resultado = suma(1, 2)
    expect(resultado).toBe(3)
  })

  it("dos textos iguales", () => {
    const texto1 = 'Platzi conf'
    const texto2 = 'Platzi conf'
    expect(texto1).toBe(texto2)
  })
})