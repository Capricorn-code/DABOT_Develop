// 検索結果を表示する関数
// searchFormが送信されたときに実行

// 検索フォームがある HTML ファイル（index.html）での処理
var searchForm = document.getElementById('searchForm');

if (searchForm) {
  searchForm.addEventListener('submit', function (event) {
    
    event.preventDefault(); // フォームの通常の動作を防ぐ

    // 入力されたキーワードを取得
    var keyword = document.getElementById('keyword').value;
    
    // ここで検索処理を実行し、結果を表示する（ここではコンソールに表示するだけ）
    searchAndDisplayResults(keyword);
  });
}

// ソート処理
function sortResults(results) {
  var sortOrder = document.getElementById('sort-order').value;

  // ソート順に応じて処理を実行
  switch (sortOrder) {
    case 'nameAsc':
      results.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      break;
    case 'nameDesc':
      results.sort(function (a, b) {
        return b.name.localeCompare(a.name);
      });
      break;
    case 'addressAsc':
      results.sort(function (a, b) {
        return a.address.localeCompare(b.address);
      });
      break;
    case 'addressDesc':
      results.sort(function (a, b) {
        return b.address.localeCompare(a.address);
      });
      break;
    default:
      // デフォルトは初期の検索結果の表示
      results.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
  }

  // ソート後の結果を表示
  displayResults(results);
}

function searchAndDisplayResults(keyword) {
  // ここに実際の検索処理を追加する（例：APIリクエストなど）

  // 仮の結果を作成
  var results = [
    {
      imageUrl: "C:/Users/yamah/portfolio/img/TFL.jpg",
      name: "店舗名1",
      address: "東京都〇〇区〇〇町1",
      rating: "★★★☆☆",
    },
    {
      imageUrl: "店舗の画像2.jpg",
      name: "店舗名2",
      address: "東京都〇〇区〇〇町2",
      rating: "★★★★☆",
    },
    {
      imageUrl: "店舗の画像2.jpg",
      name: "店舗名2",
      address: "東京都〇〇区〇〇町2",
      rating: "★★★★☆",
    }
  ];

  // ソート順を切り替えるためのフラグ
  var sortAsc = true;

  // 検索結果を表示するための要素を取得
  var resultsContainer = document.getElementById('searchResults');

  // ソートボタンのクリックイベントを追加
  document.getElementById('sort-order').addEventListener('change', function () {
    sortResults(results);
  });

  // 初回表示
  displayResults(results);

  // 検索結果表示
  function displayResults(results) {
    // 現在の結果をクリア
    resultsContainer.innerHTML = '';

    // 結果を表示
    for (var i = 0; i < results.length; i++) {
      var resultElement = document.createElement('div');
      
      // 画像を表示するための img 要素を作成
      var imageElement = document.createElement('img');
      imageElement.src = results[i].imageUrl;
      resultElement.appendChild(imageElement);

      // 店舗名を表示するための p 要素を作成
      var nameElement = document.createElement('p');
      nameElement.textContent = "店舗名: " + results[i].name;
      resultElement.appendChild(nameElement);

      // 住所を表示するための p 要素を作成
      var addressElement = document.createElement('p');
      addressElement.textContent = "住所: " + results[i].address;
      resultElement.appendChild(addressElement);

      // 結果を resultsContainer に追加
      resultsContainer.appendChild(resultElement);
    }
    // ソートボタンを非活性化
    document.getElementById('sort-order').disabled = false;
  }

}

/*
// 仮のデータベースカウント値（実際のデータベースから取得する必要があります）
const dbCount = 20; // 例: 1045件のデータ

// カウントを表示する要素を取得
const totalCountElement = document.getElementById("total-count");

// カウントを要素に表示
// 要素が存在するか確認
if (totalCountElement !== null) {
  // カウントを要素に表示
  totalCountElement.textContent = dbCount;
} else {
  console.error('要素が存在しません');
}

// ページロード時にサンプルデータを表示
window.onload = function () {
  displaySearchResults(sampleData);
};
*/

