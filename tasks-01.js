//1. Return Negative
//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  return -Math.abs(num);
}
//2. Grasshopper - Messi goals function
//https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
//3. Terminal game move function
//https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move(position, roll) {
  return position + 2 * roll;
}
//4. Grasshopper - Personalized Message
//https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet(name, owner) {
  return 'Hello ' + (name === owner ? 'boss' : 'guest');
}
//5. Keep Hydrated
//https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  return Math.floor(time / 2);
}
//6. Opposites Attract
//https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
