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
  
  for (i = 0; i < 1825; i++) {
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
  
  // console.log(dataNBank, dataasH, datarost, dataizm);
  
  // console.log(dataNBank, dataasH, datarost, dataizm)
  
  
  
  
  
  
  
  
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
    }
    if (localStorage.getItem("dataasH 0") === null) {
      saveDataToLocalStorageasH(dataasH);
    }if (localStorage.getItem("datarost 0") === null) {
      saveDataToLocalStoragerost(datarost);
    }if (localStorage.getItem("dataizm 0") === null) {
      saveDataToLocalStorageizm(dataizm);    
    }


  };
  
  generateLocalStorageFive();
    
    
  
  
  
  
  
  
  ////----===!!!!!!!!!!!!
  
  
  
  
  
  
  
  
  
  
    
  
  
  
  
  //------------------ Работа со страницей
  
  //tabheader__item
  
  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsParent = document.querySelector('.tabheader__items');
  
  function hideTabContent() {
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    });
  };
  
  function showTabContent(i = 0) {
        tabs[i].classList.add('tabheader__item_active')
  
  }
  
  hideTabContent();
  showTabContent();

  // ------- массив, который выводится в candlestick
  let dataCandlestick = [];

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;
  
    if (target && target.classList.contains('tabheader__item')) {

      tabs.forEach((item, i) => {
          if (target == item) {
              hideTabContent();
              showTabContent(i);
          }
      });
        

      tabs.forEach((item, i) => {
          if (target == item && i === 0) {
            dataCandlestick = [];
            for (i = 0; i < 1825; i++) {
              dataCandlestick.push(JSON.parse(localStorage.getItem(`dataNBank ${i}`)));
              // return dataCandlestick;
            }
          } else if (target == item && i === 1) {
            dataCandlestick = [];
            for (i = 0; i < 1825; i++) {
              dataCandlestick.push(JSON.parse(localStorage.getItem(`dataasH ${i}`)));
              // return dataCandlestick;
            }
          } else if (target == item && i === 2) {
            dataCandlestick = [];
            for (i = 0; i < 1825; i++) {
              dataCandlestick.push(JSON.parse(localStorage.getItem(`datarost ${i}`)));
              // return dataCandlestick;
            }
          } else if (target == item && i === 3) {
            dataCandlestick = [];
            for (i = 0; i < 1825; i++) {
              dataCandlestick.push(JSON.parse(localStorage.getItem(`dataizm ${i}`)));
              // return dataCandlestick;
            }
          }
      });
    }
  console.log(dataCandlestick)
  
  });
  
  
  
  
  // ---------------------------------- формирование candlestick
  
  
  // create data               open,  high,  low,   close
  // var data = [
    //   [Date.UTC(2007, 07, 23), 23.55, 23.88, 23.38, 23.62],
    //   [Date.UTC(2007, 07, 24), 22.65, 23.7, 22.65, 23.36],
    //   [Date.UTC(2007, 07, 25), 22.75, 23.7, 22.69, 23.44],
    //   [Date.UTC(2007, 07, 26), 23.2, 23.39, 22.87, 22.92],
    //   [Date.UTC(2007, 07, 27), 23.98, 24.49, 23.47, 23.49],
    //   [Date.UTC(2007, 07, 30), 23.55, 23.88, 23.38, 23.62],
    //   [Date.UTC(2007, 07, 31), 23.88, 23.93, 23.24, 23.25],
    //   [Date.UTC(2007, 08, 01), 23.17, 23.4, 22.85, 23.25],
    //   [Date.UTC(2007, 08, 02), 22.65, 23.7, 22.65, 23.36],
    //   [Date.UTC(2007, 08, 03), 23.2, 23.39, 22.87, 22.92],
    //   [Date.UTC(2007, 08, 06), 23.03, 23.15, 22.44, 22.97],
    //   [Date.UTC(2007, 08, 07), 22.75, 23.7, 22.69, 23.44]
    // ];
    


  // tabsParent.addEventListener('click', (event) => {
  //   const target = event.target;
  //   if (target && target.classList.contains('tabheader__item')) {
  //     tabs.forEach((item, i) => {
  //         if (target == item && i === 0) {
  //           dataCandlestick = [];
  //           for (i = 0; i < 1825; i++) {
  //             dataCandlestick.push(JSON.parse(localStorage.getItem(`dataNBank 0`)))
  //           }
  //         } else if (target == item && i === 1) {
  //           dataCandlestick = [];
  //           for (i = 0; i < 1825; i++) {
  //             dataCandlestick.push(JSON.parse(localStorage.getItem(`dataasH 0`)))
  //           }
  //         } else if (target == item && i === 2) {
  //           dataCandlestick = [];
  //           for (i = 0; i < 1825; i++) {
  //             dataCandlestick.push(JSON.parse(localStorage.getItem(`datarost 0`)))
  //           }
  //         } else if (target == item && i === 3) {
  //           dataCandlestick = [];
  //           for (i = 0; i < 1825; i++) {
  //             dataCandlestick.push(JSON.parse(localStorage.getItem(`dataizm 0`)))
  //           }
  //         }

  //     });
  //   }
  // });

 
    
  // create a chart
  chart = anychart.candlestick();
      
  // create a japanese candlestick series and set the data
  var series = chart.candlestick(dataCandlestick);
      
  // set the container id
  chart.container("container");
  
  // initiate drawing the chart
  chart.draw();
  
  console.log(tabs[0].textContent);
  
  
  
  });