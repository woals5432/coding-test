function solution(array, height) {
    const filteredValues = array.filter(value => value > height);
  
  return filteredValues.length;
}