function displayList () {
    let el = document.getElementById('trigger');
    let isVisible = false;
    el.addEventListener('click', function () {
        let list = document.getElementById('list');
        if (isVisible === true) {
            list.style.display = 'none';
            isVisible = false;
        } else {
            list.style.display = 'block';
            window.scrollTo(0, document.body.scrollHeight)
            isVisible = true;
        }
    })
}

// Arrow up

function goUp () {
    let el = document.getElementById('up')
    el.addEventListener('click', function (){
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
}


function clicked () {
    let el = document.getElementById('contactMeButton');
    el.addEventListener('mousedown', function() {
            el.style.height='2.8em';
            el.style.width='2.8em';
    })
    el.addEventListener('mouseup', function() {
        el.style.height='3em';
        el.style.width='3em';
    })
}


function magicalPops() {
    let el = document.getElementById('contactMeButton');
    el.addEventListener('click', function(){
        let item1 = document.getElementById('slide-tr');
        item1.classList.add('slide-tr');
        let item2 = document.getElementById('slide-ttr');
        item2.classList.add('slide-ttr');
        let item3 = document.getElementById('slide-right');
        item3.classList.add('slide-right');
        let item4 = document.getElementById('slide-bbr');
        item4.classList.add('slide-bbr');
        let item5 = document.getElementById('slide-br');
        item5.classList.add('slide-br');
    })
}


window.onload = function() {
    displayList();
    goUp();
    clicked();
    magicalPops();
}