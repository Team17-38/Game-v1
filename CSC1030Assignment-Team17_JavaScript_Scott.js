
var time = 300;
var batterRes;
var BatteryRemain = 1.00;
var Gold = 0;
var Lives = 3;
var ending = 'death';
var Might = 5;
var Intelegence = 5;

function getRes() {
    var w = window.innerWidth;
    batterRes = (document.getElementById('BatteryLife').clientWidth) - 15;
    document.getElementById('res').innerHTML = 'Width: ' + w + 'px. Batter width:' + batterRes;
    var batterremainPx = (batterRes * BatteryRemain);
    document.getElementById('BatteryLifeRemain').style.width = batterremainPx;
}


function StartGame() {

}

function EndGame() {
    clearInterval(batteryTimer);
    document.getElementById('GameText').append(ending);
}


function startCountdown() {
    batteryTimer = setInterval('countDown()', 1000);
}

function stopCountDown() {
    clearInterval(batteryTimer);
    document.getElementById('GameText').innerHTML = 'time up';
    ending = 'TimeOut';
    EndGame();
}

function countDown() {

    time--;
    document.getElementById('GameText').innerHTML = time;

    if (time > 0) {
        BatteryRemain = time / 300;
        var batterremainPx = (batterRes * BatteryRemain) - 3;
        document.getElementById('BatteryLifeRemain').style.width = batterremainPx;
    }
    else {
        document.getElementById('BatteryLifeRemain').style.width = '0%';
        stopCountDown();
    }

}

function changeGold(change) {
    Gold = Gold + change;
    if (Gold >= 0) {
        document.getElementById('gold').innerHTML = Gold;
    }
    else {
        Gold = Gold - change;
    }

}

function die() {
    if (Lives > 1) {
        Lives--;
        document.getElementById('Lives').innerHTML = Lives;
    }
    else {
        EndGame();
    }

}

function changeMight(change, death) {
    if (Might + change > 0) {
        Might = Might + change;
        if (Might < 11) {
            document.getElementById('might').innerHTML = Might;
        }

    }
    else {
        document.getElementById('GameText').append(death);
        document.getElementById('might').innerHTML = 0;
        ending = '0Mignt';
        EndGame();
    }
}

function changeIntel(change, death) {
    if (Intelegence + change > 0) {
        Intelegence = Intelegence + change;
        if (Intelegence < 11) {
            document.getElementById('intel').innerHTML = Intelegence;
        }

    }
    else {
        document.getElementById('GameText').append('<br>' + death);
        document.getElementById('intel').innerHTML = 0;
        ending = '0Intel';
        EndGame();
    }
}