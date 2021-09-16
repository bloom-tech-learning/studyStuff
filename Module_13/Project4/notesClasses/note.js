console.log('----------------REVIEW  Web 1.3 Project 4 Note -----------------------');

// a list of stuff where the order matters
const arr = [1, 2, 3, 4, 5];
const objArr = [
  {
    id: 1,
    name: 'Keiran',
    type: 'teacher'
  },
  {
    id: 2,
    name: 'Brian',
    type: 'student'
  },
  {
    id: 3,
    name: 'Deepak',
    type: 'student'
  },
  {
    id: 4,
    name: 'Alex',
    type: 'student'
  }
];

// accessing arrays
// index
arr[arr.length - 1];
arr[4];

// array methods
// .map, .filter, .reduce
// foreach loops
const mappedArr = arr.map((num, index, array) => {
  // console.log(num);
  // console.log(index);
  // console.log(array);
  
  // if (num % 2 === 0) return num;
  // else return null;
  
  return num * 10;
});

const mappedObjArr = objArr.map((obj) => {
  return {
    name: obj.name
  };
  // return obj.name;
});

// console.log(mappedArr);
console.log(mappedObjArr);

const filteredArr = arr.filter((num, index, array) => {
  return num % 2 === 0;
});

// console.log(filteredArr);

// accumulator is your bucket that you're putting values into
// current is the current index value of the array that you're reducing
const reducedArr = arr.reduce((accumulator, current) => {
  // console.log(accumulator);
  return accumulator + current;
}, 0);
// const reducer = (previousValue, currentValue) => previousValue + currentValue;
// console.log(reducedArr);

arr.forEach((num, index, array) => {
  // console.log(num);
});
