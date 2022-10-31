// 크레인
const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
    var answer = 0;
    const boards = board;
    let bucket = [];
    for (const move in moves) {
        for (const board in boards) {
            let now = boards[board][moves[move] - 1];
            if (now !== 0) {
                boards[board][moves[move] - 1] = 0;
                if (now == bucket[bucket.length - 1]) {
                    bucket.pop();
                    answer += 2;
                } else {
                    bucket.push(now);
                }
                break;
            }
        }
    }
    return answer;
}
solution(board, moves);
