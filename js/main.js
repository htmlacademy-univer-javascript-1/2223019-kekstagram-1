const getRandomNumber = function (from, to) {
  if (from >= 0 && to >= from){
    return Math.floor(Math.random() * (to - from + 1)) + from;
  } else if (from >= 0 && from >= to) {
    return Math.floor(Math.random() * (from - to + 1)) + to;
  } else return 'Вы ввели отрицательные числа';

};
// источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const checkLengthOfString = function (text, maxLength) {
  if (text >= maxLength) {
    return true;
  } else return false;
}
var NAMES = [
'Грегорий',
'Виктор',
'Ангелос',
'Джон',
'Майкл',
'Игорь'
];
var MESSAGE = [
'Всё отлично!',
'В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const makeArrayOfNumbers = function (max) {
  const array = [];
  for (let i = 0; i <= max; i++) {
    array.push(i + 1);
  }
  return array;
};
const NewArray = makeArrayOfNumbers(25);
const userId = getRandomNumber(1,25);
NewArray.splice(NewArray.indexOf(userId), 1);
// данная идея взята с сайта: https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js

let photoId = 0;
photoId++;

const comment = {
id: userId(),
avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
message: MESSAGE[getRandomNumber(0, MESSAGE.length-1)],
name: NAMES[getRandomNumber(0, NAMES.length-1)]
};

const photo = {
  id: photoId,
  url: `photos/${photoId}.jpg`,
  description: 'Летний пейзаж реки Волга',
  likes: getRandomNumber(15, 200),
  comments: [comment]
};
