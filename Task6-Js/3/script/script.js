'use strict';
(function() {
    var inputText = document.getElementById('InputText'),
        inputColor =  document.getElementById('InputColor'),
        inputSelect = document.getElementById('InputSelect'),
        id = 0,
        menu = document.getElementById('Menu'),
        currentElement;

    document.getElementById('CreateBtn').onclick = create;
    document.getElementById('ChangeCurrentBtn').onclick = changeCurrent;
    document.getElementById('DeleteBtn').onclick = DeleteCurrent;
    menu.addEventListener('click',clickItem);
    function create() {
        var element = document.createElement('li');

        element.innerText = inputText.value;
        element.setAttribute('id', id++);
        element.id = id;
        element.style.listStyle = inputSelect.options[inputSelect.selectedIndex].text;
        element.style.color = inputColor.value;
        menu.appendChild(element);
    }

    function clickItem(e) {
        if(currentElement !== undefined) {
            currentElement.className = currentElement.className.replace('current-item','');
        }
        currentElement = e.target;
        inputText.value  = e.target.innerText;
        inputColor.value = e.target.style.color || 'black';
        currentElement.classList.add('current-itez');
    }

    function changeCurrent() {
        if(currentElement === undefined) {
            alert('Выбирите элемент');
            return;
        }

        currentElement.style.color = inputColor.value || 'black';
        currentElement.innerText = inputText.value;
        currentElement.style.listStyle = inputSelect.options[inputSelect.selectedIndex].text;
    }

    function DeleteCurrent() {
        if(currentElement === undefined) {
            alert('Выбирите элемент');
            return;
        }
        menu.removeChild(currentElement);
        currentElement = undefined;
    }
})();