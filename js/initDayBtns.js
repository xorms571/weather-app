import { appState, weatherDataArray } from "./initWeatherData.js"

//초기 마커 출력
export const initDayBtns = () => {
  const dailyArr = weatherDataArray[0].daily.slice(0, 7)
  dailyArr.forEach((data, idx) => {
    let timeStamp = data.dt * 1000
    let time = new Date(timeStamp)
    let month = time.getMonth() + 1
    let date = time.getDate()
    let day = '일월화수목금토'.split('')[time.getDay()]
    document.querySelector('.days-btns').insertAdjacentHTML('beforeend', `
      <button class="day-btn day-btn-${idx} ${idx === 0 ? 'active' : ''}" value="${idx}">
        <b>${day}</b>
        <time>${(idx === 0) ? '오늘' : month + '.' + date}</time>
      </button>
    `)
  })
}

//일자별 마커 출력 구현
const printDailyMarkers = () => {
  weatherDataArray.forEach((regionData, idx) => {
    //아이콘변경
    let icon = regionData.daily[appState.dayIdx].weather[0].icon
    document.querySelector(`.marker${idx} img`).src=`./img/icons/${icon}.gif`
    //온도변경
    let temp = appState.apm==='am'
      ? regionData.daily[appState.dayIdx].temp.morn
      : regionData.daily[appState.dayIdx].temp.day
    temp = (temp - 273.15).toFixed(1)
    document.querySelector(`.marker${idx} b`).innerHTML=temp + '&#176;'
  })
}
//현재 마커 출력 구현
const printCurrentMarkers = () => {
  weatherDataArray.forEach((regionData, idx) => {
    //아이콘변경
    let icon = regionData.current.weather[0].icon
    document.querySelector(`.marker${idx} img`).src = `./img/icons/${icon}.gif`
    //온도변경
    let temp = (regionData.current.temp - 273.15).toFixed(1)
    document.querySelector(`.marker${idx} .temp`).innerHTML=temp + '&#176;'
  })
}
//
const changeActiveClass = (remove1, remove2, add) => {
  document.querySelector(remove1).classList.remove('active')
  document.querySelector(remove2).classList.remove('active')
  document.querySelector(add).classList.add('active')
}

export const addEventDayBtns = () => {
  document.querySelectorAll('.days-btns button').forEach(btn => {
    btn.addEventListener('click', e => {
      //app 상태정보 설정-----------------------//
      appState.dayIdx = parseInt(e.currentTarget.value)
      //marker 출력 구현-----------------------//
      printDailyMarkers()
      //days-btns active 구현-----------------------//
      document.querySelectorAll('.days-btns button').forEach(btn => { btn.classList.remove('active') })
      e.currentTarget.classList.add('active')
      //apm-btns active 구현-----------------------//
        document.querySelectorAll('.apm-btns button').forEach(btn=>{btn.classList.remove('active')})
        if(appState.apm==='am') document.querySelector('.am-btn').classList.remove('active')
        else document.querySelector('.pm-btn').classList.add('active')
    })
  })
}
export const addEventApmBtns = () => {
  //현재 날씨 버튼 active 구현
  document.querySelector('.current-btn').addEventListener('click',e=>{
    appState.apm='am'
    //현재날짜로 변경
    appState.dayIdx=0
    //버튼들의 class 삭제
    document.querySelectorAll('.days-btns button').forEach(btn => {
      btn.classList.remove('active')
    })
    document.querySelector('.days-btns .day-btn-0').classList.add('active')
    //마커 출력 구현
    printCurrentMarkers()
    changeActiveClass('.am-btn','.pm-btn','.current-btn')
  })
  //오전 날씨 버튼 active 구현
  document.querySelector('.am-btn').addEventListener('click',e=>{
    appState.apm='am'
    //마커 출력 구현
    printDailyMarkers()
    changeActiveClass('.current-btn','.pm-btn','.am-btn')
  })
  //오후 날씨 버튼 active 구현
  document.querySelector('.pm-btn').addEventListener('click',e=>{
    appState.apm='pm'
    //마커 출력 구현
    printDailyMarkers()
    changeActiveClass('.current-btn','.am-btn','.pm-btn')
  })
}