function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

const RandomArrNumber = () => {
  let randomNum = randomNumber(0, numbers.length - 1);
  let randomNumberValue = numbers[randomNum];
  if (randomNumberValue < 10) {
    randomNum = "0" + randomNumberValue;
  }
  numbers = numbers.filter((item) => item !== randomNumberValue);
  return randomNumberValue;
};

const createObject = () => ({
  autor: {
    avatar: `img/avatars/user${RandomArrNumber()}.png`,
  },
});

const resArr = Array.from({ length: 10 }, createObject);
console.log(resArr);
console.log(createObject());
