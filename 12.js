// 두 큐 합 같게 만들기

function solution(queue1, queue2) {
    const TOTAL_ARRAY = [...queue1, ...queue2];
    const MAXCOUNT = 4*TOTAL_ARRAY.length;
    const sum = (array)=>array.reduce((a,b)=>a+b);
    const TARGET = sum(TOTAL_ARRAY)/2;
    let count = 0;
    let start = 0;
    let end = queue1.length;
    let totalSum = sum(TOTAL_ARRAY.slice(start, end));
    while(count<=MAXCOUNT){
        if(TARGET > totalSum){
            totalSum += TOTAL_ARRAY[end];
            end++;
        }else if(TARGET < totalSum){
            totalSum -= TOTAL_ARRAY[start];
            start++;      
        }else if(TARGET === totalSum){
            return count;
        }
        count++;
    }
    return -1;
    // const arr = [...queue1, ...queue2];
    // let start = 0;
    // let end = queue1.length
    // let count = 0;
    // let maxCount = 4*arr.length;

    // const sum = (obj) => obj.reduce((a, b) => a + b);

    // const result = sum(arr) / 2;

    // let hap = sum(arr.slice(start, end));
    // while (count <= maxCount) {
    //     if (result > hap) {
    //         hap += arr[end];
    //         end++
    //     } else if (result < hap) {
    //         hap -= arr[end];
    //         start++;
    //     } else if (result === hap) {
    //         return count;
    //     }
    //     count++;
    // }
    // return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
// console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));