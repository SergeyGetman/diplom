// timer 


class Timer {
    constructor(time) {
        this.time = time;
        this.startMinutes = this.time; // количество секунд
        this.timerOutPut = document.querySelector(".counterTimerInside"); // получаем секунды
        this.inputPhoneHeader = document.querySelector(".inputHeader"); // получение input с хедера 
        this.buttonStartTimer = document.querySelector(".timerButton"); //
        this.seconds = time;
        this.interval = 0;
    }

    startTimer() {
        this.inputPhoneHeader.value = "";
        //проверка на запуска только одного раза нажатия по 1 секунде
        if (!this.interval) {
            this.interval = setInterval(this.updateTimer.bind(this), 1000);
        }
        this.startMinutes = this.time;
    }

    stopTimer() {
        clearInterval(this.interval); // очищает интервал 
        this.interval = undefined;
        alert("мы перезвоним вам по данному номеру");
    }

    updateTimer() {
            this.seconds = this.startMinutes % 60;
            if (this.seconds < 0) {
                this.stopTimer();
            }
            if (this.seconds >= 0) {
                this.render();
            }
            this.startMinutes--;
        }
        //отрисовка
    render() {
        this.timerOutPut.textContent = `00:${this.seconds < 10 ? "0" + this.seconds : this.seconds}`;
    }

}

module.exports = Timer;