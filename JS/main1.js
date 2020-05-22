$(document).ready(function(){
    setInterval(changeMargin,400);
    function changeMargin(){
        var headerH=$('header').height();
        if (window.matchMedia('(max-width: 992px)').matches) {
            $('main').css("margin-top","0");
        }
        else{
            $('main').css("margin-top","-"+(headerH+$(".ghost").height())+"px");
        }
    }
})