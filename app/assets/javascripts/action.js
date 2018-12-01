$(function(){
// ------------reservation関連 ----------------
  var month = $("#month").val();
  console.log(month);
  var day = $("#day").val();
  console.log(day);

  // 月が変更されたらvalue属性の値を取り出す
  $("#month").change(function(){
    var month = $("#month").val();
    var day = $("#day").val();
    console.log(month);
    getTimes(month, day);
  });

  // 日が変更されたらvalue属性の値を取り出す
  $("#day").change(function(){
    var month = $("#month").val();
    var day = $("#day").val();
    console.log(day);
    getTimes(month, day);
  });

  function getTimes(month, day){
    $.ajax({
      url: "/reservations",
      type: "GET",
      data: { 
        month: month,
        day: day
      },
      success: function(data){
        var day_option = "";
        for (var i = 0; i < data.days.length; i++){
          if (data.days[i] == data.day){
            day_option += '<option value="' + data.days[i] + '" selected>' + data.days[i] + '</option>'
          }else{
            day_option += '<option value="' + data.days[i] + '">' + data.days[i] + '</option>'
          }
        }
        $(".select_day").html(day_option);
        if (data.day != $("#day").val()){
          var month = $("#month").val();
          var day = $("#day").val();
          getTimes(month, day);
        }else{
          var time_option = "";
          for (var i = 0; i < data.time.length; i++){
            time_option += '<option value="' + data.time[i] + '">' + data.time[i] + '</option>'
          }
          $(".select_time").html(time_option);
          console.log(data.time);
        }
      },
      error: function(data){
        console.log("error");
      }
    });
  };

// -------- スクロールヘッダー --------
  var header = $("#header"),  //スクロールするヘッダーのid
      adclass = "scrolled",   //スクロールバーのクラス
      $main = $("#scroll"),
      scrollY = 100;           //スクロール幅(px)
  $(window).scroll(function(){
    if ($(window).scrollTop() > scrollY){
      header.addClass(adclass);
      header.removeClass("no_scroll");
      $main.css("margin-top", 116);
    }else{
      header.addClass("no_scroll");
      header.removeClass(adclass);
      $main.css("margin-top", "0");
    }
  });
// --------- google_map ------------
//  function initMap() {
//    //マップ表示
//    //test 座標
//    var test ={lat: 34.7019399, lng: 135.51002519999997};
//    var map = new google.maps.Map(document.getElementById('map'), {
//      zoom: 19,
//      center: test
//    });
//    var transitLayer = new google.maps.TransitLayer();
//    transitLayer.setMap(map);
//
//    //地図上のピン情報
//    var contentString = '住所：hoge';
//    var infowindow = new google.maps.InfoWindow({
//      content: contentString
//    });
//
//    //地図上にピンを表示
//    var marker = new google.maps.Marker({
//      position:test,
//      map: map,
//      title: contentString
//    });
//
//    //クリック時にピン情報表示
//    marker.addListener('click', function() {
//      infowindow.open(map, marker);
//    });
//  }
});

