function solution(s) {
    var answer = '';
    let words = "";
    words = s.split(" ")
    console.log(words)
    
    //word의 배열 길이만큼 반복
    for(let i = 0;i < words.length;i++){
        
        for(let ii = 0; ii < words[i].length; ii++){
            
            if(ii == 0) {
                answer += words[i][ii].toUpperCase();
            }else {
                answer += words[i][ii].toLowerCase();
            }
        }
         if (i < words.length - 1) answer += " ";
        
    }
    
    return answer;
}