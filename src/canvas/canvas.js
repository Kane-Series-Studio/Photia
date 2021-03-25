window.addEventListener('load', () => {

    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");
    

    // TRACK COLOUR CHANGE
    var colourPicker = document.getElementById("colour-picker");

    colourPicker.addEventListener('input', updateFirst, false);
    colourPicker.addEventListener('change', watchColorPicker,false);

    //Resizing
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    //VARIABLES
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }
    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        var e = window.event;
        if(!painting) return;

        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.strokeStyle = x;
        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY)
    }

    //EVENT  LISTENERS
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition)
    canvas.addEventListener('mousemove', draw)

})