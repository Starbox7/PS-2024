function solution(d, budget) {
    var answer = 0;

    for (var i = 0; i < d.length - 1; i++) {
        var minIndex = i;
        
        for (var j = i + 1; j < d.length; j++) {
            if (d[j] < d[minIndex]) {
                minIndex = j; 
            }
        }

        var temp = d[i];
        d[i] = d[minIndex];
        d[minIndex] = temp;
    }

    var sum = 0;

    for (var i = 0; i < d.length; i++) {
        if (sum + d[i] > budget) {
            break;
        }
        sum += d[i];
        answer++;
    }

    return answer;
}
