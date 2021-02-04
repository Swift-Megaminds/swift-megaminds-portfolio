const TxtType = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function() {
	let i = this.loopNum % this.toRotate.length;
	let fullTxt = this.toRotate[i];
	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	let delta = 200 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(() => {
		this.tick();
	}, delta);
};

window.onload = function() {
    const elements = document.getElementsByClassName('typewrite');
    
    for (const element of elements) {
        const toRotate = element.getAttribute('data-type');
        const period = element.getAttribute('data-period');
        if(toRotate) new TxtType(element, JSON.parse(toRotate), period); 
    }
 
	const css = document.createElement("style");
	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
	document.body.appendChild(css);
};


