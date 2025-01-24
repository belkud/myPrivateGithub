// document.body.style.backgroundImage = 'url(public/mountain.jpg)'



let cont_grid = document.querySelector('#cont-grid')
let square = document.querySelector('#square')


let scr = 0
let scr2 = 0

console.log(cont_grid.children[3].textContent)


cont_grid.childNodes[1].addEventListener('click', ()=> {
  scr-=20
  square.style.marginLeft = scr + 'px'
})

cont_grid.childNodes[5].addEventListener('click', ()=> {
  scr+=20
  square.style.marginLeft = scr + 'px'
})

cont_grid.childNodes[3].addEventListener('click', ()=> {
  scr2-=20
  square.style.marginTop = scr2 + 'px'
})


cont_grid.childNodes[7].addEventListener('click', ()=> {
  scr2+=20
  square.style.marginTop = scr2 + 'px'
})





let square_opacity = 0

cont_grid.addEventListener('click', ()=>{
    square_opacity+=10
    
    if (square.style.opacity==0) {
        square_opacity=0
    }


    // if (square_opacity==100) {
    //     square_opacity=0
    // }
    
    square.style.opacity = (100 - square_opacity) + '%'
    
    
    // square.style.background='red'
    console.log(square.style.opacity);
    console.log(square_opacity);

    

})






