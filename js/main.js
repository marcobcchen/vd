var contentScrollTo;
var loadingW;
var scrollTop = $(window).scrollTop();
var bodyH = $("body").height();
var headerH = $(".header").height();
var footerH = $(".footer").height();
var kvH = $(".kv").height();
var btnSideH = $(".btn-apply").height();
var scrollRatio = scrollTop / bodyH;

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

$(function(){
    $.html5Loader({
        filesToLoad: 'js/resource.json',
        onBeforeLoad: function () {
            //console.log('on BeforeLoad');
        },
        onComplete: function () {
            //console.log('on complete');
            TweenMax.to($(".loading"), 0.6, { alpha: 0, delay: 0.6 });
            $(".loading").delay(800).fadeOut();
            init();
            
        },
        onElementLoaded: function ( obj, elm) {
            //console.log(elm);
            
        },
        onUpdate: function ( percentage ) {
            loadingW = 256 * ( percentage / 100 );
            //console.log(loadingAlpha);
            $(".loading-progress-line").css("width",loadingW);
            
        }
    });
    

    $(".show-lightbox").click(function(){
        var lbTarget = $(this).attr("href");
        $(lbTarget).addClass("open");
        $("body").addClass("lb-open");
        return false;
    });

    $(".btn-close").click(function(){
        $(".lightbox").removeClass("open");
        $("body").removeClass("lb-open");
        return false;
    });

    // 點選滾動至本頁某區塊
    $(".btn-scroll-to").click(function(){
        contentScrollTo = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(contentScrollTo).offset().top - headerH -20 }, 600);
        return false;
    });

    // mobile版 成就切換
    $(".btn-tab").click(function(){
        var groupName = $(this).attr("data-group");
        var targetName = $(this).attr("data-tab");
        $("[data-group="+groupName+"]").removeClass("on");
        $("[data-tab="+targetName+"]").addClass("on");
        return false;
    });
    
}); 

// sideBtn
/*
function sideBtnPos(){

    var contentH = bodyH - headerH - footerH;
    var footerOffsetT = $(".footer").offset().top;
    if( scrollTop >= footerOffsetT ){
        $(".btn-apply").css({
            "top": headerH + kvH - btnSideH/2,
            "position": "absolute"
        });
    }else{
        $(".btn-apply").css({
            "bottom": 10,
            "position": "fixed"
        });
    }
}
*/
// parallax
function parallaxPos(){
    TweenMax.to($(".bg-1"),0.2,{"background-position": "center "+scrollRatio*-1000+"px", ease: Circ.easeOut});
    TweenMax.to($(".bg-2"),0.2,{"background-position": "center "+scrollRatio*-800+"px", ease: Circ.easeOut});
    TweenMax.to($(".bg-3"),0.2,{"background-position": "center "+scrollRatio*-1300+"px", ease: Circ.easeOut});
}
$(window).resize(function() {
    bodyH = $("body").height();
    headerH = $(".header").height();
    footerH = $(".footer").height();
    kvH = $(".kv").height();

    scrollTop = $(window).scrollTop();
    //sideBtnPos();
});
$( window ).scroll(function() {
    bodyH = $("body").height();
    scrollTop = $(window).scrollTop();
    scrollRatio = scrollTop / bodyH;
    parallaxPos();
    //sideBtnPos();
});
function init(){
    setLink();
    ani();
    parallaxPos();
    //sideBtnPos();
    //TweenMax.fromTo($(".arrow-down"), 0.45, { y: 0 }, { y: 15, repeat: -1, yoyo: true, delay: 0, ease: Power1.easeInOut });
}


function setLink(){
    
    // 桌機&行動裝置連結不同時的設定

    if(!isMobile.any()){
        $(".logo").attr("href","https://richart.tw/TSDIB_RichartWeb/RC00/RC000000?utm_source=richart&utm_medium=eventsite&utm_campaign=richart_q2newvd_202104_web&utm_content=url_evensitecampaigninside");
        // $(".btn-menu-apply").attr("href","https://richart.tw/TSDIB_RichartWeb/RC03/RC030100?utm_source=eventsite&utm_medium=click&utm_campaign=vd_201902_menubar&utm_content=application");
        // $(".btn-apply").attr("href","https://richart.tw/TSDIB_RichartWeb/RC03/RC030100?utm_source=eventsite&utm_medium=click&utm_campaign=vd_201902_FloatingButton&utm_content=application");
    }else{
        $(".logo").attr("href","https://richart.tw/TSDIB_RichartWeb/RC00/RC000000?utm_source=richart&utm_medium=eventsite&utm_campaign=richart_q2newvd_202104_mobile&utm_content=url_evensitecampaigninside");
        // $(".btn-menu-apply").attr("href","https://richart.tw/TSDIB_RichartWeb/static/event/Download_page/index.html?utm_source=eventsite&utm_medium=click&utm_campaign=vd_201902_mobilemenubar&utm_content=application");
        // $(".btn-apply").attr("href","https://richart.tw/TSDIB_RichartWeb/static/event/Download_page/index.html?utm_source=eventsite&utm_medium=click&utm_campaign=vd_201902_floatingbutton&utm_content=application");
    }

}


function ani(){
    kv("init");
    achieve("init");
    bonus("init");
    differ("init");
    app("init");
}
function dogHead(){
    var dogHead = new TimelineMax({ repeat: -1 ,delay: 3.5, repeatDelay: 4 });
    dogHead.to($(".kv-dog-head-3 img"), 0.12, { x: -2, y: 5, ease: Power4.easeOut });
    dogHead.to($(".kv-dog-head-3 img"), 0.11, { x: 0, y: 0, ease: Power4.easeOut });
    dogHead.to($(".kv-dog-head-3 img"), 0.11, { x: -2, y: 4, ease: Power4.easeOut });
    dogHead.to($(".kv-dog-head-3 img"), 0.11, { x: 0, y: 0, ease: Power4.easeOut });
    dogHead.to($(".kv-dog-head-3 img"), 0.10, { x: -2, y: 3, ease: Power4.easeOut });
    dogHead.to($(".kv-dog-head-3 img"), 0.10, { x: 0, y: 0, ease: Power4.easeOut });
}
function kv(aniStatus){
    var target = $(".kv");
    switch(aniStatus){

        case "init":
            kv("reset");
            // 20200513修改
            // new Waypoint({
            //     element: target,
            //     handler: function(dir) {
            //         switch(dir){
            //             case "down":                      
            //                 kv("display");
            //             break;
            //             case "up":                      
            //                 //kv("destroy");
            //             break;

            //         }
            //     },
            //     offset: "90%"
            // });
            // 20200513修改

            // 20200513新增
            target.waypoint({
                handler: function(dir) {
                    switch(dir){
                        case "down":                      
                            kv("display");
                        break;
                        case "up":                      
                            //kv("destroy");
                        break;

                    }
                },
                offset: "90%"
            });
            // 20200513新增
        break;


        case "display":
            //TweenMax.to($(".shape"), 0.6, { height: "100%" , repeat: 0, delay: 0.1, ease: Power4.easeOut });
            TweenMax.to($(".subtitle-kv"), 0.6, { alpha: 1, scale: 1 , repeat: 0, delay: 1, ease: Power4.easeOut });
            TweenMax.to($(".title-kv"), 0.6, { alpha: 1, scale: 1 , repeat: 0, delay: 1.05, ease: Power4.easeOut });

            TweenMax.to($(".kv-dog-1"), 0.7, { y: 0, repeat: 0, delay: 1.5, ease: Power4.easeOut });
            TweenMax.to($(".kv-dog-hand-1"), 0.7, { y: 0, repeat: 0, delay: 1.5, ease: Power4.easeOut });
            TweenMax.to($(".kv-dog-1-m"), 0.7, { y: 0, repeat: 0, delay: 1.5, ease: Power4.easeOut });

            TweenMax.to($(".kv-card"), 0.7, { scale: 1, alpha: 1, repeat: 0, delay: 1.25, ease: Power4.easeOut });
            TweenMax.to($(".kv-card-m"), 0.7, { scale: 1, alpha: 1, repeat: 0, delay: 1.25, ease: Power4.easeOut });

            TweenMax.to($(".kv-dog-2"), 0.7, { scale: 1, alpha: 1, repeat: 0, delay: 1.25, ease: Power4.easeOut });
            TweenMax.to($(".kv-dog-2-m"), 0.7, { scale: 1, alpha: 1, repeat: 0, delay: 1.25, ease: Power4.easeOut });

            TweenMax.to($(".kv-dog-3"), 0.7, { y: 0, x: 0, repeat: 0, delay: 1.75, ease: Power4.easeOut });
            TweenMax.to($(".kv-dog-head-3"), 0.7, { y: 0, x: 0, repeat: 0, delay: 1.75, ease: Power4.easeOut });
            TweenMax.to($(".kv-dog-hand-3"), 0.7, { y: 0, x: 0, repeat: 0, delay: 1.75, ease: Power4.easeOut });
            //TweenMax.to($(".kv-dog-3-m"), 0.7, { y: 0, x: 0, repeat: 0, delay: 1.75, ease: Power4.easeOut });
            
            dogHead()

            TweenMax.to($(".kv-dog-4"), 0.7, { y: 0, repeat: 0, delay: 1.6, ease: Power4.easeOut });
            TweenMax.to($(".kv-dog-hand-4"), 0.7, { y: 0, repeat: 0, delay: 1.6, ease: Power4.easeOut });
            TweenMax.to($(".kv-dog-4-m"), 0.7, { y: 0, repeat: 0, delay: 1.6, ease: Power4.easeOut });


            TweenMax.fromTo($(".kv-dog-hand-1 img"), 0.3, { rotation: 0 }, { rotation: -6, repeat: -1, yoyo: true, delay: 2.15, ease: Power2.easeOut });
            TweenMax.fromTo($(".kv-dog-hand-4 img"), 0.45, { rotation: 0 }, { rotation: -4, repeat: -1, yoyo: true, delay: 2.25, ease: Power1.easeInOut });
            TweenMax.fromTo($(".kv-card img"), 0.45, { scale: 0.95 }, { scale: 1, repeat: -1, yoyo: true, delay: 1.9, ease: Power1.easeInOut });
            TweenMax.fromTo($(".kv-card-m img"), 0.45, { scale: 0.95 }, { scale: 1, repeat: -1, yoyo: true, delay: 1.9, ease: Power1.easeInOut });


            TweenMax.to($(".kv-star-1"), 0.7, { scale: 1, alpha: 1, repeat: 0, delay: 1.95, ease: Power4.easeOut });
            TweenMax.to($(".kv-star-2"), 0.7, { scale: 1, alpha: 1, repeat: 0, delay: 2.05, ease: Power4.easeOut });
            TweenMax.to($(".kv-star-3"), 0.7, { scale: 1, alpha: 1, repeat: 0, delay: 2.1, ease: Power4.easeOut });
            TweenMax.fromTo($(".kv-star-1 img"), 0.6, { scale: 1 }, { scale: 0.6, repeat: -1, yoyo: true, delay: 2.0, ease: Power1.easeInOut });
            TweenMax.fromTo($(".kv-star-2 img"), 0.6, { scale: 1 }, { scale: 0.65, repeat: -1, yoyo: true, delay: 2.45, ease: Power1.easeInOut });
            TweenMax.fromTo($(".kv-star-3 img"), 0.6, { scale: 1 }, { scale: 0.6, repeat: -1, yoyo: true, delay: 2.15, ease: Power1.easeInOut });

            /*
            TweenMax.to($(".kv-star-1-m"), 0.7, { scale: 1, alpha: 1, repeat: 0, delay: 1.95, ease: Power4.easeOut });
            TweenMax.to($(".kv-star-2-m"), 0.7, { scale: 1, alpha: 1, repeat: 0, delay: 2.05, ease: Power4.easeOut });
            TweenMax.to($(".kv-star-3-m"), 0.7, { scale: 1, alpha: 1, repeat: 0, delay: 2.1, ease: Power4.easeOut });
            TweenMax.fromTo($(".kv-star-1-m img"), 0.6, { scale: 1 }, { scale: 0.6, repeat: -1, yoyo: true, delay: 2.0, ease: Power1.easeInOut });
            TweenMax.fromTo($(".kv-star-2-m img"), 0.6, { scale: 1 }, { scale: 0.65, repeat: -1, yoyo: true, delay: 2.45, ease: Power1.easeInOut });
            TweenMax.fromTo($(".kv-star-3-m img"), 0.6, { scale: 1 }, { scale: 0.6, repeat: -1, yoyo: true, delay: 2.15, ease: Power1.easeInOut });
            */


            TweenMax.to($(".kv-bubble"), 0.5, { scale: 1, alpha: 1, repeat: 0, delay: 2.15, ease: Power4.easeOut });
            TweenMax.to($(".kv-bubble-1"), 0.5, { scale: 1, alpha: 1, repeat: 0, delay: 2.15, ease: Power4.easeOut });
            TweenMax.to($(".kv-bubble-m"), 0.5, { scale: 1, alpha: 1, repeat: 0, delay: 2.15, ease: Power4.easeOut });
            TweenMax.to($(".kv-book"), 0.5, { y: 0, alpha: 1, repeat: 0, delay: 2.15, ease: Power4.easeOut });
            TweenMax.to($(".hash-tag"), 0.5, { y: 0, alpha: 1, repeat: 0, delay: 2.15, ease: Power4.easeOut });
            TweenMax.to($(".term"), 0.5, { y: 0, alpha: 1, repeat: 0, delay: 2.15, ease: Power4.easeOut });
            TweenMax.to($(".hint"), 0.5, { scale: 1, alpha: 1, repeat: 0, delay: 2.25, ease: Power4.easeOut });

            TweenMax.fromTo($(".arrow-down"), 0.45, { y: 0 }, { y: 15, repeat: -1, yoyo: true, delay: 3.1, ease: Power1.easeInOut });
        break;

        case "destroy":
            
        break;

        case "reset":
            //TweenMax.set($(".shape"), { height: "0%" });
            TweenMax.set($(".subtitle-kv"), { alpha: 0, scale: 0 });
            TweenMax.set($(".title-kv"), { alpha: 0, scale: 0 });

            TweenMax.set($(".kv-dog-1"), { y: 300 });
            TweenMax.set($(".kv-dog-hand-1"), { y: 300 });
            TweenMax.set($(".kv-dog-1-m"), { y: 300 });


            TweenMax.set($(".kv-card"), { alpha: 0, scale: 0 });
            //TweenMax.set($(".kv-card-m"), { alpha: 0, scale: 0 });

            TweenMax.set($(".kv-dog-2"), { alpha: 0, scale: 0 });
            //TweenMax.set($(".kv-dog-2-m"), { alpha: 0, scale: 0 });

            TweenMax.set($(".kv-dog-3"), { y: 450, x: 100 });
            TweenMax.set($(".kv-dog-head-3"), { y: 450, x: 100 });
            TweenMax.set($(".kv-dog-hand-3"), { y: 450, x: 100 });
            //TweenMax.set($(".kv-dog-3-m"), { y: 450, x: 100 });

            TweenMax.set($(".kv-dog-4"), { y: 300 });
            TweenMax.set($(".kv-dog-hand-4"), { y: 300 });
            TweenMax.set($(".kv-dog-4-m"), { y: 300 });


            TweenMax.set($(".kv-star-1"), { alpha: 0, scale: 0 });
            TweenMax.set($(".kv-star-2"), { alpha: 0, scale: 0 });
            TweenMax.set($(".kv-star-3"), { alpha: 0, scale: 0 });

            /*
            TweenMax.set($(".kv-star-1-m"), { alpha: 0, scale: 0 });
            TweenMax.set($(".kv-star-2-m"), { alpha: 0, scale: 0 });
            TweenMax.set($(".kv-star-3-m"), { alpha: 0, scale: 0 });
            */


            TweenMax.set($(".kv-bubble"), { alpha: 0, scale: 0 });
            TweenMax.set($(".kv-bubble-1"), { alpha: 0, scale: 0 });
            TweenMax.set($(".kv-bubble-m"), { alpha: 0, scale: 0 });


            TweenMax.set($(".kv-book"), { y: 60, alpha: 0 });
            TweenMax.set($(".hash-tag"), { y: 60, alpha: 0 });
            TweenMax.set($(".term"), { y: 60, alpha: 0 });
            TweenMax.set($(".hint"), { scale: 0, alpha: 0 });
        break;
    }
}

function achieve(aniStatus){
    var target = $(".achieve");
    switch(aniStatus){

        case "init":
            achieve("reset");
            // 20200513修改
            // new Waypoint({
            //     element: target,
            //     handler: function(dir) {
            //         switch(dir){
            //             case "down":                      
            //                 achieve("display");
            //             break;
            //             case "up":                      
            //                 //achieve("destroy");
            //             break;

            //         }
            //     },
            //     offset: "75%"
            // });
            // 20200513修改

            // 20200513新增
            target.waypoint({
                handler: function(dir) {
                    switch(dir){
                        case "down":                      
                            achieve("display");
                        break;
                        case "up":                      
                            //achieve("destroy");
                        break;

                    }
                },
                offset: "75%"
            });
            // 20200513新增
        break;

        case "display":
            TweenMax.to($(".achieve .img-intro-num"), 0.5, { y: 0, alpha: 1, repeat: 0, delay: 0, ease: Circ.easeOut });
            TweenMax.to($(".achieve .title-intro"), 0.5, { y: 0, alpha: 1, repeat: 0, delay: 0.15, ease: Circ.easeOut });
            //TweenMax.to($(".achieve .group-title-intro .font-aid"), 0.5, { y: 0, alpha: 1, repeat: 0, delay: 0.15, ease: Circ.easeOut });
            TweenMax.to($(".achieve .group-img-intro"), 0.5, { y: 0, alpha: 1, repeat: 0, delay: 0.25, ease: Circ.easeOut });
            TweenMax.to($(".achieve .frame-bg"), 0.4, { css:{ transform:"scaleX(1)"}, alpha: 1, repeat: 0, delay: 0.4, ease: Circ.easeOut });

            TweenMax.to($(".achieve .group-tab"), 0.6, { y: 0, alpha: 1, repeat: 0, delay: 0.6, ease: Circ.easeOut });
            TweenMax.to($(".group-item-achieve-shop"), 0.6, { y: 0, alpha: 1, repeat: 0, delay: 0.6, ease: Circ.easeOut });
            TweenMax.to($(".group-item-achieve-movie"), 0.6, { y: 0, alpha: 1, repeat: 0, delay: 0.8, ease: Circ.easeOut });
            TweenMax.to($(".group-item-achieve-eshop"), 0.6, { y: 0, alpha: 1, repeat: 0, delay: 0.9, ease: Circ.easeOut });
            TweenMax.to($(".group-item-achieve-restaurant"), 0.6, { y: 0, alpha: 1, repeat: 0, delay: 0.95, ease: Circ.easeOut });
            TweenMax.to($(".achieve .frame-item .font-aid"), 0.6, { y: 0, alpha: 1, repeat: 0, delay: 0.95, ease: Circ.easeOut });
        break;

        case "destroy":
            
        break;

        case "reset":
            TweenMax.set($(".achieve  .img-intro-num"), { y: 50, alpha: 0 });
            TweenMax.set($(".achieve .title-intro"), { y: 50, alpha: 0 });
            //TweenMax.set($(".achieve .group-title-intro .font-aid"), { y: 50, alpha: 0 });
            TweenMax.set($(".achieve .group-img-intro"), { y: 50, alpha: 0 });
            TweenMax.set($(".achieve .frame-bg"), { css:{ transform:"scaleX(0)"}, alpha: 0 });

            TweenMax.set($(".achieve .group-tab"), { y: 50, alpha: 0 });
            TweenMax.set($(".group-item-achieve-shop"), { y: 50, alpha: 0 });
            TweenMax.set($(".group-item-achieve-movie"), { y: 50, alpha: 0 });
            TweenMax.set($(".group-item-achieve-eshop"), { y: 50, alpha: 0 });
            TweenMax.set($(".group-item-achieve-restaurant"), { y: 50, alpha: 0 });
            TweenMax.set($(".achieve .frame-item .font-aid"), { y: 50, alpha: 0 });
        break;
    }
}


function bonus(aniStatus){
    var target = $(".bonus");
    switch(aniStatus){

        case "init":
            bonus("reset");
            // 20200513修改
            // new Waypoint({
            //     element: target,
            //     handler: function(dir) {
            //         switch(dir){
            //             case "down":                      
            //                 bonus("display");
            //             break;
            //             case "up":                      
            //                 //bonus("destroy");
            //             break;

            //         }
            //     },
            //     offset: "75%"
            // });
            // 20200513修改

            // 20200513新增
            target.waypoint({
                handler: function(dir) {
                    switch(dir){
                        case "down":                      
                            bonus("display");
                        break;
                        case "up":                      
                            //bonus("destroy");
                        break;

                    }
                },
                offset: "75%"
            });
            // 20200513新增
        break;

        case "display":
            TweenMax.to($(".bonus .img-intro-num"), 0.5, { y: 0, alpha: 1, repeat: 0, delay: 0, ease: Circ.easeOut });
            TweenMax.to($(".bonus .title-intro"), 0.5, { y: 0, alpha: 1, repeat: 0, delay: 0.15, ease: Circ.easeOut });
            TweenMax.to($(".bonus .subtitle-intro"), 0.5, { y: 0, alpha: 1, repeat: 0, delay: 0.25, ease: Circ.easeOut });
            TweenMax.to($(".bonus .group-img-intro"), 0.5, { y: 0, alpha: 1, repeat: 0, delay: 0.35, ease: Circ.easeOut });
            TweenMax.to($(".bonus .frame-bg"), 0.4, { css:{ transform:"scaleX(1)"}, alpha: 1, repeat: 0, delay: 0.4, ease: Circ.easeOut });

            TweenMax.to($(".group-item-bonus-shop"), 0.6, { y: 0, alpha: 1, repeat: 0, delay: 0.6, ease: Circ.easeOut });
            TweenMax.to($(".group-item-bonus-movie"), 0.6, { y: 0, alpha: 1, repeat: 0, delay: 0.8, ease: Circ.easeOut });
            TweenMax.to($(".group-item-bonus-eshop"), 0.6, { y: 0, alpha: 1, repeat: 0, delay: 0.9, ease: Circ.easeOut });
            TweenMax.to($(".group-item-bonus-restaurant"), 0.6, { y: 0, alpha: 1, repeat: 0, delay: 0.95, ease: Circ.easeOut });
            TweenMax.to($(".bonus .frame-item .font-aid"), 0.6, { y: 0, alpha: 1, repeat: 0, delay: 0.95, ease: Circ.easeOut });
        break;

        case "destroy":
            
        break;

        case "reset":
            TweenMax.set($(".bonus .img-intro-num"), { y: 50, alpha: 0 });
            TweenMax.set($(".bonus .title-intro"), { y: 50, alpha: 0 });
            TweenMax.set($(".bonus .subtitle-intro"), { y: 50, alpha: 0 });
            TweenMax.set($(".bonus .group-img-intro"), { y: 50, alpha: 0 });
            TweenMax.set($(".bonus .frame-bg"), { css:{ transform:"scaleX(0)"}, alpha: 0 });

            TweenMax.set($(".group-item-bonus-shop"), { y: 50, alpha: 0 });
            TweenMax.set($(".group-item-bonus-movie"), { y: 50, alpha: 0 });
            TweenMax.set($(".group-item-bonus-eshop"), { y: 50, alpha: 0 });
            TweenMax.set($(".group-item-bonus-restaurant"), { y: 50, alpha: 0 });
            TweenMax.set($(".bonus .frame-item .font-aid"), { y: 50, alpha: 0 });
        break;
    }
}

function differ(aniStatus){
    var target = $(".differ");
    switch(aniStatus){

        case "init":
            differ("reset");
            // 20200513修改
            // new Waypoint({
            //     element: target,
            //     handler: function(dir) {
            //         switch(dir){
            //             case "down":                      
            //                 differ("display");
            //             break;
            //             case "up":                      
            //                 //differ("destroy");
            //             break;

            //         }
            //     },
            //     offset: "75%"
            // });
            // 20200513修改

            // 20200513新增
            target.waypoint({
                handler: function(dir) {
                    switch(dir){
                        case "down":                      
                            differ("display");
                        break;
                        case "up":                      
                            //differ("destroy");
                        break;

                    }
                },
                offset: "75%"
            });
            // 20200513新增
        break;

        case "display":
            TweenMax.to($(".differ .img-intro-num"), 0.5, { y: 0, alpha: 1, repeat: 0, delay: 0, ease: Circ.easeOut });
            TweenMax.to($(".differ .title-intro"), 0.5, { y: 0, alpha: 1, repeat: 0, delay: 0.15, ease: Circ.easeOut });
            TweenMax.to($(".differ .subtitle-intro"), 0.5, { y: 0, alpha: 1, repeat: 0, delay: 0.25, ease: Circ.easeOut });
            TweenMax.to($(".differ .frame-bg"), 0.4, { css:{ transform:"scaleX(1)"}, alpha: 1, repeat: 0, delay: 0.4, ease: Circ.easeOut });

            TweenMax.to($(".group-item-differ-1"), 0.6, { y: 0, alpha: 1, repeat: 0, delay: 0.6, ease: Circ.easeOut });
            TweenMax.to($(".group-item-differ-2"), 0.6, { y: 0, alpha: 1, repeat: 0, delay: 0.8, ease: Circ.easeOut });
            TweenMax.to($(".group-item-differ-3"), 0.6, { y: 0, alpha: 1, repeat: 0, delay: 0.9, ease: Circ.easeOut });
            TweenMax.to($(".group-item-differ-4"), 0.6, { y: 0, alpha: 1, repeat: 0, delay: 0.95, ease: Circ.easeOut });
        break;

        case "destroy":
            
        break;

        case "reset":
            TweenMax.set($(".differ .group-title-intro .img-intro-num"), { y: 50, alpha: 0 });
            TweenMax.set($(".differ .group-title-intro .title-intro"), { y: 50, alpha: 0 });
            TweenMax.set($(".differ .group-title-intro .subtitle-intro"), { y: 50, alpha: 0 });
            TweenMax.set($(".differ .frame-bg"), { css:{ transform:"scaleX(0)"}, alpha: 0 });

            TweenMax.set($(".group-item-differ-1"), { y: 50, alpha: 0 });
            TweenMax.set($(".group-item-differ-2"), { y: 50, alpha: 0 });
            TweenMax.set($(".group-item-differ-3"), { y: 50, alpha: 0 });
            TweenMax.set($(".group-item-differ-4"), { y: 50, alpha: 0 });
        break;
    }
}


function app(aniStatus){
    var target = $(".app");
    switch(aniStatus){

        case "init":
            app("reset");
            // 20200513修改
            // new Waypoint({
            //     element: target,
            //     handler: function(dir) {
            //         switch(dir){
            //             case "down":                      
            //                 app("display");
            //             break;
            //             case "up":                      
            //                 //app("destroy");
            //             break;

            //         }
            //     },
            //     offset: "85%"
            // });
            // 20200513修改

            // 20200513新增
            target.waypoint({
                handler: function(dir) {
                    switch(dir){
                        case "down":                      
                            app("display");
                        break;
                        case "up":                      
                            //app("destroy");
                        break;

                    }
                },
                offset: "85%"
            });
            // 20200513新增
        break;


        case "display":
            TweenMax.to($(".btn-app"), 0.5, { scale: 1, alpha: 1, repeat: 0, delay: 0, ease: Circ.easeOut });
        break;


        case "destroy":
            
        break;


        case "reset":
            TweenMax.set($(".btn-app"), { scale: 0, alpha: 0 });
            


        break;
    }
}
