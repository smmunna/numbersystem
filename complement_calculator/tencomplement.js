function complement10() {
    var number, count = 0, newnumber, result, r, N;
    number = parseInt(document.getElementById("num1").value);
    newnumber = number;

    while (number != 0) {

        number = Math.floor(number / 10);
        ++count;
    }

    result = ((Math.pow(10, count)) - newnumber);


    document.getElementById('pes').innerHTML = "We know that,<br>" +
        "r = Base<br>" +
        "n = Number of digit<br>" +
        "N = Given number<br>" +
        "<br><b>10'<sup>s</sup> Complement:</b><br>= r<sup>n</sup> - N<br>" +
        " = 10<sup>" + count + "</sup> - " + newnumber + "<br>" +
        " = ( " + result + " )<sub>10</sub>";
}