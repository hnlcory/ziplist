// 3 attempts, #1 DNF, #2 DNF, #3 17.54

function zipList(data1, data2) {
  const len = data1.length;
  const returnList = [];
  for (let i = 0; i < len; i++) {
    returnList.push(data1.shift());
    returnList.push(data2.shift());
  }
  return returnList;
}

function zipListTheSimpleWay(data1, data2) {
  return _.flatten(_.zip(data1, data2));
}

const test1 = ['a', 'b', 'c', 'd'];
const test2 = [1, 2, 3, 4];

console.log(zipListTheSimpleWay(test1, test2));
console.log(zipList(test1, test2));
