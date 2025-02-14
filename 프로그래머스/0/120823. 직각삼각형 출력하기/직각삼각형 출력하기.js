const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    let n = Number(line);
    
    // 삼각형 출력
    let result = "";
    for (let i = 1; i <= n; i++) {
        result += "*".repeat(i) + "\n";
    }
    console.log(result);
    
    rl.close();
});









