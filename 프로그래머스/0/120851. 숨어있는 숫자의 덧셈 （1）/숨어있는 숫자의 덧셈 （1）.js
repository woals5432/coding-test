function solution(my_string) {
    let a = my_string.match(/\d/g)
    let answer = 0;
    for(let i = 0;i<a.length;i++){
        answer += Number(a[i])
    }
    
    return answer;
}