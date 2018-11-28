$(function(){
// ------------reservation関連 ----------------
  var month = $("#month").val();
  console.log(month);
  var day = $("#day").val();
  console.log(day);

  // 月が変更されたらvalue属性の値を取り出す
  $("#month").change(function(){
    var month = $("#month").val();
    console.log(month);
    getTimes();
  });

  // 日が変更されたらvalue属性の値を取り出す
  $("#day").change(function(){
    var day = $("#day").val();
    console.log(day);
    getTimes();
  });

  function getTimes(){
    $.ajax({
      url: "/reservations",
      type: "GET",
      data: { 
        month: $("#month").val(),
        day: $("#day").val()
      },
      success: function(data){
        console.log(data.time);
        var day_option = "";
        for (var i = 0; i < data.day.length; i++){
          if data.days[i] == data.day{
            day_option += '<option value="' + data.days[i] + ' selected">' + data.days[i] + '</option>';
          }else{
            day_option += '<option value="' + data.days[i] + '">' + data.days[i] + '</option>';
          }
        };
        $(".select_day").html(day_option);
        var time_option = "";
        for (var i = 0; i < data.time.length; i++){
          time_option += '<option value="' + data.time[i] + '">' + data.time[i] + '</option>';
        };
        $(".select_time").html(time_option);
      },
      error: function(data){
        console.log("error");
      };
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



// -------- ページ内リンク -------
  // URLハッシュ#取得
//  var urlHash = location.hash;
//  // ハッシュ#あればページ内スクロール
//  if(urlHash){
//    // スクロールを０に戻す stop()->動きを止める
//    $("body,html").stop().scrollTop(0);
//    setTimeout(function(){
//      // ロード時の処理待ち、時間差でスクロール
//      scrollToAnker(urlHash);
//    }, 100);
//  }
//  $("a[href^='#']").click(function(){
//    // ぺージ内リンク先取得
//    var href = $(this).attr("href");
//    // リンク先が#かからだったらhtmlに
//    var hash = href == "#" || href == "" ? "html" : href;
//    // スクロール実行
//    scrollToAnker(hash);
//    // リンク無効化
//    return false;
//  })
//
//  function scrollToAnker(hash){
//    var target = $(hash);
//    var position = target.offset().top;
//    $("body,html").stop().animate({scrollTop:position}, 500);
//  }
});

