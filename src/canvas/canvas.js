window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");
    //Resizing
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    //VARIABLES
    let painting = false;

    function startPosition() {
        painting = true;
    }
    function finishedPosition() {
        painting = false;
    }

    function draw(e){
        if(!painting) return;
    }

    //EVENT  LISTENERS
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition)
    canvas.addEventListener('mousemove', draw)

})