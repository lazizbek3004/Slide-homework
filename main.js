let slide = document.querySelector('.slide')
let fuck = document.querySelector('.top')
let middle = document.querySelector('.middle')
let bottom = document.querySelector('.bottom')
let left = document.querySelector('.left')

let removeA = ()=>{
    left.classList.remove('leftA')
}

slide.addEventListener('click', ()=>{
    if(slide.classList.contains('slideA')){
        slide.classList.remove('slideA')
        fuck.classList.remove('topA')
        middle.classList.remove('middleA')
        bottom.classList.remove('bottomA')
        left.classList.add('leftAnim')
        
        left.addEventListener('animationend', removeA)

        // so have to remove here
    }else{
        slide.classList.add('slideA')
        fuck.classList.add('topA')
        middle.classList.add('middleA')
        bottom.classList.add('bottomA')
       
        left.classList.remove('leftAnim')
        left.classList.add('leftA')
        left.removeEventListener('animationend', removeA)


        // so have to add here
    }

})
function toggleDivVisibility() {
 
    if (window.innerWidth > 800) {
      left.classList.remove('leftA') 
      slide.classList.remove('slideA')
      fuck.classList.remove('topA')
      middle.classList.remove('middleA')
      bottom.classList.remove('bottomA')
    } 
  }
  
  // Call the function initially and add an event listener for window resize
  toggleDivVisibility();
  window.addEventListener('resize', toggleDivVisibility);






