function solution(elements) {
    const uniqueSums = new Set();
    const length = elements.length;
    
    for (let count = 1; count <= length; count++) { 
        for (let j = 0; j < length; j++) { 
            let sum = 0;

            for (let k = 0; k < count; k++) { 
                sum += elements[(j + k) % length]; 
            }

            uniqueSums.add(sum); 
        }
    }

    return uniqueSums.size; 
}
