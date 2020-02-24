

//画像情報のオブジェクトを格納した配列
const picArray = [
{src: './images/pic_1.jpg', title: 'picture 1'},
{src: './images/pic_2.jpg', title: 'picture 2'},
{src: './images/pic_3.jpg', title: 'picture 3'},
{src: './images/pic_4.jpg', title: 'picture 4'},
{src: './images/pic_5.jpg', title: 'picture 5'},
{src: './images/pic_6.jpg', title: 'picture 6'}
];


//スライドショーが再生中かどうかを記録しておくためのグローバル変数
let playingID = 0;

//写真を切り替える関数
//関数名「changePicture」
function changePicture() {
  if (playingID > picArray.length) {
    playingID = 0;
  } else {
    playingID ++;
    document.getElementById('pics').src = picArray[0].src
    document.getElementById('pic-title').innterHTML = picArray[0].title
    } 
}

// ボタンを押してスライドショーを再生・停止する関数
//関数名「playSlidedeshow」

