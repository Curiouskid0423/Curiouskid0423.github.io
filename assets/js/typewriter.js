document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "Kevin.", "an imagineer."];
    
    const typeWriter = (text, i, fnCallback) => {
      if (i < (text.length)) {
       document.querySelector(".name-change").innerHTML 
           = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 1300);
      }
    }
    const StartTextAnimation = (i) => {
        if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
                StartTextAnimation(0);
            }, 900); // lasting time for the last word
        }
       // check if dataText[i] exists
        if (dataText[i] != null && i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
                StartTextAnimation(i + 1);
            });
        }
    }
    StartTextAnimation(0);
  });