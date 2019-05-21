const list = document.getElementById('container');

list.addEventListener('click', function (e) {
    const {nodeName, parentNode} = e.target;
    if (nodeName === 'SPAN') {
        const childrenContainer = parentNode.querySelector('ul');
        childrenContainer.hidden = !childrenContainer.hidden;
    }
});