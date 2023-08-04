document.querySelector('#card__number-input').oninput = () => {
    document.querySelector('.card__number-box').innerHTML = 
    document.querySelector('#card__number-input').value;
}

document.querySelector('#card__holder-input').oninput = () => {
    document.querySelector('.card-holder-name').innerHTML = 
    document.querySelector('#card__holder-input').value;
}

document.querySelector('.month-input').oninput = () => {
    document.querySelector('.exp-month').innerHTML =
    document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () => {
    document.querySelector('.exp-year').innerHTML = 
    document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').oninput = () => {
    document.querySelector('.cvv__box').innerHTML = 
    document.querySelector('.cvv-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}