function createGame(){
    score = 0
    function increaseScore(points){
        score += points
        console.log(`+${points}pts`)
    }
    function decreaseScore(points){
        score -= points
        console.log(`-${points}pts`)
    }
    function getScore(){
        return score;
    }
    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();
game.increaseScore(10);
game.increaseScore(20);
game.decreaseScore(5);
game.decreaseScore(10);
console.log(`${game.getScore()}pts`); // 15