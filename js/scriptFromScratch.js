// const bubbleImpair = document.getElementsByClassName('bubbleImpair');

// const bubblePair = document.getElementsByClassName('bubblePair');
const bubble1 = document.getElementById('bubble1');
const bubble2 = document.getElementById('bubble2');
const bubble3 = document.getElementById('bubble3');
const bubble4 = document.getElementById('bubble4');

window.addEventListener('scroll', function() {
 scrollValue = (window.innerHeight+window.scrollY) / (document.body.offsetHeight);
 console.log(scrollValue);
// condition if

 if ( scrollValue > 0.65 & scrollValue < 0.8 ){   
    bubble1.style.opacity = '1';
    bubble1.style.transform = 'none';
 } else if (scrollValue > 0.8 & scrollValue < 0.85) {
     console.log('bubble2')
    bubble2.style.opacity = '1';
    bubble2.style.transform = 'none';
 } else if (scrollValue > 0.85 & scrollValue < 0.9){
    bubble3.style.opacity = '1';
    bubble3.style.transform = 'none'; 
 } else if (scrollValue > 0.9) {
    bubble4.style.opacity = '1';
    bubble4.style.transform = 'none'; 
 }



// condition switch

// switch(scrollValue){
//    case scrollValue > 0.65 & scrollValue < 0.8 : {
//       bubble1.style.opacity = '1';
//       bubble1.style.transform = 'none';
//       break;
//    }
//    case scrollValue > 0.8 & scrollValue < 0.85 : {
//       bubble1.style.opacity = '1';
//       bubble1.style.transform = 'none';
//       break;
//    }
//    case scrollValue > 0.85 & scrollValue < 0.9: {
//       bubble1.style.opacity = '1';
//       bubble1.style.transform = 'none';
//       break;
//    }
//    case (scrollValue > 0.9) : {
//       bubble1.style.opacity = '1';
//       bubble1.style.transform = 'none';
//       break;
//    }
// }
})



// Typed 

// var typed = new Typed('.typedName', {
//    strings: ['Assia GHAZI'],
//    typeSpeed: 0,
   // backSpeed: 0,
   // smartBackspace: true, // this is a default
   // loop: true,
//  });
 