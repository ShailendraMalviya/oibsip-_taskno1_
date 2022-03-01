// Mobile Menu
let nav = document.querySelector("nav"); 
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let logoOne = document.querySelector(".logo");

menuBtn.onclick = function(){
    navBar.classList.add("active");
    menuBtn.sytle.opacity ="0";
    menuBtn.sytle.pointerEvents = "none";
    menuBtn.sytle.overflow = "hide";
}
menuBtn.onclick = function(){
    navBar.classList.remove("active");
    menuBtn.sytle.opacity ="1";
    menuBtn.sytle.pointerEvents = "auto";
    menuBtn.sytle.overflow = "auto";
}

let navLink=document.querySelectorAll(".menu li a")
for(var i=0; i<navLink.length; i++){
    navLink[i].addEventListener("click",function(){
        navBar.classList.remove("active");
        menuBtn.sytle.opacity ="1";
        menuBtn.sytle.pointerEvents = "auto";
        menuBtn.sytle.overflow = "auto";  
    })
}
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        logoOne.classList.add("active");
        menuBtn.classList.add("active")
    }
    else{
        nav.classList.remove("sticky");
        logoOne.classList.add("active");
        menuBtn.classList.add("active")
    }

//counter on scroll
var number = 0;
var oTop = $('#counter').offset().top - window.innerHeight;

if(number == 0 && $(window).scrollTop() > oTop){
    var $this = $(this),
    countTo = $.attr('data-count');
    $({
        countNum :$this.text()
    }).animate({
        countNum: countTo
    },
    {
        duration:2000,
        easing:'swing',
        step:function(){
            $this.text(Math.floor(this.countNum));
        },
        complete:function(){
            $this.text(this.countNum);
        }
    });
}
}

//slick slider testmonial
$('testimonials').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay:true,
    cssEase:'linear',
    slide:'li',
    arrows:false,
  });
         