const container = document.querySelector('#container') //add the grid to memory to grab in the for loop below

let penOn = false;
container.onmousedown = function () {      //configure the pen on/off switch to work on holding the mouse down 
    penOn = true;
   
}
container.onmouseup = function () {
    penOn = false;
  
}

//the foor loop which creates coloured trail

for (let i = 0; i < 256; i++) {
 
    var square = document.createElement('div') //create divs for grid
    square.classList.add('square')    //add the default square class

    container.appendChild(square)     //add divs to grid
    square.addEventListener('mouseover', function (e) {  //upon mouse over and penOn switch set to 'on', switch the class of the cell
        if(penOn === true) {
     
    e.target.classList.add('square-filled')
    e.target.classList.remove('square')
        }
    })
   square.addEventListener('mousedown', function (e) {
    if(penOn === true) {
      
        e.target.classList.add('square-filled')      //upon mouse down and penOn switch set to 'on', change the class of the cell
        e.target.classList.remove('square')
    }
})
   
}




//erase button - makes new grid and calls same for loop function below
const rubber = document.querySelector('#rubber')

rubber.addEventListener('click', reset)

function reset() {
 while(container.hasChildNodes()) {         //removes current divs under grid container
    container.removeChild(container.firstChild)
 }
                      //here we make the fresh divs again and call same draw functions as above
  for (let z = 0; z < 256; z++) {
    var square = document.createElement('div') 
    square.classList.add('square')    
    container.appendChild(square)     

    container.appendChild(square)
    square.addEventListener('mouseover', function (e) {  
        if(penOn === true) {
     
    e.target.classList.add('square-filled')
    e.target.classList.remove('square')
        }
    })
   square.addEventListener('mousedown', function (e) {
    if(penOn === true) {
      
        e.target.classList.add('square-filled')      
        e.target.classList.remove('square')
    }
})

  }
  
}
 


 

