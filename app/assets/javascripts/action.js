$(function(){
// ------------reservation関連 ----------------
  var month = $("#month").val();
  console.log(month);
  var day = $("#day").val();
  console.log(day);
  getTimes();

  // 月が変更されたらvalue属性の値を取り出す
  $("#month").change(function(){
    var month = $("#month").val();
    console.log(month);
    getTimes()
  });

  // 日が変更されたらvalue属性の値を取り出す
  $("#day").change(function(){
    var day = $("#day").val();
    console.log(day);
    getTimes()
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
        var time_option = "";
        for (var i = 0; i < data.time.length; i++){
          time_option += '<option value="' + data.time[i] + '">' + data.time[i] + '</option>'
        }
        $(".select_time").html(time_option);
        
        var day_option = "";
        for (var i = 0; i < data.day.length; i++){
          day_option += '<option value="' + data.day[i] + '">' + data.day[i] + '</option>'
        }
        $(".select_day").html(day_option);
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

