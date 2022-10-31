// 문자열압축
const s1 = "aabbaccc"; //2a2ba2c
const s2 = "ababcdcdababcdcd"; //2ababcdcd
const s3 = "abcabcdede";
const s4 = "abcabcabcabcdededededede";
const s5 = "xababcdcdababcdcd";
const solution = (s) => {
    var answer = 0;
    const range = [...Array(s.length)].map((_, i) => i + 1);

    Math.min(
        ...range.map((i) => {
            compress(s, i).length;
        })
    );
};

const compress = (s, n) => {
    const make = ([a, l, c]) => `${a}${c > 1 ? c : ""}${l}`;
    return make(chunk(s, n).reduce(([a, l, c], e) => (e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1]), ["", "", 0]));
};

const chunk = (s, n) => (s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)]);

solution(s1);
// solution(s2);
// solution(s3);
// solution(s4);
// solution(s5);
