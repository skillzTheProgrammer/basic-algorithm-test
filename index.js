// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function factorize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorize(num - 1);
}

var arrayInt = [34, 7, 23, 32, 5, 62];

function findSum(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  const current = arr.pop();
  console.log({ current });
  return current + findSum(arr);
}

function fibonacci(n) {
  if (n === 0) {
    return [0, 1];
  }
  var s = fibonacci(n - 1);
  s.push(s[s.length - 1] + s[s.length - 2]);
  return s;
}

function sortArray(arr) {
  const result = [];
  const min = Math.min(...arr);
  arr.find((num, index) => {
    if (num === min) {
      result.push(min);
      arr.splice(index, 1);
      return;
    }
    return;
  });

  if (arr.length === 1) {
    result.push(arr[0]);
    return result;
  }
  console.log({ result, arr });
  sortArray(arr);
  return result;
}

const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4];
// const min = Math.min(...arr)
const num = sortArray(arr);
console.log({ num });
