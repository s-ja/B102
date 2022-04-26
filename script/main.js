let i =0;

$(function(){
    // popup
    // slide
    // menu
    popup();

    // slide();
    setInterval(slide,3000);
    // let interval_id = setInterval(slide,3000);

    menu();
})

function popup(){ // 2
    open_popup(); // 2-1
    close_popup(); // 2-2
}

function open_popup(){ // 2-1
    $(".news li").first().click(function(){
        // $("#modal").css("display","block")
        // $("#modal").show()
        $("#modal").fadeIn()
    })
}
function close_popup(){ // 2-2
    // $("#modal").find("button").click(function(){
    $("#modal button").click(function(){
        // $("#modal").css("display","none")
        // $("#modal").hide()
        $("#modal").fadeOut()
    })
}

function slide(){
    // $("#imgs").slideDown()
    // $("#imgs").slideUp()
    if(i>=3) i=0
    let new_top = -300 * i
    $("#imgs").animate({ // css 속성을 통해 애니메이션 부여
        marginTop: new_top
    })
    i++;
}

function menu(){
    $("#gnb > li").mouseenter(function(){
        let index = $(this).index();
        // $("#gnb_bg").css("background","#0257ff url('../images/line_art"+index+"png')")
        $("#gnb_bg").css("background","#0257ff url('../images/lineart.png')")
        $(this).addClass("highlight");
        $("#gnb_bg").stop().slideDown()
        // $(".lnb").fadeIn()
        $(".lnb").stop().slideDown()
    })
    $("#gnb > li").mouseleave(function(){
        $(this).removeClass("highlight");
        $("#gnb_bg").stop().slideUp()
        // $(".lnb").fadeOut()
        $(".lnb").stop().slideUp()
    });
    $(".lnb > li").mouseenter(function(){
        $(this).addClass("active")
    })
    $(".lnb > li").mouseleave(function(){
        $(this).removeClass("active")
    })
}