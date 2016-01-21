function countByInterval(countTo, countBy) {
  if (countBy === undefined || countTo === undefined) {
    alert("Please fill out all values");
    return false;
  }
  var array = [];
  for (var i = countBy; i <= countTo; i+= countBy) {
    array.push(i);
  }
  return array;
}
