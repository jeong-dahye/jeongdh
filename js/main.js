$(document).ready(function(){
    $('.con03List').slick({
        slidesToShow:2, //보이는 슬라디드
        slidesToScroll:1, //슬라이드 넘기는 수
        //centerMode:true, // 이미지를 가운데 정렬하여 잘린 이미지도 보이도록 해주는 역할
        infinite:true, //반복재생
        arrows:false, //화살표
        variableWidth:true,
        responsive: [
        {
          breakpoint:1200, // 화면 비율 1200
          settings:{
            arrows:false,
            //centerMode:true,
            slidesToShow:2,
          }
        },
        {
          breakpoint:1080,
          settings:{
            arrows:false,
            //centerMode:true,
            slidesToShow:2,
              }
            },
            {
              breakpoint:720,
              settings:{
                arrows:false,
                //centerMode:true,
                slidesToShow:1,
                  }
                },
                {
                  breakpoint:360,
                  settings:{
                    arrows:false,
                    //centerMode:true,
                    slidesToShow:1,
                      }
                    }
              ]
        });
    
    $('.con07List').slick({
        slidesToShow:2, //보이는 슬라디드
        slidesToScroll:1, //슬라이드 넘기는 수
        //centerMode:true, // 이미지를 가운데 정렬하여 잘린 이미지도 보이도록 해주는 역할
        infinite:true, //반복재생
        arrows:false, //화살표
        variableWidth:true,
        responsive: [
        {
          breakpoint:1200, // 화면 비율 1200
          settings:{
            arrows:false,
            //centerMode:true,
            slidesToShow:2,
          }
        },
        {
          breakpoint:1080,
          settings:{
            arrows:false,
            //centerMode:true,
            slidesToShow:2,
              }
            },
            {
              breakpoint:720,
              settings:{
                arrows:false,
                //centerMode:true,
                slidesToShow:1,
                  }
                },
                {
                  breakpoint:360,
                  settings:{
                    arrows:false,
                    //centerMode:true,
                    slidesToShow:1,
                      }
                    }
              ]
        });
})