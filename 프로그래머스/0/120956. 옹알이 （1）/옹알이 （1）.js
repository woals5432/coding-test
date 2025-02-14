function solution(babbling) {
    let a = ["aya", "ye", "woo", "ma"]
    var answer = 0;
    for(let i = 0;i < babbling.length;i++){
    let word = babbling[i].replace(/aya|ye|woo|ma/g, ""); // 발음 가능한 단어 제거
        
        if (word === "") { // 제거 후 빈 문자열이면 발음 가능!
            answer += 1;
        }
    }
    return answer;
}