function solution(phone_book) {
    var answer = true;
    
    phone_book.sort()
    phone_book.forEach((phone, index) => {
        if(index < phone_book.length - 1 && phone_book[index+1].startsWith(phone)) answer = false
    })
    
    return answer;
}