function solution(number, n, m) {
    
    let r= 0;
    
    if(number % n == 0 && number % m == 0){
        r = 1
    }
    
    return r;
}