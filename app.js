function uncheckNavCheckbox() {
    let checkbox = document.querySelector('#navi-toggle');
    checkbox.checked = false;
}

function addNavEvents() {
    let links = document.querySelectorAll('.navigation__link');
    for (let link of links) {
        link.onclick = uncheckNavCheckbox;
    }
}

addNavEvents();



