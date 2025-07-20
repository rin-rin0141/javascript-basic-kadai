// btnというidを持つHTML要素を取得し、定数に代入する
const pushBtn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
pushBtn.addEventListener('click', () => {
    // textというidを持つHTML要素を取得し、定数に代入する
    const text = document.getElementById('text');

    // 作成したli要素に「ボタンをクリックしました」というテキストを追加する
    text.textContent = 'ボタンをクリックしました';
});