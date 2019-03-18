setTimeout(function(){
  $('#picture2').animate({marginLeft: '180px',marginTop:'-30px'},3000);
  $('#picture3').animate({marginLeft: '180px'},3000);
  $('h5').animate({opacity:'1'},3000,function(){
    $('#picture2').animate({opacity:'0'},1000);
    $('#picture3').animate({opacity:'0'},1000,function(){

      $('#picture2_2').animate({opacity:'1'},1000);
      $('#picture3_2').animate({opacity:'1'},1000,function(){
        $('#picture2_2').animate({marginLeft:'-180px',marginTop:'-15px'},3000);
        $('#picture3_2').animate({marginLeft:'-180px'},3000);
        $('#h4-2').animate({opacity:'1'},3000,function(){
          $('#picture2_2').animate({opacity:'0'},1000);
          $('#picture3_2').animate({opacity:'0'},1000,function(){

            $('#picture2_3').animate({opacity:'1'},1000);
            $('#picture3_3').animate({opacity:'1'},1000,function(){
              $('#picture2_3').animate({marginLeft:'180px',marginTop:'-15px'},3000);
              $('#picture3_3').animate({marginLeft:'180px'},3000);
              $('#h4-3').animate({opacity:'1'},3000,function(){
                $('#picture2_3').animate({opacity:'0'},1000);
                $('#picture3_3').animate({opacity:'0'},1000,function(){
                  $('#picture2_4').animate({opacity:'1'},1000);
                  $('#picture3_4').animate({opacity:'1'},1000,function(){
                    $('#picture2_4').animate({marginLeft:'-180px',marginTop:'-30px'},3000);
                    $('#picture3_4').animate({marginLeft:'-180px'},3000);
                    $('#h4-4').animate({opacity:'1'},3000);
                  });
                });
              });
            });
          });          
        });
      });
    });
  });
})
$('#menu').click(function(){
  $('#fork').animate({opacity:'1'},500);
  $('#knife').animate({opacity:'1'},500);
})

