const getRandomNumber = function (from, to) {
  if (from >= 0 && to >= from){
    return Math.floor(Math.random() * (to - from + 1)) + from;
  } else if (from >= 0 && from >= to) {
    return Math.floor(Math.random() * (from - to + 1)) + to;
  } else return 'Вы ввели отрицательные числа';

};

const COMMENTS = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?',
];
const NAMES = ['Алексей','Андрей','Виктория','Дмитрий','Игорь','Кристина','Эвелина'];
function createComments(length){
  let randomComments = [];
  let idmas = [];
  for(let i = 0; i < length; i++){
    let id = getNonRepetitive(idmas,1,1000);
    let avatar = `img/avatar-${getRandomNumber(1,6)}.svg`;
    let message = COMMENTS[getRandomNumber(0,COMMENTS.length)];
    let name = NAMES[getRandomNumber(0,NAMES.length)];
    randomComments.push({id,avatar,message,name});
  }
  return randomComments;
}
function getNonRepetitive(mas,from,to){
  let value = getRandomNumber(from,to);
  while(mas.includes(value)){
    value = getRandomNumber(from,to);
  }
  mas.push(value)
  return value;
}
function createObjects(){
  let objects = [];
  let idmas = [];
  let imas = [];
  for(let j = 0; j < 25;j++){
    let id = getNonRepetitive(idmas,1,25);
    let i = getNonRepetitive(imas,1,25);
    let url = `photos/${i}.jpg`;
    let description = "myPhoto";
    let likes = getRandomNumber(15,200);
    let comments = createComments(3);
    objects.push({id,url,description,likes,comments})
  }
  return objects;
}


