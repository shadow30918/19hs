window.onload = function(){
    $('.loading').fadeOut(500,function(){
        //GEvent('進入網站');
        $('.loading').remove();
        $('.airplan,.boy,.girl,.title').addClass('act');
    });
}

var link = {
        living : [
            'http://www.ocean-hotel.com.tw/',
            'http://www.22alleys.com.tw/',
            'http://www.goldensandskinmen.com/',
            'http://www.yidear-hotel.com/',
            '',
            '',
            ''
        ],
        eat : [
            'http://www.fourpoints-penghu.com/',
            'http://www.hotelroyal.com.tw/chihpen/dining.aspx?NO=545',
            'http://centuryhotel.com.tw/food.php',
            'http://www.hotelroyal.com.tw/chihpen/dining.aspx?NO=1163',
            'https://www.facebook.com/golddan06/',
            '',
            '',
            ''
        ],
        play : [
            'https://www.gondola.taipei/Default.aspx',
            'https://www.startravel.com.tw/',
            'http://www.phtravel.com.tw/',
            '',
            ''
        ],
        move : [
            'http://www.penghu-travel.com.tw/chengfa-traveler/',
            'http://www.phtravel.com.tw/rent.php'
        ],
        buy : [
            'https://www.facebook.com/22Alleys/',
            '',
            '',
            '',
            '',
            '',
            ''
        ]
    }


$(document).ready(function(){

    $('.nav div').click(function(){
        nav = $(this).attr('class');
        HHH = $('#'+nav).offset().top;
        //console.log(nav);
        $('body,html').animate({
            scrollTop: HHH - 50
        },1000,'swing');
        //GEvent('標籤_'+nav);
    })

    $('.menu li').click(function(){
    index = $(this).index();
    console.log(index);

    if(index==1){
        alert('感謝您的支持，金門方案已售完！');
    }else{
        $('.page').hide();
        $('.page:nth-child('+(index+2)+')').fadeIn(500);
    }
})

    /*
    $('.content ul li .hover').click(function(){
        group = $(this).parents('ul').attr('class');
        index = $(this).parent().index();
        //console.log(link[group][index]);

        if(link[group][index].length>0){
            //GEvent('鏈結_'+group+'_'+(index+1)+'_'+link[group][index]);
            window.open(link[group][index],'_blank');
        }else{
            alert('沒有鏈結');
        }
    })    
    */
});

