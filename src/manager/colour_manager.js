
setInterval(() => {
    const colour = () => {
        var x = document.getElementById("colour-picker").value;
    }
    var x = document.getElementById("colour-picker").value;

    console.log(x)
    var y = document.getElementById("valueHEX").style.color = `${x}`

document.getElementById("valueHEX").innerHTML = x;
}, 100);

