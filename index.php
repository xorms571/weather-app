<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/main.css">
  <link rel="stylesheet" href="./css/weather.css">
  <link rel="stylesheet" href="./css/days-btns.css">
  <link rel="stylesheet" href="./css/svg-container.css">
  <link rel="stylesheet" href="./css/section-detail.css">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/7d1f9ca95d.js" crossorigin="anonymous"></script>
  <script src="./js/main.js" type="module"></script>
  <title>날씨앱</title>
</head>

<body>
  <main class="app">
    <section class="weather">
      <h1>
        <img src="./img/main/title.png" alt="">
      </h1>
      <div class="days-btns">
        <!-- 스크립트로 일자별 버튼 출력 -->
      </div>
      <div class="svg-container">
        <?php include "korea-map-svg.php" ?>
        <div class="markers">
          <!-- 스크립트로 지역별 마커 출력 -->
        </div>
        
      </div>
      <div class="apm-btns">
          <button class="current-btn active">현재</button>
          <button class="am-btn">오전</button>
          <button class="pm-btn">오후</button>
        </div>
      
      <a class="copyRight" href="https://openweathermap.org/">
        <img src="./img/main/openwheather.png" alt="">
      </a>
    </section>
    <section class="detail">
      <h2 class="hidden">날씨 상세 정보</h2>
      <div class="inner">
        <p>
          <span><i class="fa-regular fa-comment-dots"></i></span>
          <em>날씨정보</em>
          <b class="desc"></b>
        </p>
        <p>
          <span><i class="fa-solid fa-temperature-three-quarters"></i></span>
          <em>온도정보</em>
          <b class="temp-law"></b> / 
          <b class="temp-hight"></b>
        </p>
        <p>
          <span><i class="fa-solid fa-person"></i></span>
          <em>체감온도</em>
          <b class="temp-feel-morn"></b>
          <b class="temp-feel-day"></b>
        </p>
        <p>
          <span><i class="fa-solid fa-umbrella"></i></span>
          <em>강우량</em>
          <b class="rain"></b>
        </p>
        <p>
          <span><i class="fa-solid fa-snowflake"></i></span>
          <em>적설량</em>
          <b class="snow"></b>
        </p>
        <p>
          <span><i class="fa-solid fa-droplet"></i></span>
          <em>습도정보</em>
          <b class="humidity"></b>
        </p>
        <p>
          <span><i class="fa-solid fa-wind"></i></span>
          <em>풍속풍향</em>
          <b class="wind-speed"></b>
          <i class="fa-solid fa-location-arrow wind-deg"></i>
        </p>
      </div>
      <button class="close-btn">
      <i class="fa-solid fa-xmark"></i>
      </button>
    </section>
    <div class="loader">
      <img src="./img/main/loading.gif" alt="">
    </div>
  </main>

</body>

</html>