export default function handleScroll() {
  try {
    const navbar: HTMLElement = document.querySelector('#navbar');

    if (window.scrollY > 80) {
      navbar.style.backgroundColor = 'rgb(30,30,30,0.8)';
      navbar.style.width = '100%';
      navbar.style.height = '70px';
      navbar.style.boxShadow = '0px 10px 15px rgb(0,0,0, 0.3)';
    } else {
      navbar.style.backgroundColor = 'rgb(0,0,0,0)';
      navbar.style.boxShadow = 'none';
    }
  } catch (e) {
    console.error(e);
  }
}
