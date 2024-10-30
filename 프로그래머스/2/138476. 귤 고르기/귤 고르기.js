function solution(k, tangerine) {
    var answer = 0;
    var temp = 0;

    const countMap = new Map();
    tangerine.forEach((t) => {
        countMap.set(t, (countMap.get(t) || 0) + 1);
    });

    const sortedCounts = Array.from(countMap.values()).sort((a, b) => b - a);

    for (let i = 0; i < sortedCounts.length; i++) {
        temp += sortedCounts[i];
        if (temp >= k) {
            answer = i + 1;
            break;
        }
    }

    return answer;
}
