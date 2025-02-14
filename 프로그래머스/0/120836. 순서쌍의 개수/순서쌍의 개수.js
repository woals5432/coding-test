
    function solution(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) { // n을 i로 나눌 수 있으면 (즉, 약수면)
            count++; // 순서쌍이 가능하므로 count 증가
        }
    }
    return count;
}