function minToSec(time){
    const [min, sec] = time.split(":")
    const result = Number(sec) + (Number(min) * 60)
    
    return result
}

function solution(video_len, pos, op_start, op_end, commands) {
    var answer = [];
    var info = {
        len: minToSec(video_len), 
        pos: minToSec(pos), 
        start: minToSec(op_start), 
        end: minToSec(op_end)
    }
    
    commands.forEach((command, index) => {
        if(info.start<=info.pos && info.pos<info.end){
            info.pos = info.end
        }
        
        command === "next" ? info.pos += 10 : info.pos -= 10
        
        if(info.pos > info.len) info.pos = info.len
        else if(info.pos < 0) info.pos = 0 
        
        if(info.start<=info.pos && info.pos<info.end){
            info.pos = info.end
        }
    })
    
    if(Math.floor(info.pos/60) < 10) answer.push(0)
    answer.push(Math.floor(info.pos/60))
    answer.push(":")
    if(info.pos%60 < 10) answer.push(0)
    answer.push(info.pos%60)
    
    return answer.join("");
}