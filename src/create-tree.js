const data = {
    'Животные': {
        'Млекопитающие ': {
            'Коровы ': {},
            'Ослы ': {},
            'Собаки ': {},
            'Тигры ': {}
        },
        'Другие ': {
            'Змеи ': {},
            'Птицы ': {},
            'Ящурицы ': {}
        }
    },

    'Рыбы': {
        'Аквариумные': {
            'Гуппи': {},
            'Скалярии': {}
        },
        'Морские': {
            'Форель': {}
        }
    }
};

const container = document.getElementById('container');
function createTree(container, data) {
    container.appendChild(getTree(data));
}


function getTree(obj) {
    if (Object.keys(obj).length !== 0){
        const ul = document.createElement('ul');
        Object.keys(obj).forEach((item) => {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.innerText = item;
            li.appendChild(span);
            const childrenUl = getTree(obj[item]);
            if (childrenUl) {
                li.appendChild(childrenUl);
            }
            ul.appendChild(li);
        });
        return ul;
    }
}

createTree(container, data);

