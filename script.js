window.addEventListener('DOMContentLoaded', () => {

  // // ----- блок: генерация дат за последние 5 лет
  
  let startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 5 );
     
  // console.log(startDate);
  
  Date.prototype.addDays = function(days) { 
      var dat = new Date(this.valueOf()) //дата сегодня
      dat.setDate(dat.getDate() + days); //+ дата сегодня + количество дней
      return dat;
  }
  
  function getDates(startDate, stopDate) {
     var dateArray = new Array();  //новый массив
     var currentDate = startDate; //начало дней 
     while (currentDate <= stopDate) { 
       dateArray.push(currentDate) //пушим в массив день
       currentDate = currentDate.addDays(1); // обновляем день (на +1)
     }
     return dateArray;
   }
  
  stopDate = new Date();
  function getStopDate (stopDate) {
    stopDate = stopDate.setDate(stopDate.getDate() - 1);
  return stopDate;
  };
  
  getStopDate(stopDate);
   
  var dateArray = getDates(startDate, stopDate);
  
  for (i = 0; i < dateArray.length; i++) {
    dateArray[i] = `${dateArray[i]}` 
  }
  
    // console.log(dateArray.length - 1);

  // console.log(dateArray);
  
  



  
  //===
  //Генерация массивов на 4 предприятия
  //===
  let NBank = [];
  let dataNBank = [];
  let asH = [];
  let dataasH = [];
  let rost = [];
  let datarost = [];
  let izm = [];
  let dataizm = [];
  
  function generate (predpriyatieArr, data) {
  // //----- блок: генерация случайных чисел (первые значения за первый день с даты, которую сгенерировали)
  
  function randomNumber(min, max) {
      return Math.random() * (max - min) + min;
  };
  
  const predpriyatieFirstArr = +randomNumber(3, 10).toFixed(2);
  predpriyatieArr.push(predpriyatieFirstArr);
  
  function randomNextNumberAll(arr) {                //генерирует некс число с разницей не больше 5%
    let diapMin = (arr[arr.length - 1]) * 0.95;
    let diapMax = (arr[arr.length - 1]) * 1.05;
    let nextNumberAll = +randomNumber(diapMin, diapMax).toFixed(2);
    while (10 < nextNumberAll || nextNumberAll < 3) {                 //перегенерит, чтоб было от 3 до 10
      nextNumberAll = +randomNumber(diapMin, diapMax).toFixed(2);
    }
    return nextNumberAll;
  };
  
  
  //-----------
  // function randomNextNumber(arr) {                                          // генерирует некс число с разницей не больше 2 % и суммой в arr не больше 5%    // пока не юзается
  //   let diapMin = (arr[arr.length - 1]) * 0.98;
  //   let diapMax = (arr[arr.length - 1]) * 1.02;
  //   let nextNumber = +randomNumber(diapMin, diapMax).toFixed(2);
  //   if (0.5 < ((nextNumber + arr.reduce(
  //     (acc, prev) => acc + prev
  //   ))/(arr[0])) || ((nextNumber + arr.reduce(
  //     (acc, prev) => acc + prev
  //   ))/(arr[0])) < -0.05) {
  //     nextNumber = (+randomNumber(diapMin, diapMax).toFixed(2));
  //   }
  //   return nextNumber;
  // };
  
  // // let next = randomNextNumber();
  //------------
  
  
  
  function nextFour(arr) {
  for (let i = 0; i < dateArray.length - 1; i++) {
    arr[arr.length] = +randomNextNumberAll(arr);
  }};
  
  nextFour(predpriyatieArr);
  
  // console.log(predpriyatieArr);
  
  
  
  //----- генерируем data (данные для  candelstick)
  
  let dataFirstArr = [];
  // data = [];


  
  let dataOpenFirst =  +(randomNumber(predpriyatieArr[0] * 0.95, predpriyatieArr[0])).toFixed(2)
  dataFirstArr = [dateArray[data.length], dataOpenFirst, +(randomNumber(predpriyatieArr[data.length], predpriyatieArr[data.length] * 1.05)).toFixed(2), +(randomNumber(predpriyatieArr[data.length] * 0.95, predpriyatieArr[data.length])).toFixed(2), predpriyatieArr[data.length]]
  
  data.push(dataFirstArr);
  
  // console.log(dataFirstArr); 
  
  for (i = 0; i < dateArray.length - 1; i++) {
  data.push([dateArray[data.length], predpriyatieArr[data.length - 1], +(randomNumber(predpriyatieArr[data.length], predpriyatieArr[data.length] * 1.05)).toFixed(2), +(randomNumber(predpriyatieArr[data.length] * 0.95, predpriyatieArr[data.length])).toFixed(2), predpriyatieArr[data.length]]);
  };
  
  // console.log(data);
  
  return data
  
  }; 
  
  function generateData () {

    if (localStorage.getItem("dataNBank 0") === null) {
      generate(NBank, dataNBank);
    }
    if (localStorage.getItem("dataasH 0") === null) {
      generate(asH, dataasH);
    }if (localStorage.getItem("datarost 0") === null) {
      generate(rost, datarost);
    }if (localStorage.getItem("dataizm 0") === null) {
      generate(izm, dataizm);
    }
      
      
  };

  
  generateData();
  console.log(dataNBank, dataasH, datarost, dataizm)
  
  // console.log(dataNBank.length - 1);
  // console.log(dataasH.length - 1);
  // console.log(datarost.length - 1);
  // console.log(dataizm.length - 1);

  // console.log(dataNBank, dataasH, datarost, dataizm);
  
  // console.log(dataNBank, dataasH, datarost, dataizm)
  


  //------------------------------ генерация данных за день
  
  
  
  // let now;

  // function getNow () {
  //   now = new Date();
  //   return now
  // };

  // getNow()
  
  // let nowHour = +now.getHours();
  // let nowMin = +now.getMinutes();

  // console.log(now);
  // console.log(nowHour, nowMin);
  


  // let dayData;



  


  // if ('')
  
  
  // ---------------------------------- [Thu Dec 06 2018 19:29:14 GMT+0300 (Москва, стандартное время)
  
  // ---------------------------------- пробрасывание данных в localstorage
  
  
  
  
  ////----===!!!!!!!! не знаю как получить собственное имя массива, поэтому дублирую (3) функцию с именем данных
  function generateLocalStorageFive () {

    function saveDataToLocalStorageNBank(predpriyatie) {
      predpriyatie.forEach((el, i) => {
      localStorage.setItem(`dataNBank ${i}`, JSON.stringify(el))
    })
      // console.log(`predpriyatie`)
      // console.log(JSON.parse(localStorage.getItem(`predpriyatie 0`)))
    };
    
    function saveDataToLocalStorageasH(predpriyatie) {
      predpriyatie.forEach((el, i) => {
      localStorage.setItem(`dataasH ${i}`, JSON.stringify(el))
    })
    // console.log(`predpriyatie`)
    // console.log(JSON.parse(localStorage.getItem(`predpriyatie 0`)))
    };
  
    function saveDataToLocalStoragerost(predpriyatie) {
      predpriyatie.forEach((el, i) => {
      localStorage.setItem(`datarost ${i}`, JSON.stringify(el))
    })
    // console.log(`predpriyatie`)
    // console.log(JSON.parse(localStorage.getItem(`predpriyatie 0`)))
    };
    
    function saveDataToLocalStorageizm(predpriyatie) {
      predpriyatie.forEach((el, i) => {
      localStorage.setItem(`dataizm ${i}`, JSON.stringify(el))
      })
      // console.log(`predpriyatie`)
      // console.log(JSON.parse(localStorage.getItem(`predpriyatie 0`)))
    };

    if (localStorage.getItem("dataNBank 0") === null) {
      saveDataToLocalStorageNBank(dataNBank);
    };
    if (localStorage.getItem("dataasH 0") === null) {
      saveDataToLocalStorageasH(dataasH);
    };
    if (localStorage.getItem("datarost 0") === null) {
      saveDataToLocalStoragerost(datarost);
    };
    if (localStorage.getItem("dataizm 0") === null) {
      saveDataToLocalStorageizm(dataizm);    
    };


  };
  
  generateLocalStorageFive();
    

  let dateLastDay = JSON.parse(localStorage.getItem(`dataNBank ${dateArray.length - 1}`))[0];
  let openLastDay = JSON.parse(localStorage.getItem(`dataNBank ${dateArray.length - 1}`))[1];
  // let highLastDay = JSON.parse(localStorage.getItem(`dataNBank ${dateArray.length - 1}`))[2];
  // let lowLastDay = JSON.parse(localStorage.getItem(`dataNBank ${dateArray.length - 1}`))[3];
  let closeLastDay = JSON.parse(localStorage.getItem(`dataNBank ${dateArray.length - 1}`))[4];
  let lastDayArr = [];
  let todayArr;
  function generateLastDayArr() {

    function randomNumber(min, max) {
      return Math.random() * (max - min) + min;
    };

    
    
    lastDayArr[0] = [];
    lastDayArr[1] = [];
    lastDayArr[2] = [];
    lastDayArr[3] = [];
    lastDayArr[4] = [];
    lastDayArr[5] = [];
    // lastDayArr[6] = [];


    function genLastDayArr() {

      lastDayArr[0][0] = `${dateLastDay.substring(0, 15)} 12:00:00 ${dateLastDay.substring(25)}`;
      lastDayArr[0][1] = openLastDay;
      lastDayArr[0][2] = +(randomNumber(openLastDay, openLastDay * 1.02)).toFixed(2);
      lastDayArr[0][3] = +(randomNumber(openLastDay * 0.98, openLastDay)).toFixed(2);
      lastDayArr[0][4] = +(randomNumber(openLastDay * 0.98, openLastDay * 1.02)).toFixed(2);

      for (i = 1; i < 5; i ++) {
        lastDayArr[i][0] = `${dateLastDay.substring(0, 15)} 1${2 + i}:00:00 ${dateLastDay.substring(25)}`;
        lastDayArr[i][1] = lastDayArr[i-1][4];
        lastDayArr[i][2] = +(randomNumber(lastDayArr[i-1][4], lastDayArr[i-1][4] * 1.02)).toFixed(2);
        lastDayArr[i][3] = +(randomNumber(lastDayArr[i-1][4] * 0.98, lastDayArr[i-1][4])).toFixed(2);
        lastDayArr[i][4] = +(randomNumber(lastDayArr[i-1][4] * 0.98, lastDayArr[i-1][4] * 1.02)).toFixed(2);
      };
    } 
    genLastDayArr ();

    function genLastDay5 () {
      lastDayArr[5][0] = `${dateLastDay.substring(0, 15)} 17:00:00 ${dateLastDay.substring(25)}`;
      lastDayArr[5][1] = lastDayArr[4][4];
      lastDayArr[5][2] = +(randomNumber(lastDayArr[4][4], lastDayArr[4][4] * 1.02)).toFixed(2);
      lastDayArr[5][3] = +(randomNumber(lastDayArr[4][4] * 0.98, lastDayArr[4][4])).toFixed(2);
      lastDayArr[5][4] = closeLastDay;
    }
    // крч надо сделать так, чтобы меньше 2 проц была разница между массивами. сейчас почему-то это не проверяется. потом надо сделать тудэй, прокинуть его в дэй||прокинуть в дэй ласт дэй, если у нас не 12-17
    if (((closeLastDay - lastDayArr[4][4]) >= 0.02)) {
      genLastDay5()
      genLastDayArr ()
    } else {
      genLastDay5()
    };
    return lastDayArr;
  };

  
  function generateTodayArr () {
    todayArr[0] = [];
    todayArr[1] = [];
    todayArr[2] = [];
    todayArr[3] = [];
    todayArr[4] = [];
    todayArr[5] = [];
  }
  // while (!lastDayArr[5]) {
  //   generateLastDayArr();
  // }

  // console.log(lastDayArr) 

  let hhmm = new Date().toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' });
  let hh = new Date().toLocaleTimeString('ru', { hour: '2-digit'});
  let mm = new Date().toLocaleTimeString('ru', {minute: '2-digit' });
  console.log(hhmm)

  let dayArr;

  setInterval(function(hhmm) {
    hhmm = new Date().toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' });
    hh = new Date().toLocaleTimeString('ru', { hour: '2-digit'});
    mm = new Date().toLocaleTimeString('ru', {minute: '2-digit' });
    // console.log(hhmm);
    // console.log(hh);
    // console.log(mm);
  }, 1000)

  function reloadTime() {
    if (0 <= hh <= 11 && 0 <= mm <= 59 && !lastDayArr) {
      while (!lastDayArr[5]) {
        generateLastDayArr();
      };

      dayArr = lastDayArr;
      console.log(dayArr)

    // } else if (hh == 12 && mm == 0) {
        
    // } else if (12 <= hh < 13 && 0 <= mm <= 59) {
      
    // } else if (13 <= hh < 14 && 0 <= mm <= 59) {

    // } else if (14 <= hh < 15 && 0 <= mm <= 59) {
      
    // } else if (15 <= hh < 16 && 0 <= mm <= 59) {
      
    // } else if (16 <= hh < 17 && 0 <= mm <= 59) {
      
    } else if (17 <= hh <= 23 && 0 <= mm <= 59 && /*!localStorage.getItem(`dataNBank 00`)*/ lastDayArr.length == 0) {
      while (!lastDayArr[5]) {
        generateLastDayArr();
        // console.log(lastDayArr[4][4])
        // console.log(closeLastDay)
      };

      dayArr = lastDayArr;
      console.log(dayArr)
    }
  }
  // console.log(lastDayArr.length) 

  reloadTime();
  




  //     // function randomNextNumber(arr) {                                          // генерирует некс число с разницей не больше 2 % и суммой в arr не больше 5%    // пока не юзается
  //     //   let diapMin = (arr[arr.length - 1]) * 0.98;
  //     //   let diapMax = (arr[arr.length - 1]) * 1.02;
  //     //   let nextNumber = +randomNumber(diapMin, diapMax).toFixed(2);
  //     //   if (0.5 < ((nextNumber + arr.reduce(
  //     //     (acc, prev) => acc + prev
  //     //   ))/(arr[0])) || ((nextNumber + arr.reduce(
  //     //     (acc, prev) => acc + prev
  //     //   ))/(arr[0])) < -0.05) {
  //     //     nextNumber = (+randomNumber(diapMin, diapMax).toFixed(2));
  //     //   }
  //     //   return nextNumber;
  //     // };
  
  //     // // let next = randomNextNumber();


  //     //ниже не юзабельно, для проверки
  //     // console.log(`${localStorage.getItem('dataNBank 1').substring(0, 17)} 12:00:00 ${localStorage.getItem('dataNBank 1').substring(26)}`)
  //     // console.log(JSON.parse(localStorage.getItem('dataNBank 1'))[0]);
  //     // console.log(`${JSON.parse(localStorage.getItem('dataNBank 1'))[0].substring(0, 15)} 12:00:00 ${JSON.parse(localStorage.getItem('dataNBank 1'))[0].substring(25)}`)
  //----

  



  
  
  
  ////----===!!!!!!!!!!!!
  
  
  
  // фцункция отрисовки
  
  function drawCandlestick(dataCandlestick) {
    let container = document.querySelector('#container');
    container.innerHTML = '';
    // create a chart
    chart = anychart.candlestick();
        
    // create a japanese candlestick series and set the data
    var series = chart.candlestick(dataCandlestick);
        
    // set the container id
    chart.container("container");
    
    // initiate drawing the chart
    chart.draw();
    
    // console.log(tabs);
  };
  
  
  
    
  
  
  
  
  //------------------ Работа со страницей
  
  //tabheader__item
  
  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsParent = document.querySelector('.tabheader__items');
  const tabsBottom = document.querySelectorAll('.tabbottom__item');
  const tabsBottomParent = document.querySelector('.tabbottom__items');
  
  function hideTabContent() {
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active')
    });
  };
  
  function showTabContent(i = 0) {
    tabs[i].classList.add('tabheader__item_active')
  };
  
  hideTabContent();
  // showTabContent();


  function hideTabBottomContent() {
    tabsBottom.forEach(item => {
      item.classList.remove('tabbottom__item_active')
    });
  };
  
  function showTabBottomContent(i = 0) {
    tabsBottom[i].classList.add('tabbottom__item_active')
  };
  
  hideTabBottomContent();
  showTabBottomContent();

  // ------- массив, который выводится в candlestick
  let dataCandlestick = [];


  tabsBottomParent.addEventListener('click', (eventBot) => {
    

    const targetBot = eventBot.target;

    if (targetBot && targetBot.classList.contains('tabbottom__item')) {

      tabsBottom.forEach((item, i) => {

        if (targetBot == item) {
          hideTabBottomContent();
          showTabBottomContent(i);
        } 

      })
    }
  });
  

  tabsParent.addEventListener('click', (event) => {
    

    const target = event.target;
  
    if (target && target.classList.contains('tabheader__item')) {

      tabs.forEach((item, i) => {

        // if (tabsBottom[0].classList.contains("tabbottom__item_active")) {
        //   if (target == item) {
        //     hideTabContent();
        //     showTabContent(i);
            
        //     if (target == item && i === 0) {
        //       dataCandlestick = [];
        //       for (j = dateArray.length; j >= dateArray.length - 30; j--) {
        //         dataCandlestick.push(JSON.parse(localStorage.getItem(`dataNBank ${j}`)));
        //         // return dataCandlestick;
                
        //       }
        //     } else if (target == item && i === 1) {
        //       dataCandlestick = [];
        //       for (j = dateArray.length; j >= dateArray.length - 30; j--) {
        //         dataCandlestick.push(JSON.parse(localStorage.getItem(`dataasH ${j}`)));
        //         // return dataCandlestick;
        //       }
        //     } else if (target == item && i === 2) {
        //       dataCandlestick = [];
        //       for (j = dateArray.length; j >= dateArray.length - 30; j--) {
        //         dataCandlestick.push(JSON.parse(localStorage.getItem(`datarost ${j}`)));
        //         // return dataCandlestick;
        //       }
        //     } else if (target == item && i === 3) {
        //       dataCandlestick = [];
        //       for (j = dateArray.length; j >= dateArray.length - 30; j--) {
        //         dataCandlestick.push(JSON.parse(localStorage.getItem(`dataizm ${j}`)));
        //         // return dataCandlestick;
        //       }
        //     }

        //   }
        // }





        if (tabsBottom[1].classList.contains("tabbottom__item_active")) {
          if (target == item) {
            hideTabContent();
            showTabContent(i);
            
            if (target == item && i === 0) {
              dataCandlestick = [];
              for (j = dateArray.length - 1; j >= dateArray.length - 30; j--) {
                dataCandlestick.push(JSON.parse(localStorage.getItem(`dataNBank ${j}`)));
                // return dataCandlestick;
                
              }
            } else if (target == item && i === 1) {
              dataCandlestick = [];
              for (j = dateArray.length - 1; j >= dateArray.length - 30; j--) {
                dataCandlestick.push(JSON.parse(localStorage.getItem(`dataasH ${j}`)));
                // return dataCandlestick;
              }
            } else if (target == item && i === 2) {
              dataCandlestick = [];
              for (j = dateArray.length - 1; j >= dateArray.length - 30; j--) {
                dataCandlestick.push(JSON.parse(localStorage.getItem(`datarost ${j}`)));
                // return dataCandlestick;
              }
            } else if (target == item && i === 3) {
              dataCandlestick = [];
              for (j = dateArray.length - 1; j >= dateArray.length - 30; j--) {
                dataCandlestick.push(JSON.parse(localStorage.getItem(`dataizm ${j}`)));
                // return dataCandlestick;
              }
            }

          }
        }




        if (tabsBottom[2].classList.contains("tabbottom__item_active")) {
          if (target == item) {
            hideTabContent();
            showTabContent(i);
            
            if (target == item && i === 0) {
              dataCandlestick = [];
              for (j = 0; j < dateArray.length - 1; j++) {
                dataCandlestick.push(JSON.parse(localStorage.getItem(`dataNBank ${j}`)));
                // return dataCandlestick;
                
              }
            } else if (target == item && i === 1) {
              dataCandlestick = [];
              for (j = 0; j < dateArray.length - 1; j++) {
                dataCandlestick.push(JSON.parse(localStorage.getItem(`dataasH ${j}`)));
                // return dataCandlestick;
              }
            } else if (target == item && i === 2) {
              dataCandlestick = [];
              for (j = 0; j < dateArray.length - 1; j++) {
                dataCandlestick.push(JSON.parse(localStorage.getItem(`datarost ${j}`)));
                // return dataCandlestick;
              }
            } else if (target == item && i === 3) {
              dataCandlestick = [];
              for (j = 0; j < dateArray.length - 1; j++) {
                dataCandlestick.push(JSON.parse(localStorage.getItem(`dataizm ${j}`)));
                // return dataCandlestick;
              }
            }

          }
        }

        
      });

      

    }


  
  
  // ---------------------------------- формирование candlestick
  
  
 
    
    
    drawCandlestick(dataCandlestick)
    

  });


  
  });