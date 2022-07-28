//Hero video
let play_bttn = document.querySelector("#play-bttn");
let close_bttn = document.querySelector("#close-video");
let video = document.querySelector("#hero-video");
let play_icon_border = document.querySelector("#play-icon-border");
let play_icon = document.querySelector("#play-icon-border i");
let play_p = document.querySelector("#play-bttn-p");
let loader = document.querySelector("#loader");
let video_el = document.querySelector("#hero-video video");

close_bttn.addEventListener("click", function(){
    video.style.display = "none";
    video_el.currentTime = "0"; 
});

play_bttn.addEventListener("click", function(){
    video.style.display = "block";
    loader.style.animation = "";
    video_el.play();
});


play_bttn.addEventListener("mouseenter", function(){
    loader.style.animation = "timer 3s infinite linear";
    loader.style.animationIterationCount = "1";
    let timer = setTimeout(function(){
        video.style.display = "block";
    }, 3000)
    play_bttn.addEventListener("mouseleave", function(){
        clearTimeout(timer);
        loader.style.animation = "";
    })
})

window.addEventListener("click", function(e) {
    if(e.target == play_bttn || e.target == play_icon || e.target == play_icon_border || e.target == play_p || e.target == video || e.target == video_el) {
        video.style.display = "block";
    } else {
        video.style.display = "none";
        video_el.currentTime = "0"; 
    }
})

window.addEventListener("scroll", function(){
    if(window.pageYOffset > 400) {
        video.style.display = "none";
        video_el.currentTime = "0"; 
        document.querySelector("#get-started-popup").style.display = "none";
    }
});

//Hero button popup
let bttn1 = document.querySelectorAll(".button-animation")[0];

let span_bttn1_before = document.querySelectorAll(".bttn-before")[0];
let span_bttn1_after = document.querySelectorAll(".bttn-after")[0];

let div_span1 = document.querySelectorAll("#get-started-popup span")[0];
let div_span2 = document.querySelectorAll("#get-started-popup span")[1];

let close_popup = document.querySelector("#close-pop-up");

let hero_popup = document.querySelector("#get-started-popup");

let d_clos_v1 = document.querySelectorAll(".dont-close-vid")[0];
let d_clos_v2 = document.querySelectorAll(".dont-close-vid")[1];
let d_clos_v3 = document.querySelectorAll(".dont-close-vid")[2];
let d_clos_v4 = document.querySelectorAll(".dont-close-vid")[3];
let d_clos_v5 = document.querySelectorAll(".dont-close-vid")[4];
let d_clos_v6 = document.querySelectorAll(".dont-close-vid")[5];
let d_clos_v7 = document.querySelectorAll(".dont-close-vid")[6];
let d_clos_v8 = document.querySelectorAll(".dont-close-vid")[7];

let div_a = document.querySelector("#get-started-popup a");


bttn1.addEventListener("click", function(){
    hero_popup.style.display = "block";
})

close_popup.addEventListener("click", function(){
    hero_popup.style.display = "none";
})

window.addEventListener("click", function(e) {
    if(e.target == bttn1 || e.target == hero_popup || e.target == span_bttn1_before || e.target == span_bttn1_after || e.target == d_clos_v1 || e.target == d_clos_v2 || e.target == d_clos_v3 || e.target == d_clos_v4 || e.target == d_clos_v5 || e.target == d_clos_v6 ||e.target == d_clos_v6 || e.target == d_clos_v7 || e.target == d_clos_v8 || e.target == div_span1 || e.target == div_span2 || e.target == div_a) {
        hero_popup.style.display = "block";
    } else {
        hero_popup.style.display = "none";
    }
})

//Primary Button animation
let bttn2 = document.querySelectorAll(".button-animation")[1];

let icon1 = document.querySelectorAll(".button-animation-arrow")[0];
let icon2 = document.querySelectorAll(".button-animation-arrow")[1];

let span_bttn2_before = document.querySelectorAll(".bttn-before")[1];
let span_bttn2_after = document.querySelectorAll(".bttn-after")[1];

buttonAnimation(bttn1, icon1, span_bttn1_before, span_bttn1_after);
buttonAnimation(bttn2, icon2, span_bttn2_before, span_bttn2_after);

function buttonAnimation(bttn, icon, span1, span2) {
    bttn.addEventListener("mouseenter", function(){
        span1.style.width = "100%";
        span2.style.width = "100%";
        icon.style.right = "1%";
        bttn.style.color = "#fff";
        bttn.style.backgroundColor = "transparent";
    })
    bttn.addEventListener("mouseleave", function(){
        span1.style.width = "0%";
        span2.style.width = "0%";
        icon.style.right = "-100%";
        icon.style.color = "#000%";
        bttn.style.color = "#000";
        bttn.style.backgroundColor = "#fff";
    })
}

//Partners slider
function partnersSlider() {
    let slides = document.querySelector("#partners-slides");
    let allSlides = document.querySelectorAll(".partners-slide");
    let slidesLength = allSlides.length;
    let slideWidth = allSlides[0].offsetWidth;

    let indexSlide = 0;

    let switching = true;

    let prev = document.querySelector("#prev");
    let next = document.querySelector("#next");

    let firstSlide = allSlides[0];
    let lastSlide = allSlides[allSlides.length - 1];

    let cloneFirstSlide = firstSlide.cloneNode(true);
    let cloneLastSlide = lastSlide.cloneNode(true);

    slides.appendChild(cloneFirstSlide);
    slides.insertBefore(cloneLastSlide, firstSlide);


    next.addEventListener("click", ()=> switchSlide("next"));
    prev.addEventListener("click", ()=> switchSlide("prev"));

    function switchSlide(arg, arg2) {
        slides.classList.add("transition");
        if(switching) {
            if(!arg2) {
                initialPosition = slides.offsetLeft;
            }
            if(arg == 'next') {
                slides.style.left = `${initialPosition - slideWidth}px`;
                indexSlide++;
            } else {
                slides.style.left = `${initialPosition + slideWidth}px`;
                indexSlide--;
            }
        }

        switching = false;
    }

    slides.addEventListener("transitionend", checkIndexPartners);


    function checkIndexPartners() {
        slides.classList.remove("transition");
        if(indexSlide == -1) {
            slides.style.left = `-${slidesLength * slideWidth}px`;
            indexSlide = slidesLength - 1;
        }

        if(indexSlide == slidesLength) {
            slides.style.left = `-${1 * slideWidth}px`;
            indexSlide = 0;
        }

        switching = true;
    }

    //Drag
    let posX1;
    let posX2;
    let initialPosition;
    let finalPosition;

    slides.addEventListener("mousedown", dragStart);
    slides.addEventListener("touchstart", dragStart);
    slides.addEventListener("touchmove", dragMove);
    slides.addEventListener("touchend", dragEnd);

    function dragStart(e) {
        e.preventDefault();
        initialPosition = slides.offsetLeft;
        if(e.type == 'touchstart') {
            posX1 = e.touches[0].clientX;
        } else {
            posX1 = e.clientX;
            document.onmouseup = dragEnd;
            document.onmousemove = dragMove;
        }
    }

    function dragMove(e) {
        if(e.type == 'touchmove') {
            posX2 = posX1 - e.touches[0].clientX;
            posX1 = e.touches[0].clientX;
        } else {
            posX2 = posX1 - e.clientX;
            posX1 = e.clientX;
        }

        slides.style.left = `${slides.offsetLeft - posX2}px`
    }

    function dragEnd() {
        finalPosition = slides.offsetLeft;
        if(finalPosition - initialPosition < - 150) {
            switchSlide("next", "dragging");
        } else if(finalPosition - initialPosition > 150) {
            switchSlide("prev", "dragging");
        } else {
            slides.style.left = `${initialPosition}px`;
        }

        document.onmouseup = null;
        document.onmousemove = null;
    }
}
partnersSlider();

//Testemonial Desktop slider
function testemonialDesktopSlider() {
    let bttn_1 = document.querySelector("#test-slider-dot1");
    let bttn_2 = document.querySelector("#test-slider-dot2");
    let bttn_3 = document.querySelector("#test-slider-dot3");

    let prev_bttn = document.querySelector("#testemonial-prev-slide-bttn");
    let next_bttn = document.querySelector("#testemonial-next-slide-bttn");

    let slide_1 = document.querySelector("#testemonial-card1");
    let slide_2 = document.querySelector("#testemonial-card2");
    let slide_3 = document.querySelector("#testemonial-card3");

    let dots = document.querySelectorAll(".test-slider-dot");

    let index = 1;

    bttn_1.addEventListener("click", function(){
        slideStyle1(slide_1, slide_2, slide_3);
        
        index = 1;
        activeDot(index);
    });

    bttn_2.addEventListener("click", function(){
        slideStyle2(slide_1, slide_2, slide_3);

        index = 2;
        activeDot(index);
    });

    bttn_3.addEventListener("click", function(){
        slideStyle3(slide_1, slide_2, slide_3);

        index = 3;
        activeDot(index);
    });

    prev_bttn.addEventListener("click", function(){
        index --;
        if(index < "1") {
            index = "3";
        }
        checkIndexTestemonial(index);
    });

    next_bttn.addEventListener("click", function(){
        index ++;
        if(index > "3") {
            index = "1";
        }
        checkIndexTestemonial(index);
    });

    function checkIndexTestemonial(index) {
        if(index == "1") {
            slideStyle1(slide_1, slide_2, slide_3);
            activeDot(index);
        } else if(index == "2") {
            slideStyle2(slide_1, slide_2, slide_3);
            activeDot(index);
        } else if(index == "3") {
            slideStyle3(slide_1, slide_2, slide_3);
            activeDot(index);
        }
    }

    function slideStyle1(card1, card2, card3) {
        card1.classList.add("active-slide");
        card2.classList.remove("active-slide");
        card3.classList.remove("active-slide");

        card1.style.top = "-40px";
        card1.style.left = "-40px";
        card1.style.right = "40px";

        card2.style.right = "-10px";
        card2.style.bottom = "0px";
        card2.style.left = "0px";
        card2.style.top = "0px";

        card3.style.bottom = "-30px";
        card3.style.right = "-30px";
        card3.style.left = "30px";
        card3.style.top = "40px";
    }
    function slideStyle2(card1, card2, card3) {
        card1.classList.remove("active-slide");
        card2.classList.add("active-slide");
        card3.classList.remove("active-slide");

        card1.style.bottom = "-30px";
        card1.style.right = "-30px";
        card1.style.left = "30px";
        card1.style.top = "40px";

        card2.style.top = "-40px";
        card2.style.left = "-40px";
        card2.style.right = "40px";

        card3.style.right = "-10px";
        card3.style.bottom = "0px";
        card3.style.left = "0px";
        card3.style.top = "0px";
    }
    function slideStyle3(card1, card2, card3) {
        card1.classList.remove("active-slide");
        card2.classList.remove("active-slide");
        card3.classList.add("active-slide");

        card1.style.right = "-10px";
        card1.style.bottom = "0px";
        card1.style.left = "0px";
        card1.style.top = "0px";

        card2.style.bottom = "-30px";
        card2.style.right = "-30px";
        card2.style.left = "30px";
        card2.style.top = "40px";

        card3.style.top = "-40px";
        card3.style.left = "-40px";
        card3.style.right = "40px";
    }

    function activeDot(index) {
        dots.forEach(dot => {
            dot.classList.remove("active-dot");
        });
        document.querySelector(`.test-slider-dot[data-slider="${index}"]`).classList.add("active-dot");
    }

    activeDot(index);
}
testemonialDesktopSlider();


//Testemoinial mobile slider
function testemonialMobileSlider(breakpoint) {
    let slides = document.querySelector("#testemonial-mobile-slides");
    let allSlides = document.querySelectorAll(".testemonial-mobile-slide");
    let slidesLength = allSlides.length;
    let slideWidth = allSlides[0].offsetWidth;
    let indicator_div = document.querySelector("#testemonial-mobile-indicator")

    let index = 0;

    let switching = true;

    let prev = document.querySelector("#testemonial-mobile-prev");
    let next = document.querySelector("#testemonial-mobile-next");

    let firstSlide = allSlides[0];
    let lastSlide = allSlides[allSlides.length - 1];

    let cloneFirstSlide = firstSlide.cloneNode(true);
    let cloneLastSlide = lastSlide.cloneNode(true);

    slides.appendChild(cloneFirstSlide);
    slides.insertBefore(cloneLastSlide, firstSlide);


    next.addEventListener("click", ()=> switchSlide("next"));
    prev.addEventListener("click", ()=> switchSlide("prev"));

    function switchSlide(arg, arg2) {
        slides.classList.add("transition");
        if(switching) {
            if(!arg2) {
                initialPosition = slides.offsetLeft;
            }
            if(arg == 'next') {
                slides.style.left = `${initialPosition - slideWidth}px`;
                index++;
            } else {
                slides.style.left = `${initialPosition + slideWidth}px`;
                index--;
            }
        }

        switching = false;
    }

    slides.addEventListener("transitionend", checkIndex);


    function checkIndex() {
        slides.classList.remove("transition");
        if(index == -1) {
            slides.style.left = `-${slidesLength * slideWidth}px`;
            index = slidesLength - 1;
        }

        if(index == slidesLength) {
            slides.style.left = `-${1 * slideWidth}px`;
            index = 0;
        }

        switching = true;
        activeDot(index);
    }

    //Indicators
    function createIndicators(){
        allSlides.forEach((function(_,i){
            let dot = document.createElement("div");
            dot.className = "dots";
            dot.setAttribute("data-slider", `${i}`);
            indicator_div.append(dot);
        }));
    }
    createIndicators();

    function activeDot(index) {
        let dots = document.querySelectorAll(".dots");
        dots.forEach(dot => dot.classList.remove("active"));

        document.querySelector(`.dots[data-slider="${index}"]`).classList.add("active");
    }
    activeDot(index);

    //Drag
    let posX1;
    let posX2;
    let initialPosition;
    let finalPosition;

    slides.addEventListener("mousedown", dragStart);
    slides.addEventListener("touchstart", dragStart);
    slides.addEventListener("touchmove", dragMove);
    slides.addEventListener("touchend", dragEnd);

    function dragStart(e) {
        e.preventDefault();
        initialPosition = slides.offsetLeft;
        if(e.type == 'touchstart') {
            posX1 = e.touches[0].clientX;
        } else {
            posX1 = e.clientX;
            document.onmouseup = dragEnd;
            document.onmousemove = dragMove;
        }
    }

    function dragMove(e) {
        if(e.type == 'touchmove') {
            posX2 = posX1 - e.touches[0].clientX;
            posX1 = e.touches[0].clientX;
        } else {
            posX2 = posX1 - e.clientX;
            posX1 = e.clientX;
        }

        slides.style.left = `${slides.offsetLeft - posX2}px`
    }

    function dragEnd() {
        finalPosition = slides.offsetLeft;
        if(finalPosition - initialPosition < - breakpoint) {
            switchSlide("next", "dragging");
        } else if(finalPosition - initialPosition > breakpoint) {
            switchSlide("prev", "dragging");
        } else {
            slides.style.left = `${initialPosition}px`;
        }

        document.onmouseup = null;
        document.onmousemove = null;
    }
}
if(window.innerWidth < 1270 && window.innerWidth > 600) {
    testemonialMobileSlider(270);
}
if(window.innerWidth < 600 && window.innerWidth > 490) {
    testemonialMobileSlider(230);
}
if(window.innerWidth < 490) {
    let window_width = window.innerWidth - 20;
    let visible  = document.querySelector("#testemonial-mobile-slider");
    let move  = document.querySelector("#testemonial-mobile-slides");
    let slides  = document.querySelectorAll(".testemonial-mobile-slide");
    visible.setAttribute("style", "width:"+window_width+"px"+"!important");
    move.setAttribute("style", "left:"+(-window_width)+"px"+"!important");
    slides.forEach(slide => {
        slide.setAttribute("style", "width:"+(window_width)+"px"+"!important");
    })
    let point = window_width / 2;
    testemonialMobileSlider(point);
}



//Newletter Button Animation
let newsletter_bttn = document.querySelector("#newsletter-input button");
let newsletter_sub = document.querySelector("#newsletter-subscribe");
let newsletter_thanks = document.querySelector("#newsletter-thanks");
let newsletter_icon = document.querySelector("#newsletter-bttn-i");

newsletter_bttn.addEventListener("click", function(){
    newsletter_sub.style.opacity = "0";
    newsletter_thanks.style.left = "10%";
    newsletter_icon.style.right = "0%";
    newsletter_bttn.style.backgroundColor = "rgb(159, 53, 77)";
});

//Mobile phone popup
let mobile_popup = document.querySelector("#phone-call-mobile"); 
window.addEventListener("scroll", function(){
    if(this.window.pageYOffset > 250) {
        mobile_popup.style.right = "20px";
    } else {
        mobile_popup.style.right = "-200%";
    }
});

mobile_popup.addEventListener("click", function(){
    window.open("tel:+381 23 23 23");
});

//GitHub profile link
let links = document.querySelectorAll(".git-hub-link");

links.forEach(link => {
    link.style.cursor = "pointer";
    link.addEventListener("click", function(){
        window.open("https://github.com/petrovic23", "_blank");
    });
});

let email_links = document.querySelectorAll(".email");

email_links.forEach(link => {
    link.addEventListener("click", function(){
        window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJZfRmjPljJkSCbhckhNJxrxMmWlWpFNZWmhbKxlQwVbrcgpQNCkBJZwkbLlZqBGTpPbSdq", "_blank");
    })
})