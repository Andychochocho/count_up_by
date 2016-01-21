function countByInterval(countTo, countBy) {
  var array = [];
  for (var i = countBy; i <= countTo; i+= countBy) {
    array.push(i);
  }
  return array;
}
