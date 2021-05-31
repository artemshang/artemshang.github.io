let btn_lds = document.querySelector('#lds_downBtn');
let iphDownBtn = document.querySelector('#iphone_downBtn');
let odgDownBtn = document.querySelector('#odg_downBtn')

function scrollDown(name){
	let elem = document.querySelector('#' + name);
	let height = elem.offsetHeight;
	        window.scrollBy({
            top: height,
            behavior: 'smooth'
        }); 	
}

btn_lds.onclick = ()=> scrollDown('lds');
iphDownBtn.onclick = () => scrollDown('ft');
odgDownBtn.onclick = () => scrollDown('odg');

//upBtn

let upBtn = document.querySelector('#upBtn');
let body = document.querySelector('body');
upBtn.onclick = () => {
    window.scrollBy({
            top: -body.offsetHeight,
            behavior: 'smooth'
        }); 	
};


//mobile_Btn
let mobile_Btn = document.querySelector('#mobile_Btn')
let mobile_nav_block = document.querySelector('#mobile_nav_block')
let mode = 0;
mobile_Btn.onclick = () =>{
	if(mode == 0){
		mobile_nav_block.style.top = 0;
		mode = 1
	}else{
		mobile_nav_block.style.top = '-20vh';
		mode = 0
	}
}