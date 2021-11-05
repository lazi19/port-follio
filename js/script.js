// ------------------Scroll Event 

const bubbleImpair = document.querySelector('.bubbleImpair');
// console.log(cercleTriangleBubble);
// window.addEventListener('scroll', () => {
//     console.log('Test !');

// })


// const bubble = document.querySelector('.bubble');
// bubble.classList.remove('bubbleImpair');

// Create the observer, same as before:
// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         square.classList.add('bubbleImpair');
//         return;
//       }
  
//       square.classList.remove('bubbleImpair');
//     });
//   });
  
//   observer.observe(document.querySelector('.bubble'));


// window.addEventListener('scroll', () => {
//     console.log(window.scrollY);
//     if(window.scrollY > 550){
//         console.log('couleur')
//         bubbleImpair.style.animation = "slideImpaire 1s ease 0s 1 normal forwards"; 
//     }else{
//         bubbleImpair.style.color = yellow; 
//     }

// })

// window.onscroll = function() {
//     if(window.scrollY > 550){
//         // console.log('couleur')
//         // bubbleImpair.style.animation = "slideImpaire 1s ease 0s 1 normal forwards"; 
//         bubbleImpair.style.color = "red"; 
//     }
//     else{
//         bubbleImpair.style.color = "yellow"; 
//     }
// };

// function start() {
//     if(window.scrollY > 600){
//     document.querySelector('bubbleImpair').style.animation = "slideImpaire 1s ease 0s 1 normal forwards";
//     document.querySelector('bubbleImpair').style.color = "red";
//     console.log("hello")
//     }


// }

// document.querySelector('.cercleTriangleBubble').addEventListener("scroll", start);





// ---------------------logique de Clémentine

// const isElementInViewport = (element) => {
//     const rectangle = element.getBoundingClientRect();
//     return (
//       rectangle.top >= 0 &&
//       rectangle.left >= 0 &&
//       rectangle.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       rectangle.right <=
//         (window.innerWidth || document.documentElement.clientWidth)
//     );
//   };

//   const showElements = (elements) => {
//     for (let i = 0; i < elements.length; i++) {
//       if (isElementInViewport(elements[i])) {
//         elements[i].classList.add("in-view");
//       }
//     }
//   };


  // On appelle notre fonction pour qu'elle s'éxécute
window.onload = () => {
  const elements = document.querySelector('.bubbleImpair');
  showElements(elements);

  window.addEventListener("resize", () => showElements(elements));
  window.addEventListener("scroll", () => showElements(elements));
};


//------------------autre logique 

 // Return boolean when an element is visible on screen
 function isVisible ( element ) {
    var
        viewPortHeight = $( window ).height(), // Viewport Height
        scrollTop = $( window ).scrollTop(), // Scroll Top
        currElementPosY = $( element ).offset().top,
        elementHeight = $( element ).height();
     
    return ( currElementPosY + elementHeight > scrollTop && currElementPosY < ( viewPortHeight + scrollTop ) )
}


 // Animate chart only when you see it
 function animateBubbleImpairWhenVisible ( bubble ) {
    for ( var i = 0, count = bubble.length; i < count; i++ ) {
        if ( isVisible( bubble[ i ] )  ) {
            $( bubble[ i ] ).addClass("bubbleImpair");
        }
    }
}

   /* FUNCTIONS END */
     
    // On scroll
    $( window ).scroll( function () { 
        animateChartWhenVisible( bubble );
    } );
     
    /* On load */   
    animateChartWhenVisible( bubble );
     
