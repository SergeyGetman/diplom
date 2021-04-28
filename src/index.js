//import timer
import Timer from "./timer.js";
import { parseCookie, setCookie } from "./cookies.js";
import accord from "./accordion.js";



/*верхний скролл_one*/

let teopenModalt = document.querySelector("#unikalText"); // получаем текст на который скролим
let navigatorBtn = document.querySelector("#btnDiznatus"); //получаем центральный btn
const smoothLinks = document.querySelectorAll('.nav__link'); // получаем все nav сверху header
const centerTeopenModalt = document.querySelector("#sectionTwo"); // получаем текст второго блока
const centreTeopenModaltUnder = document.querySelector("#servisCentr"); // получаем центральный текст
const team = document.querySelector("#team"); // получаем блок команды 
const form = document.querySelector("#forma"); // получаем блок формы регистрации





//функция скролинга
function scrollBtn(itement) {
    itement.scrollIntoView({ block: "center", behavior: "smooth" });
}

const arrHeaderElement = [teopenModalt, centerTeopenModalt, centreTeopenModaltUnder, team, form]; // массив всех элементов header

navigatorBtn.addEventListener("click", scrollBtn); // центральная кнопка скоролит на текст ниже
for (let i = 0; i < smoothLinks.length; i++) { // перебор циклом всех элементов header
    smoothLinks[i].addEventListener("click", () => scrollBtn(arrHeaderElement[i]));
}



for (var smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function(e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');
        var fire = document.querySelector('#id');
        if (!fire) {
            return;
        }
        fire.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}



/*счетчик посещений and cookies*/
function Counter(name, formats = false) {
    //formats - если тру текст, если фальш штмл код 
    setTimeout(function() {
        var counter = $("#counter");

        // var results = "res";

        if (formats == true) {
            counter.teopenModalt(name);
        } else {
            counter.html(name);
        }

    }, 3000);

}






if ("" == document.cookie) { // Инициализация cookie.



    setCookie(1);
    Counter("<H3>Поздравляю Вас с первым посещением моего сайта.</H3>");
} else {


    var cookies = parseCookie();
    // Вывод приветствия, числа посещений и увеличение числа посещений на 1.
    // document.write("<H4>Мы снова рады видеть Вас на моем сайте! Число лично ваших посещений - " + cookies.visits++ + " !</H4>");
    //alert(cookies.visits);
    Counter('<H6 class="count">Число лично ваших посещений - ' + cookies.visits++ + ' !</H6><H6>Последний раз Вы были у меня на сайте: ' + cookies.LastVisit + '.</H6>');
    // Вывод даты последнего посещения.

    // Обновление cookie.
    setCookie(isNaN(cookies.visits) ? 1 : cookies.visits);
}






//modal window in header

let openModal = document.querySelector(".header__logo");
openModal.addEventListener("click", () => {
    popup.style.display = "inline";
});

let popup = document.querySelector(".popup-bg");

let closePopup = document.querySelector(".close__popup");
closePopup.addEventListener("click", (e) => {
    if (e.target == closePopup) {
        popup.style.display = "none";
        document.body.style.overflow = "visible";
    }
});

setTimeout(() => {
    popup.style.display = "inline";
    document.body.style.overflow = "hidden";
}, 30000);


// accordion
accord();





let timerConstr = new Timer(30);
timerConstr.render();
timerConstr.buttonStartTimer.addEventListener("click", timerConstr.startTimer.bind(timerConstr));