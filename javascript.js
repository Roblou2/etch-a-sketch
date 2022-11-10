
const container = document.querySelector('#container')


for (let i = 0; i < 256; i++) {
   var square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)                //populates the grid
}



    let colour = document.querySelectorAll('.square') //need queryselectorall because queryselector only gets the first one returned
    
   

    for (let z = 0; z < colour.length; z++) {
                                                               //upon hover each cell changes colour
        colour[z].addEventListener('mouseover', () => {
            colour[z].classList.add('square-filled')
            colour[z].classList.remove('square')
        })

        colour[z].addEventListener('click', () => {            //upon click each cell reverts back to filled
            colour[z].classList.add('square')
            colour[z].classList.remove('square-filled')
        })
                
        }


   

