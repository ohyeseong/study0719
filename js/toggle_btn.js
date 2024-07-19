$(document).ready(function(){
    $(".menu_toggle_btn").click(function(){
        $(".h_menu").stop().slideToggle("fast");
    })// .menu_toggle_btn.click

    $(".search_select_box span").hover(function(){
        $(this).next().stop().slideDown();
        // next는 자신 다음으로 오는 구조를 말한다
    }, function(){
        $(this).next().stop().slideUp();
    })// .search_select_box span.hover
})// 제이커리 끝