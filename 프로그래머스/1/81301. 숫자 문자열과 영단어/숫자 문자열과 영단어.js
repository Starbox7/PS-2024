function solution(s) {
    let result = [];
    let tempWord = '';
    
    const numWords = {
        "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4,
        "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9
    };
    
    function isNumeric(value) {
        return !isNaN(value) && !isNaN(parseFloat(value));
    }

    for (let i = 0; i < s.length; i++) {
        if (isNumeric(s[i])) {
            result.push(s[i]);  
        } else {
            tempWord += s[i];  

            if (numWords[tempWord] !== undefined) { 
                result.push(numWords[tempWord]);    
                tempWord = '';  
            }
        }
    }
    return Number(result.join(''));
}

