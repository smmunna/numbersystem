function decibin(){
    var x = parseInt(document.getElementById("num1").value);
    var result;
    document.getElementById("result").innerHTML = "Binary: ( "+x.toString(2)+" )<sub>2</sub>";

}

function decioct(){
    var x = parseInt(document.getElementById("num1").value);
    var result;
    document.getElementById("result").innerHTML = "Octal: ( "+x.toString(8)+" )<sub>8</sub>";

}

function decihex(){
    var x = parseInt(document.getElementById("num1").value);
    var result;
    document.getElementById("result").innerHTML = "Hexa: ( "+x.toString(16).toUpperCase()+" )<sub>16</sub>";

}

function octdeci(){
    var x = document.getElementById("num1").value;
    var result;
    document.getElementById("result").innerHTML = "Decimal: ( "+parseInt(x,8)+" )<sub>10</sub>";

}
function bindeci(){
    var x = document.getElementById("num1").value;
    document.getElementById("result").innerHTML = "Decimal: ( "+parseInt(x,2)+" )<sub>10</sub>";

}
function hexadeci(){
    var x = document.getElementById("num1").value;
    var result;
    document.getElementById("result").innerHTML = "Decimal: ( "+parseInt(x,16)+" )<sub>10</sub>";

}

//binaryy to octal
function binaryoct(){
    var x = document.getElementById("num1").value;
    var result;
    document.getElementById("result").innerHTML = "Octal: ( "+parseInt(x,2).toString(8)+" )<sub>8</sub>";

}
//binaryy to hexa
function binarhexa(){
    var x = document.getElementById("num1").value;
    var result;
    document.getElementById("result").innerHTML = "Hexa: ( "+parseInt(x,2).toString(16).toUpperCase()+" )<sub>16</sub>";

}
//Octal to binary
function octaltobinary(){
    var x = document.getElementById("num1").value;
    var result;
    document.getElementById("result").innerHTML = "Binary: ( "+parseInt(x,8).toString(2)+" )<sub>2</sub>";

}
//octal to hexa
function octaltohexa(){
    var x = document.getElementById("num1").value;
    var result;
    document.getElementById("result").innerHTML = "Hexa: ( "+parseInt(x,8).toString(16).toUpperCase()+" )<sub>16</sub>";

}
//hexa to Octal
function hexatooctal(){
    var x = document.getElementById("num1").value;
    var result;
    document.getElementById("result").innerHTML = "Octal: ( "+parseInt(x,16).toString(8)+")<sub>8</sub>";

}

//hexa to binary
function hexatobinary(){
    var x = document.getElementById("num1").value;
    var result;
    document.getElementById("result").innerHTML = "Binary: ( "+parseInt(x,16).toString(2)+" )<sub>2</sub>";

}

