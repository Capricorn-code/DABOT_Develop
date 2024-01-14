$(function () {
    $("#open").show();
    $("#close").hide();
    // アイコンをクリック
    $("#open").click(function () {
        // ulメニューを開閉する
        $("#navi").slideToggle();
        $("#open").hide();
        $("#close").show();
    });

    // アイコンをクリック
    $("#close").click(function () {
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

//検索ボタンの必須チェック



function showAlert(message) {
    var alertBox = document.getElementById('customAlert');
    var alertMessage = document.getElementById('alertMessage');
    alertMessage.textContent = message;
    alertBox.style.display = 'block';

    // 地域選択のポップアップを非表示にする
    document.getElementById('regionPopup').style.display = 'none';

    // 背景をオーバーレイしてクリックやスクロールを無効化
    document.getElementById('overlay').style.display = 'block';
    overlay.addEventListener('click', hideAlert);

    // 一定時間後に地域選択のポップアップを再表示する
    setTimeout(function() {
        document.getElementById('regionPopup').style.display = 'block';
    }, 2000); // 3秒後に再表示（適宜時間を調整）
}

function showAlert2(message) {
    var alertBox = document.getElementById('customAlert');
    var alertMessage = document.getElementById('alertMessage');
    alertMessage.textContent = message;
    alertBox.style.display = 'block';
}

function hideAlert() {
    var alertBox = document.getElementById('customAlert');
    alertBox.style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    // バリデーションチェック後に地域選択のポップアップを再表示する
    //document.getElementById('regionPopup').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.getElementById('ID_SUBMIT');

    submitButton.addEventListener('click', function (event) {
        var keywordInput = document.getElementById('keyword');
        var keywordValue = keywordInput.value.trim();

        if (keywordValue === '') {
            event.preventDefault(); // フォームの送信を停止

            // カスタムアラートメッセージの表示
            showAlert2('キーワードを入力してください');
        }else{
            window.location.href = 'brandList.html';
        }
    });
});

$(document).ready(function () {
    // 地域で検索ボタンをクリックしたときの処理
    $("#openRegionPopup").click(function () {
        $("#regionPopup").fadeIn();
        document.getElementById('overlay').style.display = 'block';
        
        // ポップアップにフォーカスを移動
        $("#regionPopup").focus();

        // ボディにスクロールバーが表示されないようにする
        $("body").css("overflow", "hidden");
        // 親画面のスクロール位置を取得
        /*const scrollTop = window.pageYOffset || document.documentElement.scrollTop;*/
        // 親画面のスクロールを固定する
        // document.body.style.position = 'fixed';
        // document.body.style.top = `-${scrollTop}px`;

    });

    // 閉じるボタンをクリックしたときの処理
    $("#closeRegionPopup").click(function () {

        var checkboxes = document.querySelectorAll('#regionForm input[type="checkbox"]');

        // 各チェックボックスの状態を未選択（アンチェック）にする
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });

        $("#regionPopup").fadeOut();
        // オーバーレイを非表示
        document.getElementById('overlay').style.display = 'none';
        // ボディのスクロールバーを元に戻す
        document.body.style.overflow = 'auto';

        // スクロール位置を元に戻す
        // var scrollPosition = parseInt(document.body.style.top || '0', 10);
        // document.body.style.position = '';
        // document.body.style.top = '';
        // window.scrollTo(0, -scrollPosition);
    });


    // 検索ボタンが押された時の処理
    document.getElementById('regionSearchButton').addEventListener('click', function (event) {
        event.preventDefault(); // デフォルトのフォーム送信をキャンセル

        const checkboxes = document.querySelectorAll('#regionPopup input[type="checkbox"]');
        let anyChecked = false;

        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                anyChecked = true;
            }
        });

        // 一つ以上のチェックボックスが選択されていない場合、エラースタイルを適用する
        if (!anyChecked) {
            document.getElementById('overlay').style.display = 'block'; // オーバーレイを表示
            showAlert('地域を選択してください');
        } else {
            // 選択がある場合、検索を実行するなどの処理を記述
            // 例: 検索関数を呼び出すか、他の処理を実行する
            performSearch(); // 仮の検索関数を呼び出す
        }
    });

    // 仮の検索関数（選択がある場合に実行される処理）
    function performSearch() {
        // ここに検索処理などのコードを記述
        window.location.href = 'shopList.html';
        // 検索ボタンが押された後の処理を記述
    }

});


jQuery(function ($) {
    $('.bgimg-slider').bgSwitcher({
        images: ['img/top_3.jpg', 'img/top4.jpg', 'img/top5.jpg'],
        interval: 3000, // 背景画像を切り替える間隔を指定 3000=3秒
        loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
        shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
        effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
        duration: 500, // エフェクトの時間を指定します。
        easing: "swing" // エフェクトのイージングをlinear,swingから指定
    });
});
