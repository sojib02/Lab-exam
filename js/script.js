$('.slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000, 
  });

  //navbar-sticky

  let navber= document.querySelector("nav");
  let top_up= document.querySelector(".top_up");
 
  window.addEventListener("scroll", function(){
    let scroll_valu=window.scrollY;
    if (scroll_valu > 120) {
      navber.classList.add("nav_sticky");
       top_up.classList.add("top_show");
   
    } else {
      navber.classList.remove("nav_sticky");
      top_up.classList.remove("top_show");
    }
  })