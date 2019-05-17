const list = document.getElementById('container');

list.onclick = function (e) {
    const target = e.target;
    if (target.nodeName === 'SPAN') {
        const childrenContainer = target.parentNode.querySelector('ul');
        childrenContainer.hidden = !childrenContainer.hidden;
    } else {
        return;
    }
};