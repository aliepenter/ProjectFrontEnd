window.onscroll = function() {scrHeader()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function scrHeader() {
  if (window.pageYOffset > sticky) {
    document.getElementById('header').classList.add('menufix');
    // document.getElementById('header').classList.remove('header-or');
  } else {
    document.getElementById("header").classList.remove('menufix');
    // document.getElementById("header").classList.add('header-or');
  }
}
var flags = true;
 function check () {
  	if (flags==true) {
		document.getElementById('menu-ac').classList.add('menuActive');
		document.getElementById('opAll').classList.add('opacityAll');
		flags = false;
	}
	else{
		document.getElementById('menu-ac').classList.remove('menuActive');
		document.getElementById('opAll').classList.remove('opacityAll');
		flags = true;
	}
}
function back () { 
		document.getElementById('menu-ac').classList.remove('menuActive');
		document.getElementById('opAll').classList.remove('opacityAll');
		flags = true;
}

function show1() {
	document.getElementById('a-down1').classList.add('display-none');
	document.getElementById('a-up1').classList.remove('display-none');
	document.getElementById('cat-item1').classList.add('item-down');
}
function hide1() {
	document.getElementById('a-up1').classList.add('display-none');
	document.getElementById('a-down1').classList.remove('display-none');
	document.getElementById('cat-item1').classList.remove('item-down');
}
function show2() {
	document.getElementById('a-down2').classList.add('display-none');
	document.getElementById('a-up2').classList.remove('display-none');
	document.getElementById('cat-item2').classList.add('item-down');
}
function hide2() {
	document.getElementById('a-up2').classList.add('display-none');
	document.getElementById('a-down2').classList.remove('display-none');
	document.getElementById('cat-item2').classList.remove('item-down');
}
function show3() {
	document.getElementById('a-down3').classList.add('display-none');
	document.getElementById('a-up3').classList.remove('display-none');
	document.getElementById('cat-item3').classList.add('item-down');
}
function hide3() {
	document.getElementById('a-up3').classList.add('display-none');
	document.getElementById('a-down3').classList.remove('display-none');
	document.getElementById('cat-item3').classList.remove('item-down');
}
function show4() {
	document.getElementById('a-down4').classList.add('display-none');
	document.getElementById('a-up4').classList.remove('display-none');
	document.getElementById('cat-item4').classList.add('item-down');
}
function hide4() {
	document.getElementById('a-up4').classList.add('display-none');
	document.getElementById('a-down4').classList.remove('display-none');
	document.getElementById('cat-item4').classList.remove('item-down');
}
function show5() {
	document.getElementById('a-down5').classList.add('display-none');
	document.getElementById('a-up5').classList.remove('display-none');
	document.getElementById('cat-item5').classList.add('item-down');
}
function hide5() {
	document.getElementById('a-up5').classList.add('display-none');
	document.getElementById('a-down5').classList.remove('display-none');
	document.getElementById('cat-item5').classList.remove('item-down');
}