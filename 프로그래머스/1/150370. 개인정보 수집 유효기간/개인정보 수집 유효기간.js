function solution(today, terms, privacies) {
    var answer = [];
    
    const todayArray = today.split('.').map(Number)
    let stateArray = []
    let termsJson = {}
    
    terms.forEach((term) => {
        const [type, duration] = term.split(' ');
        termsJson[type] = Number(duration);
    })
    
    privacies.forEach((privacy, index) => {
        const [date, type] = privacy.split(' ');
        const privacyDateArray = date.split('.').map(Number);
        
        privacyDateArray[1] += termsJson[type];
        if (privacyDateArray[1] > 12) {
            privacyDateArray[0] += Math.floor((privacyDateArray[1] - 1) / 12);
            privacyDateArray[1] = (privacyDateArray[1] - 1) % 12 + 1;
        }
        
        if (
            privacyDateArray[0] < todayArray[0] ||
            (privacyDateArray[0] === todayArray[0] && privacyDateArray[1] < todayArray[1]) ||
            (privacyDateArray[0] === todayArray[0] && privacyDateArray[1] === todayArray[1] && privacyDateArray[2] <= todayArray[2])
        ) {
            answer.push(index + 1);
        }
    })
    
    
    return answer;
}