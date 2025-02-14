function solution(my_string) {
    let answer = "";
    let vowels = ["a", "e", "i", "o", "u"]; // 모음 리스트

    for (let i = 0; i < my_string.length; i++) {
        if (!vowels.includes(my_string[i])) { // 모음이 아니면 추가
            answer += my_string[i];
        }
    }
    return answer;
}