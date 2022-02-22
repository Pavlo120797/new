


$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        infinite: true,
        speed:800,
        autoplaySpeed:6000,
        draggable:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive:[
          {
            breakpoint: 576,
            settings: {
                 
               draggable:true,
               slidesToShow:1,
               dots:true,}
  
          },
          
        ]
      });
       

    });

