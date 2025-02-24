function solution(n) {
    let a = 0;
    let b = 1;
    
    for(let i =2; i <=n;i++){
        let temp = (a + b) % 1234567;
        a = b;
        b = temp
    }
    console.log(b)
    return  b ;
}