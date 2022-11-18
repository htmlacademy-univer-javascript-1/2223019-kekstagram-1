function getRandomNumber(from, to) {
    if (from >= 0 && to >= from){
      return Math.floor(Math.random() * (to - from + 1)) + from;
    } else if (from >= 0 && from >= to) {
      return Math.floor(Math.random() * (from - to + 1)) + to;
    } else return 'Вы ввели отрицательные числа';
  
  };
function getNonRepetitive(mas,from,to){
    let value = getRandomNumber(from,to);
    while(mas.includes(value)){
        value = getRandomNumber(from,to);
    }
    mas.push(value)
    return value;
}
export{getNonRepetitive,getRandomNumber};