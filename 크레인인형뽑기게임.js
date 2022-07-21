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
    let boards = new Map();
    let bucket = [];

    board.forEach((e, i) => {
        boards.set(i, e);
    });
    console.log(bucket);

    return answer;
}
solution(board, moves);
