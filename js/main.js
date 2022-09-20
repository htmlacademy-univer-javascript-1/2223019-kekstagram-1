const GetRandomNumber = function (from, to) {
  if (from >= 0 && to >= from){
    return Math.floor(Math.random() * (to - from + 1)) + from;
  } else if (from >= 0 && from >= to) {
    return Math.floor(Math.random() * (from - to + 1)) + to;
  } else return console.log ('Кажется вы ввели отрицательные числа')

};
// источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const LengthCheckOfString = function (text, max_length) {
  if (text >= max_length) {
    return true;
  } else return false;
}
