console.log('Пункт номер: 4');

function countNumber(a, b) {
    console.log(a);

    if(a === b) {
        return;
    } else if (a > b){
        a -= 1;
    } else {
        a += 1;
    }

    
    countNumber(a, b);

}

countNumber(1, 10);


console.log('Пункт номер: 5 - часы');


function countTime() {
    let check = document.querySelector('.btn_change');
    let clock = document.querySelector('.clock');

    let date = new Date();
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

    if(check.checked == true) {
        clock.innerHTML = `${hours}:${min}:${sec}`;
    } else {
        clock.innerHTML = `${hours}:${min}`;
    }
}

setInterval(countTime, 1000);

    



