function solution(str1, str2) {
    const makePairs = (str) => {
        const pairs = [];
        for (let i = 0; i < str.length - 1; i++) {
            const pair = str[i] + str[i + 1];
            if (/^[A-Z]{2}$/.test(pair)) pairs.push(pair);
        }
        return pairs;
    };

    const cleanedStr1 = str1.toUpperCase();
    const cleanedStr2 = str2.toUpperCase();
    const arr1 = makePairs(cleanedStr1);
    const arr2 = makePairs(cleanedStr2);

    // 각 원소의 개수를 기록
    const countMap = (arr) => {
        const map = {};
        arr.forEach(item => map[item] = (map[item] || 0) + 1);
        return map;
    };

    const map1 = countMap(arr1);
    const map2 = countMap(arr2);

    // 교집합과 합집합 계산
    let intersection = 0;
    let union = 0;

    const allKeys = new Set([...Object.keys(map1), ...Object.keys(map2)]);
    allKeys.forEach(key => {
        const count1 = map1[key] || 0;
        const count2 = map2[key] || 0;
        intersection += Math.min(count1, count2);
        union += Math.max(count1, count2);
    });

    // 자카드 유사도 계산
    return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
