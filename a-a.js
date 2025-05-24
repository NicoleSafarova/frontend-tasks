// https://rubaxa.github.io/playground/#a-lt-a

var a = {
  value: 98838,
  valueOf() {
    return this.value += 1;
  }
};

console.log(a == a); // true

console.log(a < a); // true