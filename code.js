let container = document.getElementsByClassName("container")[0];
console.log(container);

let firstScreen = container.querySelectorAll(`[name="textview"]`)[0];

let secondScreen = container.querySelectorAll(`[name="textview"]`)[1];

let buttons = container.querySelectorAll(".item");

let memory = null;

let operation = null;


function action(data) {

  switch (data) {


    case "AC":
      clear()

    case "DEL":
      deleteSymb();
      break;

    case "+":
      writeMemory(data);
      break;

    case "-":
      writeMemory(data);
      break;

    case "/":
      writeMemory(data)
      break;

    case "*":
      writeMemory(data)
      break;

    case "=":
      equal();
      break;

    case "±":
      plusMinus()
      break;

      case "±":
        point()
      break;

      case ".":
       spot(data) 
       break

       








    default:
      writeNuber(data)
      break;
  }

}


function writeNuber(data) {
  if (secondScreen.value === "0") {
    secondScreen.value = data

  } else {
    secondScreen.value += data;
  }
}


function deleteSymb() {

  if (secondScreen.value.length === 1 || (secondScreen.value.length === 2 && secondScreen.value[0] === "-")) {
    secondScreen.value = "0";
  } else {
    secondScreen.value = secondScreen.value.slice(0, -1);
  }



}

function getResult(x, y, op) {

  switch (op) {
    case "+":
      return x + y;
      break;
    case "-":
      return x - y;
      break;
    case "*":
      return x * y;
    case "/":
      return x / y;
      break;

    default:
      break;
  }





}

function writeMemory(data) {

  if (operation) {
    memory = getResult(+memory, +secondScreen.value, operation);
    operation = data;
    firstScreen.value = memory + data;
    secondScreen.value = 0;




  } else {
    memory = secondScreen.value;
    secondScreen.value = 0;
    firstScreen.value = memory + data;
    operation = data;
  }

}


function clear() {
  secondScreen.value = 0;
  memory = null;
  operation = null;
  firstScreen.value = "";
}

function equal() {
  if (operation) {
    let localMemory = getResult(+memory, +secondScreen.value, operation);
    clear();
    secondScreen.value = localMemory;
  }

}

function plusMinus() {

  if (secondScreen.value.indexOf("-") !== -1){
    secondScreen.value = secondScreen.value.substr(1); // сетереть первый символ
} else {
  secondScreen.value = "-" + secondScreen.value;
}

}

function point(){
  secondScreen.value = secondScreen.value.slice(0, -1);
}

function spot(data) {
  if (secondScreen.value.indexOf(".")===-1){
    secondScreen.value+=".";
  }
}









buttons.forEach((item) => {
  item.addEventListener("click", (e) => {
    action(e.target.innerText);

  })
})