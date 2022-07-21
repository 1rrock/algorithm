const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];
function solution(lottos, win_nums) {
    var answer = [];

    let filter = lottos.filter((lotto) => win_nums.includes(lotto));
    let zeros = lottos.filter((lotto) => lotto == 0);

    let max = filter.length + zeros.length;
    let low = filter.length;

    const order = [6, 5, 4, 3, 2];
    const rank_max = order.findIndex((r) => r == max) >= 0 ? order.findIndex((r) => r == max) + 1 : 6;
    const rank_row = order.findIndex((r) => r == row) >= 0 ? order.findIndex((r) => r == row) + 1 : 6;
    answer = [rank_max, rank_row];
    return answer;
}
solution(lottos, win_nums);
