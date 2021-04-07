/*вехний скролл*/
$(function() {
    var header = $("#header"),
        introH = $("#header").innerHeight() + $(this).scrollTop(),
        scrollOffset = 0;

    $(window).on("scroll", function() {


        scrollOffset = $("#header").innerHeight() + $(this).scrollTop();

        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.addClass("fixed");
        }

    });

});






/*счетчик посещений and cookies*/
function Counter(name, formats = false) {
    //formats - если тру текст, если фальш штмл код 
    setTimeout(function() {
        var counter = $("#counter");

        // var results = "res";

        if (formats == true) {
            counter.text(name);
        } else {
            counter.html(name);
        }

    }, 3000);

}





function getCookie(byname) // возвращает по имени значение, здесь не используется
{
    byname = byname + "=";
    nlen = byname.length;
    fromN = document.cookie.indexOf(byname) + 0;
    if ((fromN) != -1) {
        fromN += nlen
        toN = document.cookie.indexOf(";", fromN) + 0;
        if (toN == -1) { toN = document.cookie.length; }
        return unescape(document.cookie.substring(fromN, toN));
    }
    return null;
}

function parseCookie() // Разделение cookie
{
    var cookieList = document.cookie.split("; ");
    // Массив для каждого cookie в cookieList
    var cookieArray = new Array();
    for (var i = 0; i < cookieList.length; i++) {
        // Разделение пар имя-значение.
        var name = cookieList[i].split("=");
        // Декодирование и добавление в cookie-массив.
        cookieArray[unescape(name[0])] = unescape(name[1]);
    }
    return cookieArray;
}

function setCookie(visits) {
    /* Счетчик числа посещений с указанием даты последнего посещения
       и определением срока хранения в 1 год. */
    var expireDate = new Date();
    var today = new Date();
    // Установка даты истечения срока хранения.
    expireDate.setDate(365 + expireDate.getDate());
    // Сохранение числа посещений.
    document.cookie = "visits=" + visits +
        "; expires=" + expireDate.toGMTString() + ";";
    // Сохранение настоящей даты как времени последнего посещения.
    document.cookie = "LastVisit=" + escape(today.toGMTString()) +
        "; expires=" + expireDate.toGMTString() + ";";
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







/*вызов функций*/
$(document).ready(function() {
    FormRegisted();
});



const smoothLinks = document.querySelectorAll('a[href^="#"]');
// let navigationUppBlogs = smoothLinks.slice(0, 5);
console.log(smoothLinks[0]);


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
};

let text = document.querySelector("#unikalText");
let navigatorBtn = document.querySelector("#btnDiznatus");


function scrollBtn() {
    text.scrollIntoView({ block: "center", behavior: "smooth" });
}
navigatorBtn.addEventListener("click", scrollBtn);

console.log(navigatorBtn);
console.log(text);