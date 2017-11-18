let elements = document.querySelectorAll('ul#todolist li');
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', liClick)
}

elements = document.querySelectorAll('ul#todolist li button');
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', buttonClick)
}


function liClick(e) {
    e.currentTarget.classList.toggle('done');
    // console.log(e.target);

}

function buttonClick(event) {

    // debugger;

    let text = [].filter.call(event.target.parentElement.childNodes, function (el) {
        return el.nodeName === '#text';
    });

    let value = '';
    text.forEach(node => {
        value += node.textContent;
    });


        document.getElementById('editField').value = value;
        // text.textContent

    event.stopPropagation();


}