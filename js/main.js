import { addEventApmBtns, addEventDayBtns, initDayBtns } from "./initDayBtns.js";
import { addEventMarkers, initMarkers } from "./initMarker.js";
import { initWheatherData } from "./initWeatherData.js";

await initWheatherData()
//17개의 날씨정보를 비동기로 수신 후 weatherDataArray에 저장
initMarkers()//마커출력
addEventMarkers() //마커에 이벤트 바인딩
//weatherDataArray, latLng를 이용해 initMarkers를 초기화
initDayBtns()//요일버튼출력
addEventDayBtns()//요일 버튼에 이벤트 바인딩
addEventApmBtns()//현재,오전,오후 버튼 이벤트 바인딩
