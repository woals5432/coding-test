function solution(s) {
    var a = Infinity;
    var a2 = -Infinity;
    s = s.split(" ").map(Number); 

    for (let i = 0; i < s.length; i++) {
        for (let ii = s.length - 1; ii >= 0; ii--) {
            if (s[i] < a) a = s[i]; 
            if (s[ii] > a2) a2 = s[ii]; 
        }
    }
    return `${a} ${a2}`;
}
