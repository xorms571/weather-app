import latLng from "./latLng.js";
import { appState, weatherDataArray } from "./initWeatherData.js";
import { descCodeEnArr, descCodeKrArr } from "./conditionCode.js";

export const initMarkers = () => {
  latLng.forEach((item, index) => {
    let temp = (weatherDataArray[index].current.temp - 273.15).toFixed(1)
    let icon = weatherDataArray[index].current.weather[0].icon
    document.querySelector('.markers').insertAdjacentHTML('beforeend', `
    <button value=${index} class="marker${index}" style="left:${item.left}; top:${item.top};">
      <span>
      <em class="region-name">${item.regionName}</em>
      <img class="condition-icon" src="./img/icons/${icon}.gif" alt="">
      <b class="temp">${temp}&#176;</b>
      </span>
    </button>
    `)
  })
}
export const addEventMarkers = () => {
  document.querySelectorAll('.markers button').forEach(btn => {
    //마우스엔터 이벤트
    btn.addEventListener('mouseenter', e => {
      document.querySelectorAll('.markers button').forEach(btn => {
        btn.style.transform = 'translate(-50%,-50%) scale(0.9)'
        btn.style.background = '#fff'
        btn.style.border = '1px solid #8dd4ff'
        btn.style.opacity = '.7'
        btn.style.zIndex = 'auto'
      })
      e.target.style.transform = 'translate(-50%,-50%) scale(1.2)'
      e.target.style.opacity = '1'
      e.target.style.zIndex = '1'
    })
    //마우스리브 이벤트
    btn.addEventListener('mouseleave', e => {
      document.querySelectorAll('.markers button').forEach(btn => {
        btn.style.transform = 'translate(-50%,-50%) scale(1)'
        btn.style.opacity = '1'
        btn.style.zIndex = 'auto'
      })
    })
    //click이벤트 날씨 상세정보detail 출력
    btn.addEventListener('click', e => {
      //해당마커버튼의 밸류값으로 해당지역정보 가져오기
      let regionIdx = e.currentTarget.value
      //해당지역의 해당일짜 날씨 정보 가져오기
      let data = weatherDataArray[regionIdx].daily[appState.dayIdx]
      //날씨설명 가져오기
      let desc = data.weather[0].description
      //날씨설명 칸에 정보넣기
      document.querySelector('.detail .desc').innerHTML = descCodeKrArr[descCodeEnArr.indexOf(desc)]
      //온도넣기
      let lawTemp = '최저 ' + (data.temp.min - 273.15).toFixed(1) + '&#176;'
      let hightTemp = '최고 ' + (data.temp.max - 273.15).toFixed(1) + '&#176;'
      document.querySelector('.detail .temp-law').innerHTML=lawTemp
      document.querySelector('.detail .temp-hight').innerHTML=hightTemp
      //체감온도넣기
      let tempFeelMorn = '오전 ' + (data.feels_like.morn - 273.15).toFixed(1) + '&#176;'
      let tempFeelDay = '오후 ' + (data.feels_like.day - 273.15).toFixed(1) + '&#176;'
      document.querySelector('.detail .temp-feel-morn').innerHTML=tempFeelMorn
      document.querySelector('.detail .temp-feel-day').innerHTML=tempFeelDay
      //강우량넣기
      let rain = data.rain ? data.rain + 'mm':'0mm'
      document.querySelector('.detail .rain').innerHTML=rain
      //적설량넣기
      let snow = data.snow ? data.snow + 'mm':'0mm'
      document.querySelector('.detail .snow').innerHTML=snow
      //습도넣기
      let humidity = data.humidity + '%'
      document.querySelector('.detail .humidity').innerHTML=humidity
      //풀량풍속넣기
      let windSpeed = data.wind_speed + 'm/s'
      let windDeg = data.wind_deg
      document.querySelector('.detail .wind-speed').innerHTML=windSpeed
      document.querySelector('.detail .wind-deg').style.transform=`rotate(${windDeg - 45}deg)`
      //날씨상세정보창숨기기
      document.querySelector('.detail').classList.add('active')
    })
  })
}
//보여주기
document.querySelector('.close-btn').addEventListener('click', e => {
  document.querySelector('.detail').classList.remove('active')
})