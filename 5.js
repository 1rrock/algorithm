// 야간전술보행
const distance = 10;
const scope = [
    [3, 4],
    [5, 8]
];
const times = [
    [2, 5],
    [4, 3]
];
// const distance = 12;
// const scope = [
//     [7, 8],
//     [4, 6],
//     [11, 10]
// ];
// const times = [
//     [2, 2],
//     [2, 4],
//     [3, 3]
// ];

function solution(distance, scope, times) {
    return Math.min(...scope.map((oneScope, idx) => {
        const [s1, s2] = oneScope
        const sMin = Math.min(s1, s2);
        const sMax = Math.max(s1, s2);
        const [t1, t2] = times[idx];
        const timeSum = t1 + t2;

        for (let i = sMin; i <= sMax; i++) {
            const prefix = i % timeSum || timeSum;
            console.log(i, timeSum)

            if (prefix <= t1) {
                return i;
            }
        }
        return distance;
    }));
}

solution(distance, scope, times);