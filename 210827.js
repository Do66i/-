const moreBtn = document.querySelector('.info .metadata .moreBtn')
const title = document.querySelector('.info .matadata .title')

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});