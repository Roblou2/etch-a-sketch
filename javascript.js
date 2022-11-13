const container = document.querySelector('#container') //add the grid to memory to grab in the for loop below


//set big and small buttons
let gridSize = 900;

const big = document.querySelector('.big')

big.addEventListener('click', () => {
    gridSize = 100
    container.setAttribute('style', 'grid-template-rows: repeat(10, 4vw); grid-template-columns: repeat(10, 4vw);')
    reset()

})

const small = document.querySelector('.small')

small.addEventListener('click', () => {
gridSize = 900
container.setAttribute('style', 'grid-template-rows: repeat(30, 1vw); grid-template-columns: repeat(30, 1vw);')
reset()

})

//configure the pen on/off switch for the grid container children
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

colour.oninput = (e) => setColour(e.target.value) //this gets the value of the colour selected and feeds it back into the setColour function




//the foor loop to load the default gridSize (small) upon page load
function start () {
for (let z = 0; z < gridSize; z++) {
    let square = document.createElement('div') 
    square.classList.add('square')  

    container.appendChild(square)     

    square.addEventListener('mousedown', function (e) {
        if(penOn === true && colourButtonOn === true) {                
         
       
           
            e.target.style.backgroundColor = colourSelected
           
        }

    })

    square.addEventListener('mouseover', function (e) {  
        if(penOn === true) {   
        
   e.target.style.backgroundColor = colourSelected

        }

    })

  }
}



//erase button and fresh grid for big and small buttons
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

    square.addEventListener('mouseover', function (e) {  
        if(penOn === true) {   
         
            e.target.style.backgroundColor = colourSelected //grabbed from the setColour function above
  
        }
    })
   square.addEventListener('mousedown', function (e) {
    if(penOn === true) {               
     
        e.target.style.backgroundColor = colourSelected
    
       
    }
})

  }
} 



 start()


 

