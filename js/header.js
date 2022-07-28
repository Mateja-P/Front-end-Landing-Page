//Header on scroll
window.addEventListener("scroll", function(){
    document.querySelector("header").classList.toggle("scroll", window.scrollY > 0);
});

//Poziv na telefon
let poziv = document.querySelector("#header-br");

poziv.addEventListener("click", function(){
    window.open("tel:+381 23 23 23");
})

//Mobile menu
$(function(){
    $("#mobile-menu").click(function(){
        $("#header-content-right").toggleClass("active_menu");
        $("#mobile-menu").toggleClass("active_menu_bttn");
    })
    if($(window).width() < 900) {
        $("#usluge-prevent").click(function(e){
            e.preventDefault();
            $("#hovered-solutions-nav-usluge").slideToggle("fast");
            $("#li-arrow2").toggleClass("active_icon");
        })
        $("#usluge-prevent2").click(function(e){
            e.preventDefault();
            $("#hovered-solutions-nav-usluge2").slideToggle("fast");
            $("#li-arrow3").toggleClass("active_icon");
        })
        $("#solutions-hover-li-a").click(function(e){
            e.preventDefault();
            $("#hovered-solutions-nav").slideToggle("fast");
            $("#li-arrow1").toggleClass("active_icon");
        })
    }
})