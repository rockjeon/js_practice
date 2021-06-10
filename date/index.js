// // 날짜 다루기
// const date = new Date()
// const year = date.getFullYear()
// const month = date.getMonth() + 1
// const day = date.getDate()

// document.querySelector('.year').innerHTML = `오늘은 ${year}년 ${month}월${day}일 입니다`

// const hour = date.getHours()
// const minute = date.getMinutes()
// const second = date.getSeconds()

// let meridiem;
// let hour2 
// if(hour < 12 ){
//     meridiem = '오전'
//     hour2 = hour
// } else {
//     meridiem = '오후'
//     hour2 = hour - 12 
// }

// document.querySelector('.time').innerHTML = `지금은 ${meridiem} ${hour2}시 ${minute}분 ${second}초 입니다`

// const days = date.getDay()
// const daysList = ['일','월','화','수','목','금','토']
// const label = daysList[days]

// document.querySelector('.day').innerHTML=`${label}요일 입니다.`

// const locale = date.toLocaleString()

// const dateA = new Date('2010/04/16')
// const dateB = new Date('2021/06/08')
// const diffMsec = dateB.getTime() - dateA.getTime()
// const diffDate = diffMsec / (24 * 60 * 60 * 1000)
// const diffHour = diffMsec / (60 * 60 * 1000)

// console.log(diffDate)
// console.log(diffHour)

