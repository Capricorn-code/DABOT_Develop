// script.js
// JavaScriptを使用してデータを取得し、表示するロジックを実装
// ここにデータ取得のコードを追加する必要があります
// 以下はダミーのコード例
const sampleData = [
    {
        imageUrl: 'C:/Users/yamah/portfolio/img/TFL.jpg',
        name: '店舗名1',
        address: '東京都〇〇区〇〇町1',
        rating: '★★★☆☆'
    },
    {
        imageUrl: '店舗の画像2.jpg',
        name: '店舗名2',
        address: '東京都〇〇区〇〇町2',
        rating: '★★★★☆'
    },
    {
        imageUrl: '店舗の画像2.jpg',
        name: '店舗名2',
        address: '東京都〇〇区〇〇町2',
        rating: '★★★★☆'
    }
    // 他のデータも同様に追加
];

// 検索結果を表示する関数
function displaySearchResults(data) {
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = ''; // リストをクリア

    data.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');

        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = 'サウナの画像';

        const name = document.createElement('h2');
        name.textContent = item.name;

        const address = document.createElement('p');
        address.textContent = `住所：${item.address}`;

        const rating = document.createElement('p');
        rating.textContent = `評価：${item.rating}`;

        resultItem.appendChild(img);
        resultItem.appendChild(name);
        resultItem.appendChild(address);
        resultItem.appendChild(rating);

        searchResults.appendChild(resultItem);
    });
}

// 仮のデータベースカウント値（実際のデータベースから取得する必要があります）
const dbCount = 20; // 例: 1045件のデータ

// カウントを表示する要素を取得
const totalCountElement = document.getElementById('total-count');

// カウントを要素に表示
totalCountElement.textContent = dbCount;

// ページロード時にサンプルデータを表示
window.onload = function() {
    displaySearchResults(sampleData);
};