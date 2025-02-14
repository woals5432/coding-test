function solution(n) {
    let a = 0;
    n = String(n)
    for(i = 0; i< n.length ; i++){
        a+= Number(n[i])
    }
    return  a
}