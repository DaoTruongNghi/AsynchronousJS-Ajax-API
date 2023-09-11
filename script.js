'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//Fetch API + Promise + json();
// const getCountryData = function (country) {
//   // Country 1 - Main
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found!')
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0]);
//       const neighbour = data[0]?.borders[0];

//       if (!neighbour) throw new Error('No neighbour found');

//       //Country 2 - Neighbour
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found!'
//       );
//     })
//     .then(data => {
//       console.log(data);
//       renderCountry(data, 'neighbour'); //neighbour ở đây là một class css
//     })
//     .catch(err => {
//       console.error(`${err} 😾😾😾`);
//       renderError(`Something went wrong ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

const renderCountry = function (data, className = '') {
  const html = ` <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = ` <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('usa');
// getCountryData('vietnam');
// getCountryData('Korea');
// getCountryData('thailan');
// getCountryData('japan');

// getCountryData('sdasfasfsdf');
//CALL BACK HELL

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request_1 = new XMLHttpRequest();
//   request_1.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request_1.send();

//   request_1.addEventListener('load', function () {
//     const [data_1] = JSON.parse(this.responseText);
//     // console.log(data);

//     //Render_country_1
//     renderCountry(data_1);

//     //Get neighbour country
//     const [neighbour] = data_1.borders;

//     if (!neighbour) return;

//     // AJAX call country 2
//     const request_2 = new XMLHttpRequest();
//     request_2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request_2.send();

//     request_2.addEventListener('load', function () {
//       // console.log(this.responseText);
//       const data_2 = JSON.parse(this.responseText);
//       console.log(data_2);

//       //Render_country_2
//       renderCountry(data_2, 'neighbour');
//     });
//   });
// };
// getCountryAndNeighbour('vietnam');
// getCountryAndNeighbour('usa');

// const getCountryData = function (country) {
//   // Country 1 - Main
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(respone => respone.json())
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0]);
//       const neighbour = data[0]?.borders[0];

//       //Country 2 - Neighbour
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(respone => respone.json())
//     .then(data => {
//       console.log(data);
//       renderCountry(data, 'neighbour'); //neighbour ở đây là một class css
//     })
//     .catch(err => {
//       console.error(`${err} 😾😾😾`);
//       renderError(`Something went wrong ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('vietnam');
// });
/////////////////////////////////////////////////////
//CODING CHALLENGE 1 (HARD)

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=your_api_key`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//     });
// };

// whereAmI(52.508, 13.381);

/////////////////////////////////////////////////////
//CREATE a Promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💰');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying

// const wait = function (second) {
//   return new Promise((resolve, second) => {
//     setTimeout(resolve, second * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 seconds'));

//Another way to build Promise

// Promise.resolve('abc').then(res => console.log(res));
// Promise.reject(new Error('Problem!')).catch(err => console.error(err));

/////////////////////////////////////////////////////
//CODING CHALLENGE 2
// const imagesContainer = document.querySelector('.images');

// const createImages = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imagesContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImages('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Images 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImages('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Images 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

/////////////////////////////////////////////////////
//Anotheway with async and await method

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     //Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     //Reverse geocording
//     const resGeo = await fetch(`https://geocode.xyz/${lat}, ${lng}?geoit=json`);
//     const dataGeo = resGeo.json();
//     if (!resGeo.ok) throw new Error('Problem getting location data!');

//     //Country Data
//     //fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))
//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );
//     if (!resGeo.ok) throw new Error('Problem getting country');
//     const data = res.json();
//     renderCountry(data[0]);
//   } catch (err) {
//     console.error(`${err}💥`);
//     renderError(`💥${err.message}`);

//     //Reject promise returned from async function
//     //khối bên dưới //OLD WAY, sẽ luôn được thực thi kể cả có là undefined, vì vậy nếu chúng ta muốn bắt lỗi, hãy sử dụng từ khóa throw để ném nó ra ngoài
//     throw err;
//   }
// };
// console.log('1: Will get location');
// const city = whereAmI();
// console.log(city)

// OLD WAY
// Do hàm async whereAmI() return một chuỗi, tạo ra một Promise
// Nhưng về cơ bản JS không có cách nào biết để đọc chuỗi đó, nên nó trả về một Promise mới với trạng thái <PENDING> #LIFECYCLEPROMISE

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}💥`))
//   .finally(() => console.log('3: Finished getting location!'));

//Refactor with ASYNC IIFE
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message}💥`);
//   }
//   console.log('3: Finished getting location!');
// })();

// whereAmI();
// console.log('First');
// Tác vụ chạy song song các lời hứa

// const getJSON = function (url, errorMsg = 'Some things wrong') {
//   return fetch(url).then(respone => {
//     if (!respone.ok) throw new Error(`${errorMsg} (${respone.status})`);

//     return respone.json();
//   });
// };

/////////////////////////////////////////////////////
//Promise.all();

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     //Theo cách này, mỗi getJSON phải đợi hàm trước thực thi xong, thì mới được thực thi. Không có ý nghĩa khia phải mất mỗi dòng 0.5s
//     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
//     // console.log([data1.capital, data2.capital, data3.capital]);

//     //Bằng cách này, tất cả được tải song song, chỉ mất 0.5s, tối ưu hóa trang web 1s.
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);
//     console.log(data);
//     console.log(data.map(data => data[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countries('portugal', 'vietnam', 'canada');

/////////////////////////////////////////////////////
//Promise.race();

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/egypt`),
//     getJSON(`https://restcountries.com/v2/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took to long!'));
//     }, sec * 1000);
//   });
// };

// Promise.race([getJSON(`https://restcountries.com/v2/name/vietnam`), timeout(5)])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

/////////////////////////////////////////////////////
//Promise.allSettled();

// Promise.allSettled([
//   Promise.resolve('success'),
//   Promise.reject('error'),
//   Promise.resolve('another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

/////////////////////////////////////////////////////
//Promise.any();

// Promise.any([
//   Promise.resolve('success'),
//   Promise.reject('error'),
//   Promise.resolve('another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

/////////////////////////////////////////////////////
//CODING CHALLENGE 3

const wait = function (second) {
  return new Promise((resolve, second) => {
    setTimeout(resolve, second * 1000);
  });
};

const imagesContainer = document.querySelector('.images');

const createImages = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imagesContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// let currentImg;

// createImages('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Images 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImages('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Images 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

//PART 1
const loadNPause = async function () {
  try {
    //IMAGE 1 LOADED
    let img = await createImages('img/img-1.jpg');
    console.log('Images 1 loaded');
    await wait(2);
    img.style.display = 'none';

    //IMAGE 2 LOADED
    img = await createImages('img/img-2.jpg');
    console.log('Images 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
// loadNPause();

//PART 2

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImages(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
