
// search button toggler
$(document).ready(function() {
  
  $(".myDropdown_mini").css("display","none");
	$(".search").click(function() {
    $(".togglesearch").toggle();
	  $("input[type='text']").focus();
	 });

   $(".togglebar").click(function() {      $(".responsive_menu").toggle();    });

   
});


// Account toggler

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  // document.getElementById("myDropdown").style.display = 'block';
}
function myFunctionmini() {
  document.getElementById("myDropdown_mini").classList.toggle("show");
}



// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// testimonials
  jQuery(document).ready(function($) {
                "use strict";
                //  TESTIMONIALS CAROUSEL HOOK
                $('#customers-testimonials').owlCarousel({
                    loop: true,
                    center: true,
                    items: 3,
                    margin: 0,
                    autoplay: true,
                    dots:true,
                    autoplayTimeout: 5000,
                    smartSpeed: 450,
                    responsive: {
                      0: {
                        items: 1
                      },
                      768: {
                        items: 2
                      },
                      1170: {
                        items: 3
                      }
                    }
                });
            });

// cart steps toggler

function toggle1(ele) {
  var cont = document.getElementById('cont1');
  if (cont.style.display == 'block') {cont.style.display = 'none';document.getElementById(ele.id).value = 'Show DIV1';  }
  else {cont.style.display = 'block';document.getElementById(ele.id).value = 'Hide DIV';  }
}
function toggle2(ele) {
  var cont = document.getElementById('cont2');
  if (cont.style.display == 'block') {cont.style.display = 'none';document.getElementById(ele.id).value = 'Show DIV2';  }
  else {cont.style.display = 'block';document.getElementById(ele.id).value = 'Hide DIV';  }
}
function toggle3(ele) {
  var cont = document.getElementById('cont3');
  if (cont.style.display == 'block') {cont.style.display = 'none';document.getElementById(ele.id).value = 'Show DIV3';  }
  else {cont.style.display = 'block';document.getElementById(ele.id).value = 'Hide DIV';  }
}
function toggle4(ele) {
  var cont = document.getElementById('cont4');
  if (cont.style.display == 'block') {cont.style.display = 'none';document.getElementById(ele.id).value = 'Show DIV4';  }
  else {cont.style.display = 'block';document.getElementById(ele.id).value = 'Hide DIV';  }
}