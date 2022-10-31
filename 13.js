// 옹알이

function solution(babbling) {
    var answer = 0;
    const flt = ["aya", "ye", "woo", "ma"];
    babbling.forEach(babe => {
        console.log(babe.replace(flt[0],''))
    })
    return answer;
}

solution(["aya", "yee", "u", "maa", "wyeoo"]);