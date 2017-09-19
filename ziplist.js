
const testList1 = ['1', '2', '3'];
const testList2 = ['a', 'b', 'c'];

function zipList(list1, list2) {
  const output = [];
  for(let i = 0; i < list1.length; i++) {
    output.push(list1[i], list2[i]);
  }
  return output;
}

console.log(zipList(testList1, testList2));

function zipListTheSimpleWay(list1, list2) {
  return _.zip(list1, list2);
}

console.log(zipListTheSimpleWay(testList1, testList2));