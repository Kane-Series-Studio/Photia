window.addEventListener('load', ()=>{
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");
    const frame = document.getElementById("img-display");
    //Resizing
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    //VARIABLES
    let painting = false;

    function startPosition(){
        painting = true;
    }
    function finishedPosition(){
        painting = false;
    }
    
    //EVENT  LISTENERS
})