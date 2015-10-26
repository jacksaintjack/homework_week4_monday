var inputValues = [];
var answer;
var displayArea = document.getElementById('displayArea');
var inputDisplay;
var displayReturn = function(){
  inputDisplay = inputValues.join("");
  return inputDisplay;
};

var clickNumber = function(){
  inputValues.push($(this).html());
  displayReturn();
  displayArea.innerText = inputDisplay;
}

var clickOperator = function(){
  inputValues.push($(this).html());
  displayReturn()
  displayArea.innerText = inputDisplay;
}



$('.number').click(clickNumber);
$('.operator').click(clickOperator);

$("#equal").click(function(){
  answer = eval(inputDisplay)
  function emptyArray(){
    inputValues = [];
  }
  function lastAnswer(){
    inputValues.push(answer);
  }
  emptyArray();
  lastAnswer();
  displayArea.innerText = answer;
  return answer;
});
