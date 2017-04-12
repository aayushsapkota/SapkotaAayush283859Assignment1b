//Student name: Aayush Sapkota
//Student Number: s283859

//toggle to see and hide forms for change
$(document).ready(function(){
  $('#changeShow').click(function(){
    $('.main__forms').eq(1).slideToggle();                  
                    
    });
  });
//toggle to see and hide forms for delete
$(document).ready(function(){
  $('#deleteElShow').click(function(){
    $('.main__forms').eq(2).slideToggle();                  
                    
    });
  });


//show and hide cards to make content less packed
$(document).ready(function(){
    //show options for slide show toggle so, in case js fails these options do not display
    $('.Cards_show, .Cards_show_Caption').show();
    
    //only if js runs hide the elements
     $('.Main__CardsList').eq(1).hide();
     $('.Main__CardsList').eq(2).hide();
    
    //onclick listeners attached to signle object make in fade in and out.
    $('.Cards_show').eq(0).click(function(){
         $('.Main__CardsList').eq(1).slideToggle(1000);
    });
       
    $('.Cards_show').eq(1).click(function(){
         $('.Main__CardsList').eq(2).slideToggle(1000);
    });
});

//slide show workings
$(document).ready(function(){
    //slideshow showing
    $('.main__slideshow').show();
    //selecting slide show div to hide
   $(".slideshow > div:gt(0)").hide();

setInterval(function() {
    //slide show from first fade in and out 1 second each and for total interval 3 seconds 
  $('.slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('.slideshow');
}, 4000);
});

$(document).ready(function(){
    //mouseover over td to change color to cadetblue
   $('td').mouseover(function(){
       $('td').css('background-color','cadetblue');
   }); 
});


$(document).ready(function(){
    $('.jsButtonsText').show();
    
    //change css class to =toggle styling
    $('#colorchanger').click(function(){
      $('.js_buttons').toggleClass('backgroundColor');
      
    });
        //change css class to toggle styling
    $('#BorderStyle').click(function(){
             $('.js_buttons').toggleClass('borderStyle');
       
    });
    //change css class to toggle styling
    $('#ToggleFontSize').click(function(){
        $('.js_buttons').toggleClass('increaseFontSize');
    });
   
    
});


