function solution(strings, n) {
    
    return strings.sort((a, b) => {
        const charComparison = a[n].localeCompare(b[n])
        if(charComparison !== 0){
            return charComparison
        } else {
            return a.localeCompare(b)
        }
    })
}