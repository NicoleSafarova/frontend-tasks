// https://rubaxa.github.io/playground/#romannumbers

const defineRomanRange = () => {
  const romanToDecimal = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
    X: 10,
  };

  for (const [roman, value] of Object.entries(romanToDecimal)) {
    Object.defineProperty(Number.prototype, roman, {
      get() {
        return Array.from({ length: value }, (_, i) => this + i);
      },
      configurable: true,
    });
  }
};

defineRomanRange();

console.log(0..X)