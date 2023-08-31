console.log("Welcome to Simple Calculator");

show = document.getElementsByClassName('displayNum')[0];
var n1;
var n2;
var op;
var temp;
var res;

function addNum(x){
    if(show.innerText == "0"){
        show.innerText = "";
    }
    show.innerText += x.innerText;
}

function operationBinary(opr){
    temp = opr.innerText
    switch (temp) {
        case "+":
            op = "+";
            n1 = parseFloat(show.innerText);
            n2 = n1;
            n1 = "";
            show.innerText = "";
            break;
        case "-":
            // if(!isNaN(show.innerText))
            // {
            //     show.innerText = "-";
            // }
            op = "-";
            n1 = parseFloat(show.innerText);
            n2 = n1;
            n1 = "";
            show.innerText = "";
            break;
        case "*":
            op = "*";
            n1 = parseFloat(show.innerText);
            n2 = n1;
            n1 = "";
            show.innerText = "";
            break;
        case "/":
            op = "/";
            n1 = parseFloat(show.innerText);
            n2 = n1;
            n1 = "";
            show.innerText = "";
            break;
        
        default:
            console.log("Error");
            break;
    }
}

function cube(){
    n1 = parseFloat(show.innerText);
    show.innerText = "";
    res = n1 * n1 * n1;
    show.innerText = res;
}

function divideByOne(){
    n1 = parseFloat(show.innerText);
    show.innerText = "";
    res = (1/n1);
    show.innerText = res; 
}

function square(){
    n1 = parseFloat(show.innerText);
    show.innerText = "";
    res = (n1 * n1);
    show.innerText = res; 
}

function sqrt(){
    n1 = parseFloat(show.innerText);
    show.innerText = "";
    res = Math.sqrt(n1);
    show.innerText = res;
}

function absolute(){
    n1 = parseFloat(show.innerText);
    show.innerText = "";
    res = (n1 * -1);
    show.innerText = res;
}

function cal(){
    n1 = parseFloat(show.innerText);
    show.innerText = "";
    if ( temp == "+")
    {
        res = n2 + n1;
    }
    if ( temp == "-")
    {
        res = n2 - n1;
    }
    if ( temp == "*")
    {
        res = n2 * n1;
    }
    if ( temp == "/")
    {
        res = n2 / n1;
    }
    show.innerText = res;
}

function reset(){
    n1 = "";
    n2 = "";
    show.innerText = "";
}

function remove(){
    n1 = parseFloat(show.innerText);
    n1 = Math.floor(n1/10);
    show.innerText = n1;
}