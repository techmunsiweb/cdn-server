// popup modal
$(document).ready(function() {
  $('#open-popup').click(function() {
      $('#my-popup').fadeIn();
  });

  $('#close-popup').click(function() {
      $('#my-popup').fadeOut();
  });

  $('#bg-close').click(function() {
      $('#my-popup').fadeOut();
  });
});

// popup modal
var bodyStatus = true;
$(document).on('click', '.toggle-menu', function() {
  $('.mob-list').slideToggle(250);
});


$(document).on('click', '.top-up', function() {
  $("html, body").animate({ scrollTop: "0" });
});


$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  // console.log(scroll)

  if (scroll > 700) {
      $('.top-up').css({
          'opacity': '1',
          'display': 'block'
      })
  } else {
      $('.top-up').css({
          'opacity': '0'
      })
  }
})

// clearfix js


// clearfix js mobile
// var headerheaight = document.querySelector(".mobile-header").offsetHeight;
// document.querySelector('.margin-top').style.marginTop = `${headerheaight - 1}px`;





// var headerheaight = document.querySelector(".custom-header").offsetHeight;
//         document.querySelector('.margin-top').style.marginTop = `${headerheaight - 5}px`;
//         console.log(headerheaight);



// _________ Infinity Function ____________
infinityFun();
var headerHeight, bodyWidth, mobHeader;

function infinityFun() {
  headerHeight = $('header').height();
  mobHeader = $('.mobile-header').height();
  bodyWidth = $('body').width();
  // console.warn(headerHeight);
  if (bodyWidth > 1024) {
      $('.header-clearfix').css({
          'margin-top': headerHeight - 5 + 'px',
      })
  } else {
      $('.header-clearfix').css({
          'margin-top': mobHeader - 4 + 'px',
      })
  }
  setTimeout(() => {
      infinityFun();
  }, 300)

  // console.log(bodyWidth)
}
// _________ Infinity Function ____________


//login toggle starts



$(".signup").click(function() {
  if (bodyWidth > 575) {
      $('.login').animate({
          'right': '10%',
      }, 1000);
      $('.popup-close').css({
          'display': 'block',
      })
  } else if (bodyWidth < 574) {
      $('.login').animate({
          'right': '4%',
      }, 1000);
      $('.popup-close').css({
          'display': 'block',
      })
  }

});




$(".close").click(function() {
  $('.login').animate({
      'right': '-100%',
  }, 1000)
  $('.popup-close').css({
      'display': 'none',
  })
});

$(".popup-close").click(function() {
  $(".close").trigger('click');
});

// console.warn(bodyWidth,"adfsa");




//_____________ Favicon icon

$(document).ready(function() {
      $('head').append(`
        <link rel="icon" type="image/x-icon" href="assets/images/ce-logo.png">
      `);
  })
  //_____________ Favicon icon





// right side form

$(document).on('click', '.login .alreadyAccount', function() {
  $('.login .login-form').removeClass('active');
  $('.login .login-form.sign-up').addClass('active');
});

$(document).on('click', '.dont_haveAccount', function() {
  $('.login .login-form').removeClass('active');
  $('.login .login-form.login-form-one').addClass('active');
});

$(document).on('click', '.forgot_password', function() {
  $('.login .login-form').removeClass('active');
  $('.login-form.forgot-password').addClass('active');
});

$(document).on('click', '.sendLink', function() {
  $('.login .login-form').removeClass('active');
  $('.login-form.confirm-password').addClass('active');
});



// active tab
$(document).on('click', '.tab .tablinks', function() {
  $('.tab .tablinks').removeClass('active');
  $(this).addClass('active');
  var x = $(this).attr('tag-status');
  console.warn(x);
  $('.tabcontent').removeClass('active');
  $('[tag-target="' + x + '"]').addClass('active');
});


// active tab


// $(document).on('focus', 'input', function(){
//   $(this).addClass('adsf')
// })



/* js  */
/* create a onload function on body and use this js  */


function preloader() {

  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}


// $("section.newsletter .content .subscribe form").submit(function(){
//   $(".thanku-text").Toggle()

// });

$(document).ready(function() {
  // Attach event listener to the form submit event
  $('section.newsletter .content .subscribe form').submit(function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Call your function here
      myFunction();
  });

  // Define your function
  function myFunction() {
      // Your code here
      console.log('Form submitted!');
      // alert('submitted')
      $(".subscribe").hide();
      $(".newsletter .content .purple-box").hide();
      $(".thanku-text").show();
  }
});


function mythank() {
  myFunction();
}


// popup modal
function openModal(popupID) {
  // alert('hello')
  console.warn(popupID);
  var videodata = $('img.imgvideo').attr('data-id');
  console.warn(videodata);
  $('.embed-responsive-item').attr('src', videodata);
  $('#' + popupID).addClass('active-popup');

  $('#' + popupID).fadeIn(220);
}


$(document).on('click', '.close-btn', function() {
  $(this).parent().parent().parent().fadeOut(220);
});

// $(document).on('click', '#myPopup', function(){
// $('.modal-body').fadeOut(220);
// });
$('#myPopup').click(function() {
  $(this).fadeOut();
});
$('.close-btn').click(function(){
  // alert('hello')
  $('video').hide();
});


//Home video slider
$(document).on('click', '.thumb-slider .swiper-slide', function() {
  var getimgdata = $(this).find('img.clickable-image').attr('src');
  var getvideodata = $(this).find('img.clickable-image').attr('data-id');
  $('.main-video img.replace-img').attr('src', getimgdata);
  $('.main-video img.imgvideo').attr('data-id', getvideodata);
});


//Features Course audio section
$(document).on('click', '.audio_flex', function(){
      $('audio .pause').trigger('click');
  })
  /* js end */

  //Load More

  //input value none on click of close button

  

  $(document).ready(function() {
      // Click event handler for the close button
      $('#login-close').on('click', function() {
        // Set the input value to an empty string
        $('.login-form form input').val('');
      // alert('hello login')
      });
    });


//dropdown of sign out

$('.User-avtar').click(function(){

  // alert('hello reeva')
  if( $(".User-Dropdown").hasClass( "U-open" ) ){
          $('.User-Dropdown').removeClass("U-open");
  }
  else {
          $('.User-Dropdown').addClass("U-open");
  }
});