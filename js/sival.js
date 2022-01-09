const header = document.querySelector('header'),
      navigationLinks = document.querySelectorAll('.nav-link'),
      navitation = document.querySelector('#navigation'),
      navMobile = document.querySelector('#nav-show'),
      navBackground = document.querySelector('#nav-background'),
      portada = document.querySelector('#portada'),
      intro = document.querySelector('#intro');

let navCalled = false;

const observerOptions = {
	root: null,
	threshold: 0.76,
	//rootMargin: '-100px'
}

const observerHome = new IntersectionObserver(function(element, observer) {
	element.forEach( e => { //  requerido convertir en iterable, array o foreach
		if(!e.isIntersecting) {
			header.classList.add('sticky');
		} else {
			header.classList.remove('sticky');
		}
		
		//console.log(e);
	})
} , observerOptions);

observerHome.observe(portada);


header.addEventListener('click', (event) => {
	if(event.target.classList.contains('nav-link')) {
		navigationLinks.forEach(el => {
			if(el.classList.contains('active')) {
				el.classList.remove('active');
			}
		})
		event.target.classList.add('active');
		if(navCalled) {
			navBackground.classList.add('movile-hidden');
			navBackground.classList.remove('animate');
			navitation.classList.add('movile-hidden');
			navMobile.classList.remove('close');
			navCalled = false;
		}
		//console.log(event.target);
	}
})

navMobile.addEventListener('click', (event) => {
	navMobile.classList.toggle('close');
	navBackground.classList.toggle('movile-hidden');
	navBackground.classList.toggle('animate');
	if(!navCalled) {
		setTimeout(()=> {
			navitation.classList.remove('movile-hidden');
			navCalled = true;
		}, 200)
	}
	if(navCalled) {
		navitation.classList.add('movile-hidden');
		navCalled = false;
	}
	console.log('click')
})