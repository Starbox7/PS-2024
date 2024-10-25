function solution(wallpaper) {
    var answer = [Infinity, Infinity, -1, -1];
    
    for (let i = 0; i < wallpaper.length; i++) {
        if (wallpaper[i].indexOf("#") != -1) {
            // 가장 왼쪽의 "#" 인덱스 업데이트 (최소값)
            answer[1] = Math.min(answer[1], wallpaper[i].indexOf("#"));
            
            // 가장 오른쪽의 "#" 인덱스 업데이트 (최대값)
            answer[3] = Math.max(answer[3], wallpaper[i].lastIndexOf("#") + 1);
            
            // 가장 위쪽 행 업데이트 (최소 i 값)
            answer[0] = Math.min(answer[0], i);
            
            // 가장 아래쪽 행 업데이트 (최대 i 값)
            answer[2] = Math.max(answer[2], i + 1);
        }
    }

    return answer;
}
