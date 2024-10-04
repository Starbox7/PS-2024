function solution(n) {
    if (n < 2) return 0; // 2보다 작은 경우 소수가 없음
    
    // 소수 판별 배열 생성 (처음엔 모두 소수로 가정)
    let sieve = Array(n + 1).fill(true);
    sieve[0] = sieve[1] = false;  // 0과 1은 소수가 아님

    // 에라토스테네스의 체 알고리즘
    for (let i = 2; i * i <= n; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= n; j += i) {
                sieve[j] = false;  // i의 배수들은 소수가 아님
            }
        }
    }
    
    // true로 남은 값들의 개수를 카운트 (소수의 개수)
    return sieve.filter(isPrime => isPrime).length;
}
