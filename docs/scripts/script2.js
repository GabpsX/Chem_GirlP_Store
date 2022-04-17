function reveal() {
    var reveals1 = document.querySelectorAll("#produtos");
  
    for (var y = 0; y < reveals1.length; y++) {
      var windowHeight1 = window.innerHeight;
      var elementTop1 = reveals1[y].getBoundingClientRect().top;
      var elementVisible1 = 100;
  
      if (elementTop1 < windowHeight1 - elementVisible1) {
        reveals1[y].classList.add("active");
      } else {
        reveals1[y].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);