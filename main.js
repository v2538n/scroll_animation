 
 const animateItems = document.querySelectorAll('.animation-items');

 if(animateItems.length > 0){

 	window.addEventListener('scroll', animateOnScroll);

 	function animateOnScroll(params){
 		for (let index = 0; index < animateItems.length; index++) {
 			const animateItem = animateItems[index];            // элемент списка
 			const animateItemHeight = animateItem.offsetHeight; // высота элемент
 			const animateItemOffset = offset(animateItem).top;  // вертикальное расстояние от верха страницы
 			const animStart = 4;

 			let animateItemPoint = window.innerHeight - animateItemHeight / animStart;
 			// точка срабатывания = высота экрана минус (высота элемента деленая на коэффициент)

 			if(animateItemHeight > window.innerHeight){ // если высота элемента больше высоты экрана
 				animateItemPoint = window.innerHeight - window.innerHeight / animStart;
 				// точка срабатывания = высота экрана минус (высота экрана деленая на коэффициент)
 			}

 			if((pageYOffset > animateItemOffset - animateItemPoint) && pageYOffset < (animateItemOffset + animateItemHeight)) {
 				animateItem.classList.add('animation_active');
 			} 

 			else {
 				if(!animateItem.classList.contains('animation-no-hide')){
 					animateItem.classList.remove('animation_active');
 				}
 			}
 		}
 	}

 	function offset(el){
	 	const rect = el.getBoundingClientRect(),
	 		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	 		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	 	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	 }
	 
	 setTimeout(() => {
	 	animateOnScroll();
	 }, 300);
 }