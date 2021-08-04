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
    let el = document.getElementById('contactMeButton')
    let isclicked = false;
    el.addEventListener('mousedown', function() {
            el.style.height='2.8em';
            el.style.width='2.8em';
            isclicked = true;
    })
    el.addEventListener('mouseup', function() {
        el.style.height='3em';
        el.style.width='3em';
    })
}

window.onload = function() {
    displayList();
    goUp();
    clicked()
}