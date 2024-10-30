function solution(k, tangerine) {
    var answer = 0;
    var temp = 0;

    // Map을 사용하여 각 귤의 크기별 빈도수 카운팅
    const countMap = new Map();
    tangerine.forEach((t) => {
        countMap.set(t, (countMap.get(t) || 0) + 1);
    });

    // 빈도수를 내림차순으로 정렬
    const sortedCounts = Array.from(countMap.values()).sort((a, b) => b - a);

    // 정렬된 빈도수 배열에서 필요한 만큼 누적하여 `k` 이상이 되도록 함
    for (let i = 0; i < sortedCounts.length; i++) {
        temp += sortedCounts[i];
        if (temp >= k) {
            answer = i + 1;
            break;
        }
    }

    return answer;
}
