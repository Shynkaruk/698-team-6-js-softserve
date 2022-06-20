//Iryna's solution

//1 https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  if (num <= 0) {
    return num;
  }
  return -num;
}

//2 https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//3 https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move(position, roll) {
  return position + 2 * roll;
}

//4 https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet(name, owner) {
  if (name === owner) {
    return 'Hello boss';
  }
  return 'Hello guest';
}

//5 https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  return Math.floor(time / 2);
}

//6 https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2) {
  if (flower1 % 2 === flower2 % 2) {
    return false;
  }
  return true;
}

// solution by Vlad

//1  https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  if (num > 0) {
    num *= -1;
  } else {
    num = num;
  }
  return num;
}

//or

function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

//maybe or
function makeNegative(num) {
  return -Math.abc(num);
}

//2 https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//3 https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function move(position, roll) {
  return position + 2 * roll;
}

//4 https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

function greet(name, owner) {
  if (name === owner) {
    return 'Hello boss';
  } else {
    return 'Hello guest';
  }
}

//5 (https://www.codewars.com/kata/keep-hydrated-1/train/javascript)

function litres(time) {
  const litr = time / 2;
  return litr - (litr % 1);
}

//or 

function litres(time) {
  return Math.floor(time / 2);
}

//6 https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

//solution by (Yurii Shlapak)

//1 https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  if (num > 0) {
    return - num;
  } else {
    return num;
  }
 }
 
 //2 https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
 
 function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
   return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
 }
 //3 https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
 
 function move (position, roll) {
   return position+roll*2;
 }
 
 //4 https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
 
 function greet (name, owner) {
   if (name === owner) {
     return 	'Hello boss';
   }
   else {
     return 'Hello guest';
   }
 }
 
 //5 https://www.codewars.com/kata/keep-hydrated-1/train/javascript

 function litres(time) {
  return time/2-((time/2)%1);
}
 
 //6 https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
 
 function lovefunc(flower1, flower2){
   if (flower1%2!=flower2%2){
       return true;
   }
     else {
       return false;
     }
 }

 //Yuliia Tomashevska solution

//1 https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  return Math.abs(num) * -1;
}

//2 https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//3 https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move (position, roll) {
  return position + (roll * 2);
}

//4 https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet (name, owner) {
  if (name === owner) return 'Hello boss';
  return 'Hello guest';
}

// 5  https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  return Math.floor(time / 2);
}

//6 https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2){
  return flower1%2 !== flower2%2
}

//Tania
//1. https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  if (num < 0) return num;
  else return -num;
}

//2. https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//3. https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move (position, roll) {
  return position + roll * 2;
}

//4. https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

//5. https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  return Math.floor(time / 2);
}

//6. https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2) {
  if (flower1 % 2 != flower2 % 2) {
    return true;
  } else {
    return false;
  }
}
