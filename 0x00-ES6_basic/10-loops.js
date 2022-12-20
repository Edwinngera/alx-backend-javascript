export default function appendToEachArrayValue(array, appendString) {
  const array2 = [];
  for (let item of array) {
    array2.push(appendString + item);
  }

  return array2;
}
