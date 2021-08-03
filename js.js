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
            isVisible = true;
        }
    })
}

window.onload = function() {
    displayList();
}