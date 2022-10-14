'use strict';

addEventListener('DOMContentLoaded', () => {

    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');
    const btnUp = document.querySelector('.btn-up');
    const btnDown = document.querySelector('.btn-down');

    const dice = document.querySelector('.dice');

    let rotationYcounter = 0;
    let rotationXcounter = 0;

    let intervalId;

    function rotateRight() {
        if (!intervalId) {
            intervalId = setInterval(right, 10);
        }
    }

    function rotateLeft() {
        if (!intervalId) {
            intervalId = setInterval(left, 10);
        }
    }

    function rotateUp() {
        if (!intervalId) {
            intervalId = setInterval(up, 10);
        }
    }

    function rotateDown() {
        if (!intervalId) {
            intervalId = setInterval(down, 10);
        }
    }

    function right() {
        dice.style.cssText = `transform: rotateY(${rotationYcounter}deg) rotateX(${rotationXcounter}deg)`;
        rotationYcounter++;
    }

    function left() {
        dice.style.cssText = `transform: rotateY(${rotationYcounter}deg) rotateX(${rotationXcounter}deg)`;
        rotationYcounter--;
    }

    function up() {
        dice.style.cssText = `transform: rotateY(${rotationYcounter}deg) rotateX(${rotationXcounter}deg)`;
        rotationXcounter++;
    }

    function down() {
        dice.style.cssText = `transform: rotateY(${rotationYcounter}deg) rotateX(${rotationXcounter}deg)`;
        rotationXcounter--;
    }

    function stopRotate() {
        clearInterval(intervalId);
        intervalId = null;
    }

    btnLeft.addEventListener('mousedown', rotateLeft);
    btnRight.addEventListener('mousedown', rotateRight);
    btnUp.addEventListener('mousedown', rotateUp);
    btnDown.addEventListener('mousedown', rotateDown);

    addEventListener('mouseup', stopRotate);

});