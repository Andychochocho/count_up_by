function countByInterval(countTo, countBy) {
  if (countBy === undefined || countTo === undefined) {
    alert("Please fill out all values");
    return false;
  } else if (countBy === 0){
    alert("Can't use 0 for increment value")
    return false;
  } else if (isNaN(countTo) || isNaN(countBy)) {
    alert("Please enter numbers only");
    return false;
  }
  var array = [];
  if (countTo <= 0) {
    if (countBy >= 0) {
      alert("Your values are incompatible");
      return false;
    }
    for (var i = countBy; i >= countTo; i+= countBy) {
      array.push(i);
    }
  } else {
    if (countBy <= 0) {
      alert("Your values are incompatible");
      return false;
    }
    for (var i = countBy; i <= countTo; i+= countBy) {
      array.push(i);
    }
  }
  return array;
}

$(function(){
  $("form#countUp").submit(function(event){
    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());
    var result = countByInterval(countTo,countBy);
    for (var i = 0; i < result.length; i++) {
      $("#result").append(result[i] + ", ");
    }
    $('#result').show();
    event.preventDefault();
  });
});
