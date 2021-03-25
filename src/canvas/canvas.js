window.addEventListener('load', () => {

    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");


    // TRACK COLOUR CHANGE


    // Stroke Size Caller
    const stroke_size = document.getElementById("strokeSize").value;
    setInterval(() => {
        console.log(stroke_size)
    }, 1);

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

    function colour_change(){
        console.log('CHANGED')
    }

    function draw(e) {
        setInterval(() => {
        var e = window.event;
        var x = document.getElementById("colour-picker").value;
        if (!painting) return;    
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.strokeStyle = `${x}`;
        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY) 
        }, 1);

    }

    //EVENT  LISTENERS
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition)
    canvas.addEventListener('mousemove', draw)

})