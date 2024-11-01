function solution(n, left, right) {
    var result = [];

    // `n x n` 배열을 순차적으로 펼치기 위한 로직
    for (let i = left; i <= right; i++) {
        // `i`를 n으로 나눈 몫과 나머지를 통해 값을 계산
        result.push(Math.max(Math.floor(i / n) + 1, (i % n) + 1));
    }

    return result;
}
