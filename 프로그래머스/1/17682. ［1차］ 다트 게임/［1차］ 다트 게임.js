function isNumber(value) {
    return /^-?\d+(\.\d+)?$/.test(value);
}

function solution(dartResult) {
    var answer = 0;
    var result = [];
    var temp = -1;
    var numberBuffer = '';  // 숫자를 저장할 버퍼

    dartResult.split('').forEach((e, index) => {
        if (isNumber(e)) {
            numberBuffer += e;  // 숫자가 여러 자릿수일 수 있으므로 버퍼에 추가
        } else {
            if (numberBuffer !== '') {
                // 숫자가 끝나면 버퍼에 쌓인 숫자를 처리
                result.push({ score: parseInt(numberBuffer), area: '', option: '' });
                numberBuffer = '';  // 버퍼 초기화
                temp += 1;
            }
            if (/^[A-Za-z]+$/.test(e)) {
                result[temp].area = e;
            } else {
                result[temp].option = e;
            }
        }
    });

    // // 마지막 숫자가 처리되지 않은 경우를 대비
    // if (numberBuffer !== '') {
    //     result.push({ score: parseInt(numberBuffer), area: '', option: '' });
    // }

    // 점수 계산
    for (let i = 0; i < result.length; i++) {
        switch (result[i].area) {
            case 'D':
                result[i].score = result[i].score * result[i].score;
                break;
            case 'T':
                result[i].score = result[i].score * result[i].score * result[i].score;
                break;
        }

        switch (result[i].option) {
            case '*':
                result[i].score = result[i].score * 2;
                if (i - 1 >= 0) {
                    result[i - 1].score = result[i - 1].score * 2;
                }
                break;
            case '#':
                result[i].score = result[i].score * -1;
                break;
        }
    }

    // 최종 합산
    result.forEach((e) => {
        answer += e.score;
    });

    return answer;
}
