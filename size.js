// https://rubaxa.github.io/playground/#array.size


// Реализоватьсвойство `size`  у всех массивов,
// которое работало бы точно так же, как и `length`.

const object1 = Array.prototype;

Object.defineProperty(object1, "size", {
  get: function() {return this.length},
  set: function(new_size) { return new_size >= 0 ? this.length = new_size : 0},
});

// #1
console.log([0, 1].size); // 2

// #2
var arr = [0, 1, 2];
arr.size = 0;
console.log(arr); // []