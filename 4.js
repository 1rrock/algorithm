// 신규아이디추천
function solution(new_id) {
    let answer = new_id.toLowerCase();
    answer = answer.replace(/[^a-z0-9-_.]/gi, "");
    answer = answer.replace(/\.{2,}/gi, ".");
    answer = answer[0] == "." ? answer.substring(1) : answer;
    answer = answer.slice(0, 15);
    answer = answer[answer.length - 1] == "." ? answer.slice(0, -1) : answer;
    answer = answer === "" ? "a" : answer;
    if (answer.length <= 2) {
        while (answer.length < 3) {
            answer += answer[answer.length - 1];
        }
    }
    return answer;
}
console.log(solution("...!@BaT#*..y.abcdefghi-jklm..."));
