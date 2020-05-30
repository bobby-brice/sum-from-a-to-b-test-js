
// eslint-disable-next-line func-style
function sum(fromN, toN) {

  if (fromN === 0) {
    return toN;
  } else if (fromN === toN) {
    return fromN;
  } else if (fromN === (toN - 1)) {
    return fromN + toN;
  }
  if ((toN - 1) > fromN) {
    return fromN + sum(fromN + 1, toN);
  }

}
console.log(sum(3,7));

module.exports = sum;
