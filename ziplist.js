const char = ['a', 'b', 'c'];
const num = [1, 2, 3];
function zipList(arr1, arr2) {
  const combined = [];
  for (let i = 0; i < arr1.length; i++) {
    combined.push(arr1[i], arr2[i]);
  }
  return combined;
}

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}
console.log(zipList(char, num));
console.log(zipListTheSimpleWay(char, num));
