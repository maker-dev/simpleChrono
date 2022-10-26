let chrono = document.querySelector(".chrono");
var minutes = 0;
var seconds = 0;
var mSeconds = 0;
var myCounter;

chrono.textContent = `0${minutes}:0${seconds}:0${mSeconds}`;
let startChrono = () => {
    document.getElementById("start").addEventListener("click",() => {

        if (chrono.classList.contains("chronoActive") === false) {
            chrono.classList.add("chronoActive");
            myCounter = setInterval(function () {
                var displayMseconds = `0${mSeconds}`;
                var displaySeconds = `0${seconds}`;
                var displayMinutes = `0${minutes}`;
                chrono.textContent = `${displayMinutes.slice(-2)}:${displaySeconds.slice(-2)}:${displayMseconds.slice(-2)}`;
                mSeconds++;
                if (mSeconds === 100) {
                    mSeconds = 0;
                    seconds++;
                }
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
            },10)
        }
    })
}

let pauseChrono = () => {
    document.getElementById("pause").addEventListener("click",() => {
        clearInterval(myCounter);
        chrono.classList.remove("chronoActive");
    })
}

let resetChrono = () => {
    document.getElementById("reset").addEventListener("click",() => {
        clearInterval(myCounter);
        mSeconds = 0;
        seconds = 0;
        minutes = 0;
        chrono.textContent = `0${minutes}:0${seconds}:0${mSeconds}`;
        chrono.classList.remove("chronoActive");
    })
}



startChrono();

pauseChrono();

resetChrono();  
