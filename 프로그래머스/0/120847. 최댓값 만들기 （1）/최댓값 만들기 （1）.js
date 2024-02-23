function solution(numbers) {
    let a = numbers.sort((a,b)=>b-a)
    let b = a[0] * a[1]
    return b;
}