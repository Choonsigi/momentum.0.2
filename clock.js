const  Clock = document.querySelector('#Time .clock');


function tictok() {
    const time = new Date();
    const hour = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    Clock.innerText = `${hour}:${minutes}:${seconds}`;
}
tictok();
setInterval(tictok, 1000);