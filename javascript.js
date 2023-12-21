const container=document.querySelector(".container");
const slider =document.querySelector('#slider');
const slidervar =document.querySelector('#sliderValue')
const clearButton =document.querySelector('#clear')
const colourwheel =document.querySelector("#colourwheel")
let isMouseClicking=false;
//global event listeners 
document.addEventListener('mousedown', function() {
    isMouseClicking = true;})
document.addEventListener('mouseup', function() {
  isMouseClicking = false;})

let selectedColor='black'
colourwheel.addEventListener("input",function(){
    selectedColor=colourwheel.value;
})



// constant width of 'canvas' is 600px
function creategrid(dimensions) {
    area=dimensions**2;
    //calculate size of canvas
    let size =(Math.sqrt((600**2)/area))-2;
    //create canvs
    for (let i=0; i<area;i++){
        const pixel = document.createElement('div');
        pixel.style.border='1px solid #333';
        pixel.textContent='';
        pixel.classList.add('pixel')
        pixel.style.width=`${size}px`;
        pixel.style.height=`${size}px`;
        pixel.style.padding='0px'
        container.appendChild(pixel);
        pixel.addEventListener('mouseover',function(event){
            if(isMouseClicking){
            pixel.style.backgroundColor=selectedColor;
        }
        })
        pixel.addEventListener('mousedown',function(){
            pixel.style.backgroundColor=selectedColor;
        })
    }


}



creategrid(4)

let slidervalue=slider.value;
slidervar.textContent=`${slidervalue}x${slidervalue}`;

clearButton.addEventListener('click',function(){
    var elementsToDelete = document.getElementsByClassName("pixel");
    while (elementsToDelete.length > 0) {
        elementsToDelete[0].parentNode.removeChild(elementsToDelete[0]);
    }
    console.log('run')
    creategrid(slidervalue);
    
})

slider.addEventListener('input', function(){
    var elementsToDelete = document.getElementsByClassName("pixel");
    while (elementsToDelete.length > 0) {
        elementsToDelete[0].parentNode.removeChild(elementsToDelete[0]);
    }
    slidervalue=slider.value;
    slidervar.textContent=`${slidervalue}x${slidervalue}`;
    creategrid(slidervalue);
});
