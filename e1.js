// var ask = prompt("Please enter a number")
// var triangle = document.getElementsByTagName("triangle");
// function findEven(number) {
//     for(let i=0; i<=number; i++) {
//         if (i %2 == 0) {
//             console.log(i);
//         }
//     }
// }

// findEven(ask)

function numberOneTriangle() {
    document.getElementById("triangle").innerHTML = ""
    var n = document.getElementById('in').value;
    for (let i = 0; i<=n; i++) {
        var string = "";
        for (let j = 1; j<=i; j++) {
            string+="1";
        }
        document.getElementById("triangle").innerHTML += "<p>" + string + "</p>";
    }
}
window.onload = function clock() {
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var session = "AM"
    if (hour > 12) {
        hour = hour - 12;
        session = "PM"
    }
    hour = hour < 10 ? "0" + hour : hour; 
    min = min < 10 ? "0" + min : min; 
    sec = sec < 10 ? "0" + sec : sec; 
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec + session;
    setTimeout(clock, 1000);
}


// clock()
// numberOneTriangle()