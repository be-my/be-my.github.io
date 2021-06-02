$("img[data-lazy]").each(function(){$(this).attr("src",$(this).attr("data-lazy"));$(this).addClass("fade");});if($("#homepagejumbo").length>0){var video=`
    <div class="wrapper" style="position: absolute;top: 0;left: 0; width: 100%; height: 100%;">
      <video style=" width: 100%;object-fit: cover; height: 100%;" preload autoplay loop muted playsinline poster="poster.jpg" id="bgvid">
        <source src="/video/background2.mp4" type="video/mp4">
      </video>
    </div>
    `;$("#homepagejumbo").append(video);}
$(".page-id-505 .newsletter-flex .cl-button.bluegreen").text("Check your position, get your Referral code or Join the waitlist");$(".newsletter-flex button").on("click",function(){if(!isEmail($(this).parent().find("#email").val())){$(this).parent().find("#email").addClass("error");if($(this).parent().find(".errorMail").length==0){$(this).closest(".newsletter-flex").append('<p class="errorMail"> Email is not valid. </p>');}}else{$(this).parent().find("#email").removeClass("error");$(".errorMail").remove();}});function isEmail(email){var regex=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;return regex.test(email);}
$(".remember .advert-items p").eq(0).addClass("visible");function swapTexts(){var y=$(".remember .advert-items p.visible");var x=$(y).index();$(y).removeClass("visible");var lg=$(".remember .advert-items p").length;if(x+1==lg){$(".remember .advert-items p").eq(0).addClass("visible");}else{$(x).removeClass("visible");$(".remember .advert-items p").eq(x+1).addClass("visible");}}
setInterval(function(){swapTexts();},7000);function adjustPaddings(){if($(window).width()<=991){$("section").each(function(){var style767=$(this).attr("style767");$(this).attr("style",style767);});}
else if($(window).width()>991&&$(window).width()<=1441){$("section").each(function(){var styleLaptop=$(this).attr("styleLaptop");$(this).attr("style",styleLaptop);});}
else{$("section").each(function(){var styleDesktop=$(this).attr("styledesktop");$(this).attr("style",styleDesktop);});}}
adjustPaddings();makePerfectCircles();$(".faq-item .question").on("click",function(){$(this).toggleClass("opened");$(this).parent().find(".answer").slideToggle();});$('.menu-wrapper').on('click',function(){$('.hamburger-menu').toggleClass('animate');$(".mainmenu").toggleClass("show");$('body').toggleClass("fixedPosition");var ix=$(".mainmenu").hasClass("show");if($("#homepagejumbo").length>0){if(ix){$('.header').addClass('white');$(".header-flex .logo img").removeClass("inverted");$(".header-flex .logo img").attr("src","/images/logoa.svg");}
else{$('.header').removeClass('white');$(".header-flex .logo img").attr("src","/images/logoa.svg");$(".header-flex .logo img").addClass("inverted");stickyHeaderHome();}}});
$(window).resize(function(){makePerfectCircles();adjustPaddings();});function makePerfectCircles(){$(".circleWrapper").each(function(){$(this).width($(this).height());});$(".smallCircle").each(function(){$(this).width($(this).height());});}
var circle=`
<div class="circleWrapper">
    <div class="bigCircle"></div>
    <div class="smallCircle"></div>
</div>`;$(".addCircleRightSideContainer .container").append(circle);$(".addCircleLeftSideContainer .container").append(circle);setTimeout(function(){makePerfectCircles();},50);$("form.search-form input").on("keyup",function(){var x=$(this).val().length;if(x>0){$(this).parent().find("button").css("color","#46cca1");}
else{$(this).parent().find("button").css("color","rgba(49,74,126, 0.5)");}});$(".special a").addClass("cl-button");$(".special a").addClass("bluegreen");$(window).scroll(function(){stickyHeaderHome()});stickyHeaderHome();function stickyHeaderHome(){if($("#homepagejumbo").length>0){if($(document).scrollTop()>60){$('.header').addClass('white');$(".header-flex .logo img").removeClass("inverted");$(".header-flex .logo img").attr("src","/images/logoa.svg");}
else{$('.header').removeClass('white');$(".header-flex .logo img").addClass("inverted");$(".header-flex .logo img").attr("src","/images/logoa.svg");}}}
$(".vestas-flex .video .playvideo").on("click",function(){$(this).parent().find("img").fadeOut("slow");$(this).parent().find("iframe").attr("src",$(this).parent().find("iframe").attr("data-src"));$(this).fadeOut("slow");});$(".lightFooter").closest("body").find(".footer").addClass("light");