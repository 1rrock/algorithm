const array = [1, 30, 4, 21, 100000];
const commands = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
];
function solution(array, commands) {
    const [a, b, c] = commands;
    var answer = [];
    for (const command of commands) {
        // sort() 메소드는 배열의 요소를 문자열로 비교하기때문에 값을 비교해줘야함
        let cmd_sort = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
        answer.push(cmd_sort[command[2] - 1]);
    }
    return answer;
}
solution(array, commands);
