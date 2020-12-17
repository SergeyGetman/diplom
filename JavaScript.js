﻿
/*вехний скролл*/
$(function () {
    var header = $("#header"),
        introH = $("#header").innerHeight() + $(this).scrollTop(),
        scrollOffset = 0;

    $(window).on("scroll", function () {

        
            scrollOffset = $("#header").innerHeight() + $(this).scrollTop();

        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.addClass("fixed");
        }
        
    });

});
/* форма регистрации*/

function FormRegisted() {

    $("#submit").click(function () {
        var name = $("#name").val();
        var password = $("#password").val();
        var password_2 = $("#password_2").val();
        var email = $("#email").val();
        if (name == "") {
            alert("введите ваше имя");
        }
        else if (password == "") {
            alert("введите ваш пароль");
        }
        else if (password_2 == "") {
            alert("Повторите пароль");
        }
        else if (password != password_2) {
            alert("Введенные пароли не совпадают");
        }
        else if (password.length < 6) {
            alert("Пароль должен быть не меньше 6 символов");
        }
        else if (email == "") {
            alert("Введите ваш эмайл");
        } else {
            alert("Имя: " + name + "\n пароль: " + password + "\n email:  " + email);
        }

    });
};


function validate() {
    let userName = document.getElementById("name");
    let userPassword = document.getElementById("password");
    

    if (!userName.value) {
        userName.style.backgroundColor = "#FF0000";
        return false;
    } else {
        userName.style.backgroundColor = "#JS8916";
        return true;
    }

    if (!userPassword.value) {
        userPassword.style.backgroundColor = "#FF0000";
        return false;
    }
    return true;
}

/*счетчик посещений and cookies*/
function Counter(name, formats = false) {
    //formats - если тру текст, если фальш штмл код 
    setTimeout(function () {
        var counter = $("#counter");

        // var results = "res";

        if (formats == true) {
            counter.text(name);
        } else {
            counter.html(name);
        }
        
    }, 3000);
    
};





function getCookie(byname)	// возвращает по имени значение, здесь не используется
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

function parseCookie()   // Разделение cookie
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
    }
    else {


        var cookies = parseCookie();
        // Вывод приветствия, числа посещений и увеличение числа посещений на 1.
       // document.write("<H4>Мы снова рады видеть Вас на моем сайте! Число лично ваших посещений - " + cookies.visits++ + " !</H4>");
        //alert(cookies.visits);
        Counter('<H4 class="count">Число лично ваших посещений - ' + cookies.visits++ + ' !</H4><H4>Последний раз Вы были у меня на сайте: ' + cookies.LastVisit + '.</H4>');
        // Вывод даты последнего посещения.
        
        // Обновление cookie.
        setCookie(isNaN(cookies.visits) ? 1 : cookies.visits);
    }




   


/*вызов функций*/
$(document).ready(function () { 

    
    FormRegisted();
});



const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

      
       

        let fire = document.querySelector(id);
      
        if (!fire) {
            return;
        }
        fire.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};