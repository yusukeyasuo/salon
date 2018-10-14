$(function(){
  var header = $("#header");  //スクロールするヘッダーのid
  var adclass = "scrolled";   //スクロールバーのクラス
  var scrollY = 15;           //スクロール幅(px)
  $(window).scroll(function(){
    if ($(window).scrollTop() > scrollY){
      header.addClass(adclass);
    }else{
      header.removeClass(adclass);
    }
  });
});
