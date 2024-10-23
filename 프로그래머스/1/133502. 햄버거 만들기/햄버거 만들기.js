function solution(ingredient) {
    var answer = 0;
    var stack = [];
    
    // 재료 배열을 순회하며 스택에 쌓기
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);

        // 스택의 마지막 4개의 요소가 [1, 2, 3, 1]이면 햄버거를 만든다
        if (stack.length >= 4) {
            const lastFour = stack.slice(-4); // 마지막 4개의 요소 확인
            if (lastFour.join('') === '1231') {
                stack.splice(-4); // 마지막 4개의 요소 제거
                answer += 1; // 햄버거 1개 추가
            }
        }
    }

    return answer;
}
