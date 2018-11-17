//function initMap() {
//  var test ={lat: 34.7019399, lng: 135.51002519999997};
//  var map = new google.maps.Map(document.getElementById('map'), {
//    zoom: 15,
//    center: test
//  });
//  var transitLayer = new google.maps.TransitLayer();
//  transitLayer.setMap(map);
//
//  var contentString = '住所：hoge';
//  var infowindow = new google.maps.InfoWindow({
//    content: contentString
//  });
//
//  var marker = new google.maps.Marker({
//    position:test,
//    map: map,
//    title: contentString
//  });
//
//  marker.addListener('click', function() {
//    infowindow.open(map, marker);
//  });
//<script async defer
//        src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAClZyQNNSuhJtOIvDCbBSlrBwPci8BphM&callback=initMap">
//</script>
//}


$(function(){
// 選択した月日を変数へ代入
  var month = $("#month").val();
  console.log(month);
  var day = $("#day").val();
  console.log(day);

  // 初期値から変更されたvalue属性の値を取り出す
  $("#month").change(function(){
    var month = $("#month").val();
    console.log(month);
    $.ajax({
      url: "/reservations",
      type: "GET",
      data: {month: $("#month").val()},
      datatype: "html",
      success: function(data){
        console.log("success");
      },
      error: function(data){
        console.log("error");
      }
      });
  });
  //[name=day]：nameのdayを指定
  $("[name=day]").change(function(){
    var day = $("[name=day]").val();
    console.log(day);
  });
//  var test = $("#month").prop("month");
//  console.log(test);
//  var header = $("#header");  //スクロールするヘッダーのid
//  var adclass = "scrolled";   //スクロールバーのクラス
//  var scrollY = 15;           //スクロール幅(px)
//  $(window).scroll(function(){
//    if ($(window).scrollTop() > scrollY){
//      header.addClass(adclass);
//    }else{
//      header.removeClass(adclass);
//    }
//  });
//  var map;
//  function initMap(){
//    map = new google.maps.Map(document.getElementById("map"),{
//      center:{
//        lat: 34.7019399,     //緯度
//        leg: 135.51002519999997     //経度
//      },
//      zoom: 19 //地図のズーム
//    });
//  }
});


