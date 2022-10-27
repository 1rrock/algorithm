const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1]
function solution(ingredient) {
    var answer = 0;
    var order = JSON.stringify([1,2,3,1]);
    
    for(let i=0; i<=ingredient.length-4; i++){
        const cut = JSON.stringify(ingredient.slice(i, i+4));
        if(order == cut){
            ingredient.splice(i, 4);
            answer+=1;
            i-=3;
        }
    }
    console.log(answer)
}

solution(ingredient);