const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];
function solution(record) {
    var answer = [];
    let user_id = new Map();
    record.forEach((user) => {
        const [state, id, nick] = user.split(" ");
        // 마지막 닉네임으로 저장
        if (nick !== undefined) {
            user_id.set(id, nick);
        }
    });

    record.forEach((user) => {
        const [state, id, nick] = user.split(" ");
        if (state == "Enter") {
            answer.push(`${user_id.get(id)}님이 들어왔습니다.`);
        } else if (state == "Leave") {
            answer.push(`${user_id.get(id)}님이 나갔습니다.`);
        }
    });

    return answer;
}
solution(record);
