//por inferencia ts interpreta que todas las variables y funciones son publicas

export class MyDate {
  public year: number
  public month: number
  public day: number

  constructor(
    year: number,
    month: number,
    day: number,
  ) {
    this.year = year
    this.month = month
    this.day = day
  }

  public printFormat(): string {
  return `${this.day}/${this.month}/${this.year}`
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount
    } else if (type === 'months') {
      this.month += amount
    } else if (type === 'years') {
      this.year += amount
    }
  }
}

const myDate = new MyDate(2021, 3, 13)
myDate.day = 12
