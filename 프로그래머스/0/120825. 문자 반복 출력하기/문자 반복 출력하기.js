function solution(my_string, n) {
    let answer = "";
    for (let i = 0; i < my_string.length; i++) {
        answer += my_string[i].repeat(n); // 문자를 n번 반복
    }
    return answer;
}