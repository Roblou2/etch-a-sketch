const container = document.querySelector('#container') //add the grid to memory to grab in the for loop below



let gridSize = 900;

const big = document.querySelector('.big')

big.addEventListener('click', () => {
    gridSize = 100
    container.setAttribute('style', 'grid-template-rows: repeat(10, 1fr); grid-template-columns: repeat(10, 1fr);')
    reset()

})

const small = document.querySelector('.small')

small.addEventListener('click', () => {
gridSize = 900
container.setAttribute('style', 'grid-template-rows: repeat(30, 1fr); grid-template-columns: repeat(30, 1fr);')
reset()

})
// configure grid size for mobile devices 






//configure the pen on/off switch for the grid container children in DESKTOP
let penOn = false;
container.onmousedown = function () {      
    penOn = true;
  
}
container.onmouseup = function () {
    penOn = false;
  
}



//set colour output

const defaultColour = '#333333'

const colour = document.getElementById("colorWell")

let colourSelected = defaultColour

function setColour (newColour) {  //newColour grabbed from inline function below

    colourSelected = newColour
 
}

colour.oninput = (e) => setColour(e.target.value) //this gets the value of the colour selected (on input) and feeds it back into the setColour function

//set up eraser button to erase colour of one cell 

let eraser = document.querySelector('.eraser')

let eraserOn = false
let eraserOff = true

eraser.onclick = () => {
    if (eraserOn === false && eraserOff === true) {
eraserOn = true 
eraserOff = false
eraser.innerHTML = "Eraser on"
    }
else if (eraserOn === true && eraserOff === false) {
eraserOn = false
eraserOff = true
eraser.innerHTML = "Eraser off"
}
    }

//set up rainbow mode

let rainbow = document.querySelector('.rainbow')

let rainbowOn = false
let rainbowOff = true

rainbow.onclick = () => {
    if (rainbowOn === false && rainbowOff === true) {
rainbowOn = true 
rainbowOff = false
rainbow.innerHTML = "Rainbow mode on"
    }
else if (rainbowOn === true && rainbowOff === false) {
rainbowOn = false
rainbowOff = true
rainbow.innerHTML = "Rainbow mode off"
}
    }





//the foor loop to load the default gridSize (small) upon page load
function start () {
for (let z = 0; z < gridSize; z++) {
    let square = document.createElement('div') 
    square.classList.add('square')  

    container.appendChild(square)     

    square.addEventListener('mouseclick', function (e) {
        if(penOn === true && eraserOff === true) {                
         
            e.target.style.backgroundColor = colourSelected
        }
        else if (penOn === true && eraserOn === true) {
            e.target.style.backgroundColor = '#f8f7fd'    //sets background colour to original and turns off colour selection
        }

        if (penOn === true && rainbowOn === true && rainbowOff === false && eraserOn === false) {
            const randomR = Math.floor(Math.random() * 256)
            const randomG = Math.floor(Math.random() * 256)
            const randomB = Math.floor(Math.random() * 256)
            e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
})


    square.addEventListener('mouseover', function (e) {  
        if(penOn === true && eraserOff === true) {                
         
            e.target.style.backgroundColor = colourSelected
        }
        else if (penOn === true && eraserOn === true) {
            e.target.style.backgroundColor = '#f8f7fd'
        }
        if (penOn === true && rainbowOn === true && rainbowOff === false && eraserOn === false) {
            const randomR = Math.floor(Math.random() * 256)
            const randomG = Math.floor(Math.random() * 256)
            const randomB = Math.floor(Math.random() * 256)
            e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
 
    })



  }
}



//clear button and fresh grid for big and small buttons
const clear = document.querySelector('.clear')

clear.addEventListener('click', reset)

function reset() {
 while(container.hasChildNodes()) {         //removes current divs under grid container
    container.removeChild(container.firstChild)
  
 }
 for (let z = 0; z < gridSize; z++) {
  
    let square = document.createElement('div') 
    square.classList.add('square')    

    container.appendChild(square)     

    square.addEventListener('mouseclick', function (e) {  
        if(penOn === true && eraserOff === true) {                
         
            e.target.style.backgroundColor = colourSelected
        }
        else if (penOn === true && eraserOn === true) {
            e.target.style.backgroundColor = '#f8f7fd'    
        }

        if (penOn === true && rainbowOn === true && rainbowOff === false && eraserOn === false) {
            const randomR = Math.floor(Math.random() * 256)
            const randomG = Math.floor(Math.random() * 256)
            const randomB = Math.floor(Math.random() * 256)
            e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }

    })
   square.addEventListener('mouseover', function (e) {
    if(penOn === true && eraserOff === true) {                
         
        e.target.style.backgroundColor = colourSelected
    }
    else if (penOn === true && eraserOn === true) {
        e.target.style.backgroundColor = '#f8f7fd'
    }

    if (penOn === true && rainbowOn === true && rainbowOff === false && eraserOn === false) {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
}

})

  }
} 
window.onload = () => {
    start()
checkSize()

  }


let x = window.matchMedia("(max-width: 550px)")

function checkSize () {
    if (x.matches) {
        mobileDevs()
    }
    else {
        start ()
    }
}

window.onresize = checkSize
    //confgiure touch interface for mobile devices 



        function mobileDevs() {
            let wrap = document.querySelector('.wrap')
            let mainBod = document.querySelector('body')
            
     container.addEventListener ('pointermove', function mobColour(e) {
     wrap.setAttribute('style', 'pointer-events: none;') //this stops the wrap children from being manipulated by elemtFromPoint method

      
        let elem = document.elementFromPoint(e.clientX, e.clientY)
 
                if(eraserOff === true) {     
                       
                            elem.style.backgroundColor = colourSelected
            }
            else if (eraserOn === true) {
                elem.style.backgroundColor = '#f8f7fd'    //sets background colour to original and turns off colour selection
            }
       
          
            if (rainbowOn === true && rainbowOff === false && eraserOn === false) {
                const randomR = Math.floor(Math.random() * 256)
                const randomG = Math.floor(Math.random() * 256)
                const randomB = Math.floor(Math.random() * 256)
                elem.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
            }
    
        
                    })
                mainBod.addEventListener('pointerup', () => {
                    wrap.setAttribute('style', 'pointer-events: auto')
                   
                })
            }

