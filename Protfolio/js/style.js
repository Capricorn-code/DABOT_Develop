$(function(){
        $("#open").show();
        $("#close").hide();
    // アイコンをクリック
	$("#open").click(function(){
		// ulメニューを開閉する
		$("#navi").slideToggle();
        $("#open").hide();
        $("#close").show();
	});
 
    // アイコンをクリック
	$("#close").click(function(){
		// ulメニューを開閉する
		$("#navi").slideToggle();
        $("#open").show();
        $("#close").hide();
	});
});    

$(function () {
    var topBtn = $('#pagetop');
    topBtn.hide();
    //スクロールが300に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールでトップへもどる
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

$(document).ready(function() {
    // 地域で検索ボタンをクリックしたときの処理
    $("#openRegionPopup").click(function() {
        $("#regionPopup").fadeIn();
        document.getElementById('overlay').style.display = 'block';
        // ボディにスクロールバーが表示されないようにする
        document.body.style.overflow = 'hidden';

    });

    // 閉じるボタンをクリックしたときの処理
    $("#closeRegionPopup").click(function() {
        $("#regionPopup").fadeOut();
        // オーバーレイを非表示
        document.getElementById('overlay').style.display = 'none';
        // ボディのスクロールバーを元に戻す
        document.body.style.overflow = 'auto';
    });

    // 検索ボタンをクリックしたときの処理
    $("#regionSearchButton").click(function() {
        // TODO: 選択された地域に基づいて検索を実行する処理を追加
        // 例えば、選択された地域の値を取得して、それに基づいて検索を行う
    });
});

jQuery(function($) {
    　$('.bgimg-slider').bgSwitcher({
    　　images: ['file:///C:/Users/81907/OneDrive/デスクトップ/portfolio/img/top_3.jpg','file:///C:/Users/81907/OneDrive/デスクトップ/portfolio/img/top4.jpg',
'file:///C:/Users/81907/OneDrive/デスクトップ/portfolio/img/top5.jpg'],
    　　interval: 3000, // 背景画像を切り替える間隔を指定 3000=3秒
        loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
        shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
        effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
        duration: 500, // エフェクトの時間を指定します。
        easing: "swing" // エフェクトのイージングをlinear,swingから指定
    　});
    });