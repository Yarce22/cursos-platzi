class MyMath {
  static readonly PI = 3.14159

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max : item)
  }
}

console.log(MyMath.PI);
console.log(MyMath.max(1,2,3,4,2,3,3));
console.log(MyMath.max(-1, -2, -3));
const numbers = [1,2,5,4,8,96,4]
console.log(MyMath.max(...numbers));
