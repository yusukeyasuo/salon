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
  var map;
  function initMap(){
    map = new google.maps.Map(document.getElementById("map"),{
      center:{
        lat: 35.685596,     //緯度
        leg: 139.752843     //経度
      },
      zoom: 19 //地図のズーム
    });
  }
});


