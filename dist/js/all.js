'use strict';
console.log("hi");
   //hide modal  window when u push cross
   document.getElementsByClassName("content__cross")[0].addEventListener("click", function (event) {
    //  event.preventDefault(); //stop the form submiting
     document.getElementsByClassName("modal__content")[0].classList.add("hide");
 }); 

// create varieble wich include all card
let cardStore = document.querySelectorAll('.content__store')[0];
// console.log(cardStore);
function createCard(imgClass){
    this.imgClass = imgClass;
    return console.log(imgClass);
}
// create the array of imges: get src adress
let imgArr = [...document.getElementsByClassName('img-features')]; 
// console.log(imgArr[1]);

// set eventListener onclick
cardStore.addEventListener('click', function(event){
    // create target define which item was clicked
    // event.preventDefault(); //stop the form submiting
    let target = event.target;
    // moveing up to class content__store
    while( target.className != this.className){//if  we click on cardStore div
    // console.log(this.className);
        if(target.tagName == 'A'){ //if we get tag a mean card class content__item
            // console.log("catch!");
            // get link's data-info value and set it to card Array  
            let d = +target.dataset.link;
            // console.log(imgArr[d]);
            // get img src atribute
            let src1 = imgArr[d].getAttribute('src');
            // console.log(src1);
            // remove class hide
            document.getElementsByClassName('modal__content')[0].classList.remove('hide');
            //  document.getElementsByClassName('modal__content')[0].style.backgroundImage = "url(" + src1 + ")";
            // document.getElementsByClassName('modal__content')[0].style.backgroundImage = `url(${src1})`;//template string

            // add style atribut with current src path
            document.getElementsByClassName('modal__car')[0].style.backgroundImage = "url(" + src1 + ")";
            return;
        }
   target = target.parentNode;
    }
})
'use sctrict';
// .filter__item--active
// возьмем наш список категорий
console.log('filter');
let ul = document.getElementsByClassName('filter__store')[0];
// массиив вкладок
let tabs = [...document.getElementsByClassName('filter__item')];
// создадим массив обектов из колекциии с помощю spread оператор [...]
let elems = [...document.getElementsByClassName('content__item')];
// навешаем на него слушатель что бы при клике получать клас той вкладки на которую мы кликнем
ul.addEventListener('click', function (event) {
    let target = event.target;
    // при нажатии на вкладку категории выз функция которвя убивает выделение с вкладок и 'content__item--hide' с обьектов
    if (target.classList[1] == 'all') {
        contCategory();
    } else {
        // уберем выделение с вкладок
        for (let a = 0; a < tabs.length; a++) {
            tabs[a].classList.remove('filter__item--active');
        }
        target.classList.add('filter__item--active');
        // скроем все обекты, lj,добавим им клас 'content__item--hide'
        for (let j = 0; j < elems.length; j++) {
            elems[j].classList.add('content__item--hide');
        }
        // пройтись по массиву обектов и вторые классы, если совпадение, то убираем клас 'content__item--hide'
        for (let i = 0; i < elems.length; i++) {
            if (elems[i].classList[1] == target.classList[1]) {
                elems[i].classList.remove('content__item--hide');
            }
        }
    }
})

function contCategory() {
    for (let i = 0; i < elems.length; i++) {
        elems[i].classList.remove('content__item--hide');
    }
    for (let a = 0; a < tabs.length; a++) {
        tabs[a].classList.remove('filter__item--active');
    }

}

'use strict';
// https://goo.gl/maps/RgqXcyXgoZKqryZ29

// Start when all content is loaded
document.addEventListener("DOMContentLoaded", function() {
    // function click 
    let btnLocation = document.getElementsByClassName('menu__location')[0];
    let mapLocation = document.getElementsByClassName('location__model')[0];
    let crossLocation = document.getElementsByClassName('location__cross')[0];

    crossLocation.addEventListener('click', function(){
        mapLocation.classList.add('hide');
    })
    // console.log(mapLocation);
    btnLocation.addEventListener('click', function(event){
        event.preventDefault();
        mapLocation.classList.remove('hide');
        // console.log("Hi");
         
    })




})//end
"use strict";
// Start when all content is loaded
document.addEventListener("DOMContentLoaded", function () {
    // show modal window  click  logIn button
    document
        .getElementsByClassName("log-in")[0].addEventListener("click", function (event) {
            event.preventDefault(); //stop the form submiting
            document.getElementsByClassName("modal")[0].classList.remove("hide");
        });
    //hide modal log In window push cross
    document
        .getElementsByClassName("modal__cross")[0]
        .addEventListener("click", function (event) {
            event.preventDefault(); //stop the form submiting
            document.getElementsByClassName("modal")[0].classList.add("hide");
        });

    // get persons data in Array type
    let arr = JSON.parse(localStorage.getItem("persons"));
    // console.log(Array.isArray(arr)); //true

    // function which looking if registration exsist
    if (localStorage.getItem("persons") == null) {
        // ling to registration form
    }

    let logBtn = document.getElementsByClassName("modal__button")[0];
    let logMail = document.getElementsByClassName("log__mail")[0];
    let logPas = document.getElementsByClassName("log__password")[0];

    let user1 = {
        mail: logMail.value,
        pass: logPas.value
    };

    logBtn.addEventListener("click", function () {
        event.preventDefault(); //stop the form submiting
    });

    // compare every arr(persons data) objects with input object, return true if even 1 match up
        if (arr.some(isEqual) == true){
            // alert("welcome.");
            // create user1 and put it in LocalStorage
            let store = [];
            store.push(user1);
            localStorage.setItem('user', JSON.stringify(store));
            // remove class hide button
            document.getElementsByClassName('menu__item')[0].classList.remove('hide');
        }else{
            alert("you are not registrated or did not enter email or password coretly");
        }

        function isEqual(x){
            return JSON.stringify(x) === JSON.stringify(user1);
        }
}); // end

'use sctrict';

let btn = document.getElementsByClassName('navbar__button')[0];
let burger =  document.getElementsByClassName('navbar__burger')[0];
let cross =  document.getElementsByClassName('navbar__cross')[0];
let menu = document.getElementsByClassName('menu')[0];
btn.addEventListener('click',() =>{
    burger.classList.toggle('hide');
    cross.classList.toggle('hide');
    menu.classList.toggle('menu__active');

});

'use sctrict';
// take thr drop menu
let menuDrop = document.getElementsByClassName('menu__cars')[0];

// take the category 
let menuCat = document.getElementsByClassName('menu__categories')[0];
// add mouseover/out in categoty and dropMenu
menuCat.addEventListener('mouseover', showSub, false);
menuCat.addEventListener('mouseout', hideSub, false);
menuDrop.addEventListener('mouseover', showSub, false);
menuDrop.addEventListener('mouseout', hideSub, false);
function showSub(event){
    menuDrop.classList.remove('menu__cars--hide');
}
function hideSub(event){
        menuDrop.classList.add('menu__cars--hide');
    
}


    // let target = event.target;
    // menuDrop.classList.remove('menu__cars--hide');
// function addHide (){
//     if (target.className != 'menu__cars'){
//         menuDrop.classList.add('hide');
//     }
// }
// // menuArrow.style.transform = 'rotate(' + 90 + 'deg)';
// document.onmouseover = function(event){
//     let target = event.target;
//     event.preventDefault();
//     if (target.className == 'drop__items' || menuDrop.className == 'menu__cars'){
//         menuDrop.classList.add('menu__cars--active');
//         menuArrow.classList.add('drop__img--active');
//         // menuArrow.style.transform = 'rotate(' + -180 + 'deg)';
//         // menuDrop.style.top = 500 + 'px';
//     }else{
//         menuDrop.classList.remove('menu__cars--active');
//         menuArrow.classList.remove('drop__img--active');
//     }
// }
'use strict';

// Start when all content is loaded
document.addEventListener('DOMContentLoaded', function () {

    // let formSub = document.getElementsByClassName('registration__form')[0];
    // take the button   
    let btnReg = document.getElementsByClassName('registration__button')[0];
    let regMail = document.getElementsByClassName('registration__mail')[0];
    let regPas = document.getElementsByClassName('registration__password')[0];
    let users = [];

    // function CreateObj ( mail, pass){
    //     this.mail = mail;
    //     this.pass = pass; 
    // }
    // This functtin matching emails
    function isMatch(x) {
        let objCurrent = {
            mail: regMail.value,
            pass: regPas.value,
        }
        return JSON.stringify(objCurrent) === JSON.stringify(x);
    }


    btnReg.addEventListener('click', function (event) {
        // check input is empty
        if (regMail.value == "" || regPas.value == ""){
            return alert ( 'Fill email or password, please');
        }
        
        // hide message - mail already exist
        document.getElementsByClassName('text-red')[0].classList.add('registration__text--hide');
        // event.preventDefault(); //stop the form submiting
        // check  local storage has object with key 'persons' 
        if (localStorage.getItem('persons') !== null) {
            // take all values from key "person" and push them into array users;
            // users.push(JSON.parse(localStorage.getItem('persons')));
            let array = JSON.parse(localStorage.getItem('persons'));
            if (array.some(isMatch) == true) {
                // show message - mail already exist
                document.getElementsByClassName('text-red')[0].classList.remove('registration__text--hide');
                // clean the forms
               return  regMail.value = regPas.value = '';
            }


            array.forEach(element => {
                // add every object into array users
                users.push(element);
                // console.log(regMail.value)
                // console.log(array.some(isMatch)); //return true if mail alredy exist

            });
            // clean array
            array = [];
            // remove 'persons' from LocalStore, cause all data stored into users[]
            localStorage.removeItem('persons');
        }

        let obj = { // create an object with the current value
            mail: regMail.value,
            pass: regPas.value,
        }

        users.push(obj); // Push the object in to array
        // console.log(users);
        localStorage.setItem('persons', JSON.stringify(users)); // Put the array into storage
        users = [];


    })


})
'use strict';

// создаем массив слайдеров, без [... ] будет псевдомасив(колекция эл) и счетчи для позиции слайдера; 
let slides = [...document.getElementsByClassName('slider__item')];
// console.log(slides.length);
let counter = 0;
// Обявим переменные переключателей слайдера 
let left = document.getElementsByClassName('left')[0];
let right = document.getElementsByClassName('right')[0];

// Пишем ф-ю слайдер которая срабатыввает после клика и будет сначала все скрывать ,
// потом показывать елемент индекс которого совпадает с каунтером
function slider() {
    // скрываем все
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.add('slider__hide');
    }
    // показываем слайд индекс которого соответствует каунтеру
    slides[counter].classList.remove('slider__hide');
}


// // при клике вправо счетчик увеличивается на один, если больше длинны массива - обуляется 
right.addEventListener('click', function() {
    if(counter == slides.length - 1){
        counter = 0;
    }else{
        counter++;
    }
    slider();
});

// при клике влево  счетчик уменшается на один, если меншенуля - становится макс индексом массива; 
left.addEventListener('click', function() {
    if(counter == 0 ){
        counter = slides.length-1;
    }else{
        counter--;
    }
    slider();
});