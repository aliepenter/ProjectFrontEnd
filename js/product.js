var lowerSlider = document.querySelector('#lower');
var  upperSlider = document.querySelector('#upper');

document.querySelector('#two').value=upperSlider.value;
document.querySelector('#one').value=lowerSlider.value;

var  lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
        }
    }
    document.querySelector('#two').value=this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value=this.value
};
var currentItemIndex = 1;
function itemPro1(){
    document.getElementById('itemPro1').classList.add('dis-block');
    document.getElementById('itemPro1').classList.remove('display-none');
    document.getElementById('itemPro2').classList.remove('dis-block');
    document.getElementById('itemPro3').classList.remove('dis-block');
    document.getElementById('itemPro4').classList.remove('dis-block');
    document.getElementById('itemPro2').classList.add('display-none');
    document.getElementById('itemPro3').classList.add('display-none');
    document.getElementById('itemPro4').classList.add('display-none');
    document.getElementById('btn1').classList.add('js-btn');
    document.getElementById('btn2').classList.remove('js-btn');
    document.getElementById('btn3').classList.remove('js-btn');
    document.getElementById('btn4').classList.remove('js-btn');
    currentItemIndex = 1;
}
function itemPro2(){
    document.getElementById('itemPro2').classList.add('dis-block');
    document.getElementById('itemPro2').classList.remove('display-none');
    document.getElementById('itemPro1').classList.remove('dis-block');
    document.getElementById('itemPro3').classList.remove('dis-block');
    document.getElementById('itemPro4').classList.remove('dis-block');
    document.getElementById('itemPro1').classList.add('display-none');
    document.getElementById('itemPro3').classList.add('display-none');
    document.getElementById('itemPro4').classList.add('display-none');
    document.getElementById('btn2').classList.add('js-btn');
    document.getElementById('btn1').classList.remove('js-btn');
    document.getElementById('btn3').classList.remove('js-btn');
    document.getElementById('btn4').classList.remove('js-btn');
    currentItemIndex = 2;
}
function itemPro3(){
    document.getElementById('itemPro3').classList.add('dis-block');
    document.getElementById('itemPro3').classList.remove('display-none');
    document.getElementById('itemPro1').classList.remove('dis-block');
    document.getElementById('itemPro2').classList.remove('dis-block');
    document.getElementById('itemPro4').classList.remove('dis-block');
    document.getElementById('itemPro1').classList.add('display-none');
    document.getElementById('itemPro2').classList.add('display-none');
    document.getElementById('itemPro4').classList.add('display-none');
    document.getElementById('btn3').classList.add('js-btn');
    document.getElementById('btn2').classList.remove('js-btn');
    document.getElementById('btn1').classList.remove('js-btn');
    document.getElementById('btn4').classList.remove('js-btn');
    currentItemIndex = 3;
}
function itemPro4(){
    document.getElementById('itemPro4').classList.add('dis-block');
    document.getElementById('itemPro4').classList.remove('display-none');
    document.getElementById('itemPro1').classList.remove('dis-block');
    document.getElementById('itemPro3').classList.remove('dis-block');
    document.getElementById('itemPro2').classList.remove('dis-block');
    document.getElementById('itemPro1').classList.add('display-none');
    document.getElementById('itemPro3').classList.add('display-none');
    document.getElementById('itemPro2').classList.add('display-none');
    document.getElementById('btn4').classList.add('js-btn');
    document.getElementById('btn2').classList.remove('js-btn');
    document.getElementById('btn3').classList.remove('js-btn');
    document.getElementById('btn1').classList.remove('js-btn');
    currentItemIndex = 4;
}
function itemProNext() {
    if (currentItemIndex == 1) {
        document.getElementById('itemPro2').classList.add('dis-block');
        document.getElementById('itemPro2').classList.remove('display-none');
        document.getElementById('itemPro1').classList.remove('dis-block');
        document.getElementById('itemPro3').classList.remove('dis-block');
        document.getElementById('itemPro4').classList.remove('dis-block');
        document.getElementById('itemPro1').classList.add('display-none');
        document.getElementById('itemPro3').classList.add('display-none');
        document.getElementById('itemPro4').classList.add('display-none');
        document.getElementById('btn2').classList.add('js-btn');
        document.getElementById('btn1').classList.remove('js-btn');
        document.getElementById('btn3').classList.remove('js-btn');
        document.getElementById('btn4').classList.remove('js-btn');
        currentItemIndex = 2;
    }
    else if (currentItemIndex == 2) {
        document.getElementById('itemPro3').classList.add('dis-block');
        document.getElementById('itemPro3').classList.remove('display-none');
        document.getElementById('itemPro1').classList.remove('dis-block');
        document.getElementById('itemPro2').classList.remove('dis-block');
        document.getElementById('itemPro4').classList.remove('dis-block');
        document.getElementById('itemPro1').classList.add('display-none');
        document.getElementById('itemPro2').classList.add('display-none');
        document.getElementById('itemPro4').classList.add('display-none');
        document.getElementById('btn3').classList.add('js-btn');
        document.getElementById('btn2').classList.remove('js-btn');
        document.getElementById('btn1').classList.remove('js-btn');
        document.getElementById('btn4').classList.remove('js-btn');
        currentItemIndex = 3;
    } 
    else if (currentItemIndex == 3) {
        document.getElementById('itemPro4').classList.add('dis-block');
        document.getElementById('itemPro4').classList.remove('display-none');
        document.getElementById('itemPro1').classList.remove('dis-block');
        document.getElementById('itemPro3').classList.remove('dis-block');
        document.getElementById('itemPro2').classList.remove('dis-block');
        document.getElementById('itemPro1').classList.add('display-none');
        document.getElementById('itemPro3').classList.add('display-none');
        document.getElementById('itemPro2').classList.add('display-none');
        document.getElementById('btn4').classList.add('js-btn');
        document.getElementById('btn2').classList.remove('js-btn');
        document.getElementById('btn3').classList.remove('js-btn');
        document.getElementById('btn1').classList.remove('js-btn');
        currentItemIndex = 4;
    }  
    else if (currentItemIndex == 4) {
        document.getElementById('itemPro1').classList.add('dis-block');
        document.getElementById('itemPro1').classList.remove('display-none');
        document.getElementById('itemPro2').classList.remove('dis-block');
        document.getElementById('itemPro3').classList.remove('dis-block');
        document.getElementById('itemPro4').classList.remove('dis-block');
        document.getElementById('itemPro2').classList.add('display-none');
        document.getElementById('itemPro3').classList.add('display-none');
        document.getElementById('itemPro4').classList.add('display-none');
        document.getElementById('btn1').classList.add('js-btn');
        document.getElementById('btn2').classList.remove('js-btn');
        document.getElementById('btn3').classList.remove('js-btn');
        document.getElementById('btn4').classList.remove('js-btn');
        currentItemIndex = 1;
    }
}