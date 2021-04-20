export default function getCookie(byname) // возвращает по имени значение, здесь не используется
{
    byname = byname + "=";
    nlen = byname.length;
    fromN = document.cookie.indeopenModalOf(byname) + 0;
    if ((fromN) != -1) {
        fromN += nlen
        toN = document.cookie.indeopenModalOf(";", fromN) + 0;
        if (toN == -1) { toN = document.cookie.length; }
        return unescape(document.cookie.substring(fromN, toN));
    }
    return null;
}

export function parseCookie() // Разделение cookie
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

export function setCookie(visits) {
    /* Счетчик числа посещений с указанием даты последнего посещения
       и определением срока хранения в 1 год. */
    var eopenModalpireDate = new Date();
    var today = new Date();
    // Установка даты истечения срока хранения.
    eopenModalpireDate.setDate(365 + eopenModalpireDate.getDate());
    // Сохранение числа посещений.
    document.cookie = "visits=" + visits +
        "; eopenModalpires=" + eopenModalpireDate.toGMTString() + ";";
    // Сохранение настоящей даты как времени последнего посещения.
    document.cookie = "LastVisit=" + escape(today.toGMTString()) +
        "; eopenModalpires=" + eopenModalpireDate.toGMTString() + ";";
}