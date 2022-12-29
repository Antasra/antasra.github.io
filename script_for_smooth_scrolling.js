window.addEventListener("scroll", reveal);
function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i = 0; i < reveals.length; i++){
            var windowheight = window.innerHeight;
            var revaeltop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 50;

            if(revaeltop < windowheight - revealpoint){
                  reveals[i].classList.add('active');
            }else{
                  reveals[i].classList.remove('active');

            }
      }
}