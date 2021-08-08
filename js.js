function displayList() {
  let el = document.getElementById("trigger");
  let isVisible = false;
  el.addEventListener("click", function () {
    let list = document.getElementById("list");
    if (isVisible === true) {
      list.style.display = "none";
      isVisible = false;
    } else {
      list.style.display = "block";
      isVisible = true;
    }
  });
}

// Arrow up

function goUp() {
  let el = document.getElementById("up");
  el.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function clicked() {
  let el = document.getElementById("contactMeButton");
  el.addEventListener("mousedown", function () {
    el.style.height = "2.8em";
    el.style.width = "2.8em";
  });
  el.addEventListener("mouseup", function () {
    el.style.height = "3em";
    el.style.width = "3em";
  });
}

function magicalPops() {
  let el = document.getElementById("contactMeButton");
  let isVisible = false;
  el.addEventListener("click", function () {
    if (isVisible === false) {
      let item1 = document.getElementById("slide-tr");
      item1.classList.add("slide-tr");
      item1.classList.remove("slide-tr-back");
      let item2 = document.getElementById("slide-ttr");
      item2.classList.add("slide-ttr");
      item2.classList.remove("slide-ttr-back");
      let item3 = document.getElementById("slide-right");
      item3.classList.add("slide-right");
      item3.classList.remove("slide-right-back");
      let item4 = document.getElementById("slide-bbr");
      item4.classList.add("slide-bbr");
      item4.classList.remove("slide-bbr-back");
      let item5 = document.getElementById("slide-br");
      item5.classList.add("slide-br");
      item5.classList.remove("slide-br-back");
      isVisible = true;
    } else {
      let item1 = document.getElementById("slide-tr");
      item1.classList.remove("slide-tr");
      item1.classList.add("slide-tr-back");
      let item2 = document.getElementById("slide-ttr");
      item2.classList.remove("slide-ttr");
      item2.classList.add("slide-ttr-back");
      let item3 = document.getElementById("slide-right");
      item3.classList.remove("slide-right");
      item3.classList.add("slide-right-back");
      let item4 = document.getElementById("slide-bbr");
      item4.classList.remove("slide-bbr");
      item4.classList.add("slide-bbr-back");
      let item5 = document.getElementById("slide-br");
      item5.classList.remove("slide-br");
      item5.classList.add("slide-br-back");
      isVisible = false;
    }
  });
}

function darkMode() {
  let clicked = false;
  let el = document.getElementById('logo')
  const head  = document.getElementsByTagName('head')[0];
  const link  = document.createElement('link');
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = './styles/darkmode.css';
  link.media = 'all';
  el.addEventListener('click', function (){
    if (clicked === false) {
      head.appendChild(link);
      clicked = true;
      el.src = "resources/logo_transparent.png"
    } else {
      const linkNode = document.getElementsByTagName('link')[3];
      console.log(linkNode)
      linkNode.parentNode.removeChild(linkNode)
      clicked = false;
      el.src = "resources/logo.png"
    }
  })
}


window.onload = function () {
  displayList();
  goUp();
  clicked();
  magicalPops();
  darkMode()
};
