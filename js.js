function displayList() {
  const el = document.getElementById('trigger');
  const list = document.getElementById('list');
  el.addEventListener('click', function () {
    list.classList.toggle('active');
  });
}

// Arrow up

function goUp() {
  let el = document.getElementById('up');
  el.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// function clicked() {
//   let el = document.getElementById('contactMeButton');
//   // change to css :active
//   el.addEventListener('mousedown', function () {
//     el.style.height = '2.8em';
//     el.style.width = '2.8em';
//   });
//   el.addEventListener('mouseup', function () {
//     el.style.height = '3em';
//     el.style.width = '3em';
//   });
// }

function magicalPops() {
  let el = document.getElementById('contactMeButton');
  let isVisible = false;
  el.addEventListener('click', function () {
    if (!isVisible) {
      let item1 = document.getElementById('slide-tr');
      item1.classList.add('slide-tr');
      item1.classList.remove('slide-tr-back');
      let item2 = document.getElementById('slide-ttr');
      item2.classList.add('slide-ttr');
      item2.classList.remove('slide-ttr-back');
      let item3 = document.getElementById('slide-right');
      item3.classList.add('slide-right');
      item3.classList.remove('slide-right-back');
      let item4 = document.getElementById('slide-bbr');
      item4.classList.add('slide-bbr');
      item4.classList.remove('slide-bbr-back');
      let item5 = document.getElementById('slide-br');
      item5.classList.add('slide-br');
      item5.classList.remove('slide-br-back');
      isVisible = true;
    } else {
      let item1 = document.getElementById('slide-tr');
      item1.classList.remove('slide-tr');
      item1.classList.add('slide-tr-back');
      let item2 = document.getElementById('slide-ttr');
      item2.classList.remove('slide-ttr');
      item2.classList.add('slide-ttr-back');
      let item3 = document.getElementById('slide-right');
      item3.classList.remove('slide-right');
      item3.classList.add('slide-right-back');
      let item4 = document.getElementById('slide-bbr');
      item4.classList.remove('slide-bbr');
      item4.classList.add('slide-bbr-back');
      let item5 = document.getElementById('slide-br');
      item5.classList.remove('slide-br');
      item5.classList.add('slide-br-back');
      isVisible = false;
    }
  });
}

function darkMode() {
  let clicked = false;
  let el = document.getElementById('logo');
  // try use querySelector instead of getElementsByTagName
  const head = document.getElementsByTagName('head')[0];
  const link = document.createElement('link');
  const text = document.getElementById('clickTheLamp');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = './styles/darkmode.css';
  link.media = 'all';
  el.addEventListener('click', function () {
    if (!clicked) {
      head.appendChild(link);
      clicked = true;
      el.src = 'resources/logo_transparent.png';
      text.style.display = 'none';
    } else {
      let linkNode = document.getElementsByTagName('link')[4];
      // document.querySelector('[href="./styles/darkmode.css"]');
      linkNode.parentNode.removeChild(linkNode);
      clicked = false;
      el.src = 'resources/logo.png';
    }
  });
}

window.onload = function () {
  displayList();
  goUp();
  // clicked();
  magicalPops();
  darkMode();
};
