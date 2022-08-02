// const lottos = [0, 0, 0, 0, 0, 0];
// const win_nums = [[38, 19, 20, 40, 15, 25]];
const lottos = [45, 4, 35, 20, 3, 9];
const win_nums = [20, 9, 3, 45, 4, 35];
function solution(lottos, win_nums) {
    var answer = [];

    let intersection = lottos.filter((lotto) => win_nums.includes(lotto));
    let damaged = lottos.filter((lotto) => lotto === 0);

    let max = intersection.length + damaged.length;
    let row = intersection.length;

    let ranks = [6, 5, 4, 3, 2];
    let rank = new Map();

    ranks.forEach((e, i) => {
        rank.set(e, i + 1);
    });

    answer = [rank.get(max) || 6, rank.get(row) || 6];

    console.log(answer);
}
solution(lottos, win_nums);
