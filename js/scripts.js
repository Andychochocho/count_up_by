function countByInterval(countTo, countBy) {
  if (countBy === undefined || countTo === undefined) {
    // alert("Please fill out all values");
    return false;
  } else if (countBy === 0){
    // alert("Can't use 0 for increment value")
    return false;
  } else if (isNaN(countTo) || isNaN(countBy)) {
    // alert("Please enter numbers only");
    return false;
  }
  var array = [];
  if (countTo <= 0) {
    for (var i = countBy; i >= countTo; i+= countBy) {
      array.push(i);
    }
  } else {
    for (var i = countBy; i <= countTo; i+= countBy) {
      array.push(i);
    }
  }
  return array;
}
