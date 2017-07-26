/**
 * Created by Administrator on 2017/6/5 0005.
 */
$(function () {
    $("#fullpage").fullpage();
    //--------------------------
    //particlesJS('particles-js', {
    //    particles: {
    //        color: '#fff',
    //        shape: 'circle', // "circle", "edge" or "triangle"
    //        opacity: 1,
    //        size: 4,
    //        size_random: true,
    //        nb: 150,
    //        line_linked: {
    //            enable_auto: true,
    //            distance: 100,
    //            color: '#fff',
    //            opacity: 1,
    //            width: 1,
    //            condensed_mode: {
    //                enable: false,
    //                rotateX: 600,
    //                rotateY: 600
    //            }
    //        },
    //        anim: {
    //            enable: true,
    //            speed: 1
    //        }
    //    },
    //    interactivity: {
    //        enable: true,
    //        mouse: {
    //            distance: 250
    //        },
    //        detect_on: 'canvas', // "canvas" or "window"
    //        mode: 'grab',
    //        line_linked: {
    //            opacity: .5
    //        },
    //        events: {
    //            onclick: {
    //                enable: true,
    //                mode: 'push', // "push" or "remove" (particles)
    //                nb: 4
    //            }
    //        }
    //    },
    //    /* Retina Display Support */
    //    retina_detect: true
    //});
    //第一屏

    $(".m_logo").on("click", function () {
        location.href  =  "login.html";
    });
    $('.m_zuozhe').hover(function () {
        $(this).children('span').eq(0).addClass('yc');
        $(this).children('span').eq(1).addClass('ys');
        $(this).stop().animate({
            width: 182
        }, 300)
    }, function () {
        $(this).stop().animate({
            width: 34
        }, 300);
        $(this).children('span').eq(1).stop().removeClass('ys');
        $(this).children('span').eq(0).removeClass('yc')
    });
    $('#m_arrows').click(function () {
        $.fn.fullpage.moveSectionDown();
    });
//第二屏特效
    $(".s2_person").mouseenter(function(){
        $(this).children().eq(0).css({
            "opacity":0
        });
        $(this).children().eq(1).stop().animate({
            "opacity":0.8,
            paddingBottom:130
        },500)
    });
    $(".s2_person").mouseleave(function(){
        $(this).children().eq(1).stop().animate({
            "opacity":0,
            paddingBottom:30
        });
        $(this).children().eq(0).css({
            "opacity":1
        });
    });

    $('.s5_desc').slideDown('normal').slideUp('slow').fadeIn(2000);

    //人物头像----------

    $(".z1,.s2_1").on("click", function () {
        $.fn.fullpage.moveTo(3);
        $(".z1").css({height: '72px', width: '72px', opacity: 1}).siblings().css({
            width: '60px',
            height: '60px',
            opacity: 0.5
        });
        $('.s3_brief span').slideDown('normal').slideUp('slow').fadeIn(2000);

    });
    $(".z2,.s2_2").on("click", function () {
        $.fn.fullpage.moveTo(4);
        $(".z2").css({height: '72px', width: '72px', opacity: 1}).siblings().css({
            width: '60px',
            height: '60px',
            opacity: 0.5
        });
        $('.s4_brief span').slideDown('normal').slideUp('slow').fadeIn(2000);

    });
    $(".z3,.s2_3").on("click", function () {
        $.fn.fullpage.moveTo(5);
        $(".z3").css({height: '72px', width: '72px', opacity: 1}).siblings().css({
            width: '60px',
            height: '60px',
            opacity: 0.5
        });
        $('.s5_desc').slideDown('normal').slideUp('slow').fadeIn(2000);

    });
    //右上角切换图片
    $(".writer li").on("mouseenter",function (){
        $(this).css({height: '72px', width: '72px', opacity: 1}).siblings().css({
            width: '60px',
            height: '60px',
            opacity: 0.5
        });
    });
    $('.writer li').on('mouseleave', function () {
        $('.writer li').css({height: '60px', width: '60px', opacity: 0.5});
        $(".mark").css({width: '72px', height: '72px', opacity: 1});
        $('.writer li').stop().animate({marginLeft: 0}, 500);
    });
    $('li').on('click', function () {
        $(this).addClass('mark').siblings().removeClass('mark');
    });

    $(".section:eq(0)").on("mouseenter", function () {
        $(".writer").fadeOut(1000);
    });
    $(".section:eq(1)").on("mouseenter", function () {
        $(".writer").fadeOut(1000);
    });

    $(".section:eq(2)").on('mouseenter', function () {
        $(".writer").fadeIn(1000);
        $(".z1").css({height: '72px', width: '72px', opacity: 1}).siblings().css({
            width: '60px',
            height: '60px',
            opacity: 0.5
        });
    });
    $(".section:eq(3)").on('mouseenter', function () {
        $(".writer").fadeIn(1000);
        $(".z2").css({height: '72px', width: '72px', opacity: 1}).siblings().css({
            width: '60px',
            height: '60px',
            opacity: 0.5
        });
    });
    $(".section:eq(4)").on('mouseenter', function () {
        $(".writer").fadeIn(1000);
        $(".z3").css({height: '72px', width: '72px', opacity: 1}).siblings().css({
            width: '60px',
            height: '60px',
            opacity: 0.5
        });
    });
    $(".section:eq(5)").on("mouseenter", function () {
        $(".writer").fadeOut(1000);
    });

    //第六屏-----------------------------------
    $(".s6_userHead").on("mouseenter", function () {
        //$(this).css({
        //    "border-radius":"44px",
        //    "opacity":"1",
        //    "height":"90px",
        //    "width":"90px"
        //})
        $(this).stop().animate({
            "border-radius":"44px",
            "height":"90px",
            "width":"90px",
            "opacity":"1"
        },300)
    });
    // $(".s6_userHead").on("mouseenter", function () {
    //     $(this).stop().animate({
    //         "border-radius":"50px",
    //                 "opacity":"0.8",
    //                 "height":"90px",
    //                 "width":"90px",
    //     },300)
    // })
    $(".s6_userHead").on("mouseleave", function () {
        $(this).stop().animate({
            "height":"68px",
            "width":"68px",
            "opacity":"1"
        },300)
    });
    //装备移入移出事件
    $(".s6-productBlock").on("mouseenter", function () {
        $(this).fadeTo(200,0.8)
    });
    $(".s6-productBlock").on("mouseleave", function () {
        $(this).fadeTo(200,1)
    });
    //微信链接点击事件
    $(".s6_shareWX").on("click", function () {
        $(".WX_floor").css("visibility","visible");
        $(".WX_window").css("visibility","visible");
    });
    $(".WX_window_top_close").on("click", function () {
        $(".WX_floor").css("visibility","hidden");
        $(".WX_window").css("visibility","hidden");
    });
    $(".window_bottom").on("click", function () {
        $(".WX_floor").css("visibility","hidden");
        $(".WX_window").css("visibility","hidden");
    });

});





