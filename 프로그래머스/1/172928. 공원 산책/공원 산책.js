function solution(park, routes) {
    let x = 0, y = 0;
    const parkArray = park.map(row => row.split(''));
    
    // 시작 위치 찾기
    parkArray.forEach((row, rowIndex) => {
        const colIndex = row.indexOf("S");
        if (colIndex !== -1) {
            y = rowIndex;
            x = colIndex;
        }
    });
    
    // 경로 이동
    routes.forEach(route => {
        const [direction, distanceStr] = route.split(" ");
        const distance = Number(distanceStr);
        
        let [newX, newY] = [x, y];
        
        if (direction === "E") newX += distance;
        else if (direction === "W") newX -= distance;
        else if (direction === "S") newY += distance;
        else if (direction === "N") newY -= distance;
        
        // 이동 범위가 park 배열을 벗어나면 무시
        if (newX < 0 || newX >= parkArray[0].length || newY < 0 || newY >= parkArray.length) return;
        
        // 장애물이 없는지 확인
        let isPathClear = true;
        if (direction === "E" || direction === "W") {
            const start = Math.min(x, newX);
            const end = Math.max(x, newX);
            for (let i = start; i <= end; i++) {
                if (parkArray[y][i] === "X") {
                    isPathClear = false;
                    break;
                }
            }
        } else if (direction === "S" || direction === "N") {
            const start = Math.min(y, newY);
            const end = Math.max(y, newY);
            for (let i = start; i <= end; i++) {
                if (parkArray[i][x] === "X") {
                    isPathClear = false;
                    break;
                }
            }
        }
        
        // 이동이 가능하다면 위치 업데이트
        if (isPathClear) {
            x = newX;
            y = newY;
        }
    });
    
    return [y, x];
}
