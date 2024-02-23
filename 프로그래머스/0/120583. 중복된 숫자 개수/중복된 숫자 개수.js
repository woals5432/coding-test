function solution(array, n) {
    let sum = 0;
    for (let a of array){
        if(a === n){
         sum += 1
        }
    }
    return sum;
}