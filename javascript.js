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

//configure the pen on/off switch to work on holding the mouse down 
let penOn = false;
container.onmousedown = function () {      
    penOn = true;
   
}
container.onmouseup = function () {
    penOn = false;
  
}

//set green colour switch
let green = false;

document.querySelector('.green').addEventListener('click', () => {
    green = true;
    red = false;
}
)

//set red colour switch 

let red = false;
document.querySelector('.red').addEventListener('click', () => {
    red = true;
    green = false;
})

//the foor loop to load the default gridSize (small) upon page load
function start () {
for (let z = 0; z < gridSize; z++) {
    var square = document.createElement('div') 
    square.classList.add('square')    
    container.appendChild(square)     

    container.appendChild(square)
    square.addEventListener('mouseover', function (e) {  
        if(penOn === true && green === true) {   //set colour green with switch true
         
    e.target.setAttribute('id', 'square-filled-green') //ids higher specificity means will colour over if square is red
   

        }
    })
   square.addEventListener('mousedown', function (e) {
    if(penOn === true && green === true) {                //set green pink with switch true
     
        e.target.setAttribute('id', 'square-filled-green')    
     
      
    }
})
square.addEventListener('mouseover', function (e) {  
    if(penOn === true && red === true) {   //set colour red with switch true
     
e.target.setAttribute('id', 'square-filled-red')


    }
})
square.addEventListener('mousedown', function (e) {
if(penOn === true && red === true) {                //set colour red with switch true
 
    e.target.setAttribute('id', 'square-filled-red')  
   
  
}
})
  }
}



//erase button and fresh grid for big and small buttons
const rubber = document.querySelector('.rubber')

rubber.addEventListener('click', reset)

function reset() {
 while(container.hasChildNodes()) {         //removes current divs under grid container
    container.removeChild(container.firstChild)
  
 }
 for (let z = 0; z < gridSize; z++) {
  
    var square = document.createElement('div') 
    square.classList.add('square')    
    container.appendChild(square)     

    container.appendChild(square)
    square.addEventListener('mouseover', function (e) {  
        if(penOn === true && green === true) {   //set colour greebn with switch true
         
            e.target.setAttribute('id', 'square-filled-green')  
  
        }
    })
   square.addEventListener('mousedown', function (e) {
    if(penOn === true && green === true) {                //set colour green with switch true
     
        e.target.setAttribute('id', 'square-filled-green')   
    
       
    }
})
square.addEventListener('mouseover', function (e) {  
    if(penOn === true && red === true) {   //set colour red with switch true
     
        e.target.setAttribute('id', 'square-filled-red')  

    }
})
square.addEventListener('mousedown', function (e) {
if(penOn === true && red === true) {                //set colour red with switch true
 
    e.target.setAttribute('id', 'square-filled-red')     

    
}
})

  }
} 



 start()


 

