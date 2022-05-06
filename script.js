const navBtns = document.querySelectorAll('footer button');

function toggleNavBtns() {
   navBtns.forEach((btn) => {
      btn.classList.remove('active');
      this.classList.add('active');
   })
}

navBtns.forEach((btn) => {
   btn.addEventListener('click', toggleNavBtns);
})

const docHeight = () => {
	const doc = document.documentElement;
	doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
}

window.addEventListener('resize', docHeight);
docHeight();