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

window.onload = function() {
    displayList();
    goUp();
}