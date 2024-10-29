function solution(id_list, report, k) {
    var answer = [];
    var data = {};

    id_list.forEach((id) => {
        data[id] = { report: new Set(), count: 0, result: 0 }; 
    });

    report.forEach((e) => {
        const [reporter, reported] = e.split(" ");
        data[reporter].report.add(reported); 
    });

 
    Object.keys(data).forEach((user) => {
        data[user].report.forEach((reported) => {
            if (data[reported]) { 
                data[reported].count += 1;
            }
        });
    });

    
    Object.keys(data).forEach((user) => {
        data[user].report.forEach((reported) => {
            if (data[reported].count >= k) { 
                data[user].result += 1;
            }
        });
    });

    id_list.forEach((user) => {
        answer.push(data[user].result); 
    });

    return answer;
}
