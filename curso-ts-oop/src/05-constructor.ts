export class MyDate {
  constructor(
    public year: number = 1970,
    public month: number = 1,
    private day: number = 1,
  ) {}

  public printFormat(): string {
    const day = this.addPadding(this.day)
    const month = this.addPadding(this.month)
  return `${day}/${month}/${this.year}`
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`
    } else {
      return `${value}`
    }
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

console.log(new MyDate());
console.log(new MyDate(2021));
console.log(new MyDate(2021, 1));
console.log(new MyDate(2021, 1, 1));

