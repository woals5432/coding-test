function solution(s) {
    var answer = true;
    const regex = /^\d+$/;
    
    return (s.length === 4 || s.length === 6) && regex.test(s);
}