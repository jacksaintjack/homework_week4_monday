var inputValues = [];
var answer;
var displayArea = document.getElementById('displayArea');
var inputDisplay;
var displayReturn = function(){
  inputDisplay = inputValues.join("");
  return inputDisplay;
};
var handlerSelect;
var backgroundHandler = function(){
  handlerSelect.style.background = 'rgba(104, 178, 91, 0.7)';
  setTimeout(function(){
  handlerSelect.style.background = '#68B25B';
},100);
};

var colorHandler = function(){
  handlerSelect.style.color = 'white';
  setTimeout(function(){
  handlerSelect.style.color = 'black';
},100);
};

var clickNumber = function(){
  inputValues.push($(this).html());
  displayReturn();
  displayArea.innerText = inputDisplay;
  handlerSelect = this;
  backgroundHandler();
}

var clickOperator = function(){
  inputValues.push($(this).html());
  displayReturn()
  displayArea.innerText = inputDisplay;
  handlerSelect = this;
  colorHandler();
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
