$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 0)
        $(".navbar-1").addClass("sticky");
      else
        $(".navbar-1").removeClass("sticky");
    });
  
    $('.menu-toggler-1').click(function(){
      $(this).toggleClass("active");
      $(".navbar-menu-1").toggleClass("active");
    });
  });