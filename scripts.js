//1 https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

//Iryna's solution
function makeNegative(num) {
    if (num <= 0) {
        return num;
    }
    return -num;
}


//2 https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

//Iryna's solution
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}


//3 https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

//Iryna's solution
function move(position, roll) {
    return position + 2 * roll;
}


//4 https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

//Iryna's solution
function greet(name, owner) {
    if (name === owner) {
        return 'Hello boss';
    }
    return 'Hello guest';
}


//5 https://www.codewars.com/kata/keep-hydrated-1/train/javascript

//Iryna's solution
function litres(time) {
    return Math.floor(time / 2);
}


//6 https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

//Iryna's solution
function lovefunc(flower1, flower2) {
    if (flower1 % 2 === flower2 % 2) {
        return false;
    }
    return true;
}
