function solution(n) {
    let count = 0;
    
    
    for(let i = 1; i <=n; i++){
        let result = 0;
        for(let ii = i; ii<=n; ii++){
        result += ii
        if(result == n){
            count++
            break
        }else if(result > n){
            break
        }
        }
    }
    
    return count;
}