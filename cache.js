function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    console.log(args); //an array object of numbers
    const key = args.toString();
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

function add(a, b) {
  return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3)); // Calculates and caches result
console.log(memoizedAdd(2, 3)); // Returns cached result
