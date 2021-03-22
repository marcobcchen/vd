function setUTM_URL(_URL) {
    var href = _URL;
    (function ($) {
        $.ref_string = (function (href) {

            referrer = href.split("?")[1];
            if (sessionStorage.getItem("utm_source") && sessionStorage.getItem("utm_medium")) referrer = referrer.replace(/utm_/g, 'second_');
            if (sessionStorage.getItem("utm_source")) referrer += '&utm_source=' + sessionStorage.getItem("utm_source");
            if (sessionStorage.getItem("utm_medium")) referrer += '&utm_medium=' + sessionStorage.getItem("utm_medium");
            if (sessionStorage.getItem("utm_campaign")) referrer += '&utm_campaign=' + sessionStorage.getItem("utm_campaign");
            if (sessionStorage.getItem("utm_content")) referrer += '&utm_content=' + sessionStorage.getItem("utm_content");
            if (sessionStorage.getItem("utm_term")) referrer += '&utm_term=' + sessionStorage.getItem("utm_term");
            referrer = href.split("?")[0] + '?' + referrer;

            return referrer;

        })(href)
    })(jQuery);
    // $("element selector").attr('href', $.ref_string);
    // console.log('$.ref_string:', $.ref_string);
    window.open($.ref_string);
}

$(function(){

    $(".logo").click(function(){
        gtag('event', 'Click', {'event_category' : 'menubar_index','event_label' : 'click_to_TopLogo'});
    });

    $(".btn-menu-achieve").click(function(){
        gtag('event', 'Click', {'event_category' : 'menubar_index','event_label' : 'click_to_Sec01'});
    });
    $(".btn-menu-bonus").click(function(){
        gtag('event', 'Click', {'event_category' : 'menubar_index','event_label' : 'click_to_Sec02'});
    });
    $(".btn-menu-differ").click(function(){
        gtag('event', 'Click', {'event_category' : 'menubar_index','event_label' : 'click_to_Sec03'});
    });
    $(".btn-menu-how").click(function(){
        gtag('event', 'Click', {'event_category' : 'menubar_index','event_label' : 'click_to_family popup'});
    });
    $(".btn-menu-apply").click(function(){
        // ga
        gtag('event', 'Click', {'event_category' : 'menubar_index','event_label' : 'link_to_Download'});

        // 20200221
        // gtag_report_conversion();

        //20200512
        event_report_conversion(); 
        alwayson_report_conversion();

        // 20200221facebook
        fbq('track', 'Debit_AllApplicationBT');

        // yahoo
        window.dotq = window.dotq || [];
        window.dotq.push({
            'projectId': '10000',
            'properties': {
                'pixelId': '10058236',
                'qstrings': {
                    'et': 'custom',
                    'ea': 'applygreendog'
                }
            } 
        }); 

    });
    $(".btn-menu-ticket").click(function(){
        gtag('event', 'Click', {'event_category' : 'MenuBar','event_label' : 'PartimeBTN'});
    });


    $(".btn-apply").click(function(){
        // ga
        gtag('event', 'Click', {'event_category' : 'Index','event_label' : 'Download'});

        // 20200221
        // gtag_report_conversion();

        //20200512
        event_report_conversion(); 
        alwayson_report_conversion();

        // 20200221facebook
        fbq('track', 'Debit_AllApplicationBT');

        // yahoo
        window.dotq = window.dotq || [];
        window.dotq.push({
            'projectId': '10000',
            'properties': {
                'pixelId': '10058236',
                'qstrings': {
                    'et': 'custom',
                    'ea': 'applygreendog'
                }
            } 
        }); 

    });


    $(".btn-bonus-shop").click(function(){
        gtag('event', 'Click', {'event_category' : 'Index_Sec02','event_label' : 'link_to_GoToPchome'});
    });
    $(".btn-bonus-benefit").click(function(){
        gtag('event', 'Click', {'event_category' : 'Index_Sec02','event_label' : 'MoreBenefit'});
    });
    $(".btn-bonus-movie").click(function(){
        gtag('event', 'Click', {'event_category' : 'Index_Sec02','event_label' : 'link_to_GoToMovie'});
    });
    $(".btn-bonus-eshop").click(function(){
        gtag('event', 'Click', {'event_category' : 'Index_Sec02','event_label' : 'link_to_GoToShopping'});
    });
    $(".btn-bonus-restaurant").click(function(){
        gtag('event', 'Click', {'event_category' : 'Index_Sec02','event_label' : 'link_to_GoToEat'});
    });
    // 20181009新增麥當勞優惠
    $(".btn-bonus-md").click(function(){
        gtag('event', 'Click', {'event_category' : 'IndexSec02','event_label' : 'McDonald'});
    });

    $(".btn-differ-interest").click(function(){
        gtag('event', 'Click', {'event_category' : 'Index_Sec03','event_label' : 'link_to_interest'});
    }); 
    
    $(".btn-differ-shop").click(function(){
        gtag('event', 'Click', {'event_category' : 'Index_Sec03','event_label' : 'link_to_shopping'});
    }); 
    
    $(".btn-go-active").click(function(){
        gtag('event', 'Click', {'event_category' : 'Index_account','event_label' : 'link_to_download'});

        // 20200221
        // gtag_report_conversion();

        //20200512
        event_report_conversion(); 
        alwayson_report_conversion();

        // 20200221facebook
        fbq('track', 'Debit_AllApplicationBT');
        
    }); 
    
    $(".btn-rule").click(function(){
        gtag('event', 'Click', {'event_category' : 'Index_account','event_label' : 'link_to_HowToDownload'});
    });





    // mobile
    $(".btn-tab-shop").click(function(){
        gtag('event', 'Click', {'event_category' : 'MobileSec01','event_label' : 'Traffic'});
    });
    $(".btn-tab-movie").click(function(){
        gtag('event', 'Click', {'event_category' : 'MobileSec01','event_label' : 'Movie'});
    });
    $(".btn-tab-eshop").click(function(){
        gtag('event', 'Click', {'event_category' : 'MobileSec01','event_label' : 'Shopping'});
    });
    $(".btn-tab-restaurant").click(function(){
        gtag('event', 'Click', {'event_category' : 'MobileSec01','event_label' : 'Eat'});
    });

    
    $(".btn-app").click(function(){

        // ga
        gtag('event', 'Click', {'event_category' : 'MobileBTM','event_label' : 'DownloadAPP'});

        // facebook
        fbq('track', ' AddToWishlist ');

        // yahoo
        window.dotq = window.dotq || [];
        window.dotq.push({
            'projectId': '10000',
            'properties': {
                'pixelId': '10058236',
                'qstrings': {
                    'et': 'custom',
                    'ea': 'appdownload'
                }
            } 
        });

    });
    
}); 