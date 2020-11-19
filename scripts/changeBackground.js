let inputs = document.getElementsByClassName('color');
const arr = Array.from(inputs)

const changeBackground = (elem) => {
    if (elem.value.match(/#[A-Za-z0-9]{6}/)) {
        elem.style.backgroundColor = elem.value;
        saveProps(elem);
    }
}

arr.map((elem) => {
    elem.onkeyup = () => {
        if(elem.value.length == 7) changeBackground(elem);
    }
});