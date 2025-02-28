function solution(s){
    var answer = true;
    var a = 0;
    var b = 0;
    
    for(let i = 0; i < s.length;i++){
        if (s[i] === "p" || s[i] === "P") a++;
        if (s[i] === "y" || s[i] === "Y") b++;
        
    }

    return a == b ? true : false;
}