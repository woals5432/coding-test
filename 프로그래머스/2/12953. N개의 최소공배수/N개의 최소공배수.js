function gcd(a,b){
  let asd = 0;
 while(b !== 0){
 asd = a % b
 a = b
 b = asd
 }
return a
}

function solution(arr) {
    
    let result = arr[0];
 
 for(let i = 1; i < arr.length; i++){
 result = (result * arr[i])/ gcd(result,arr[i])
}

return  result
    
}