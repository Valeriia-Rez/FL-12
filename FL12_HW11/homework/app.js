const structure = [{
        'folder': true,
        'title': 'Films',
        'children': [{
                'title': 'Iron Man.avi'
            },
            {
                'folder': true,
                'title': 'Fantasy',
                'children': [{
                        'title': 'The Lord of the Rings.avi'
                    },
                    {
                        'folder': true,
                        'title': 'New folder 1',
                        'children': false
                    }
                ]
            }
        ]
    },
    {
        'folder': true,
        'title': 'Documents',
        'children': [{
            'folder': true,
            'title': 'EPAM Homework answers',
            'children': null
        }]
    }
];

const rootNode = document.getElementById('root');

function generateLiWithContent(liContentText, iconName) {
    const li = document.createElement('li');
    li.innerHTML = `<div class="select"><i class='material-icons'>${iconName}</i><span>${liContentText}</span></div>`
    return li;
}

function walkThroughObject(item) {
    const ul = document.createElement('ul');
    ul.id = item.title;
    ul.className = ' hide';
    item.children.forEach(function(innerItemEl) {
        if (innerItemEl.folder && innerItemEl.children) {
            const li = generateLiWithContent(innerItemEl.title, "folder");
            const test = walkThroughObject(innerItemEl);
            li.appendChild(test);
            li.addEventListener('click', (e) => {
                e.stopPropagation();
                onSectionClick(innerItemEl.title)
            });
            ul.appendChild(li);
        } else if (innerItemEl.folder && !innerItemEl.children && innerItemEl.children !== 'undefined') {
            const li = generateLiWithContent(innerItemEl.title, "folder");
            const innerUl = document.createElement('ul');
            innerUl.className = ' hide';
            innerUl.id = innerItemEl.title;

            const innerLi = document.createElement('li');
            innerLi.className = "select";
            innerLi.appendChild(document.createTextNode('Folder is empty'));
            innerLi.style.fontStyle = "italic";
            innerUl.appendChild(innerLi);

            li.addEventListener('click', (e) => {
                e.stopPropagation();
                onSectionClick(innerItemEl.title);
            });
            li.appendChild(innerUl);

            ul.appendChild(li);
        } else {
            const li = generateLiWithContent(innerItemEl.title, "insert_drive_file");
            li.className = "liFile";
            ul.appendChild(li);
        }
    })
    return ul;
}

function onSectionClick(id) {

    const element = document.getElementById(id);
    const parentElem = element.parentElement;
    const icon = parentElem.querySelector(".material-icons");
    if (element.className.indexOf('show') === -1) {
        element.className += ' show';
        icon.innerText = "folder_open";
    } else {
        element.className = element.className.replace(' show', ' hide');
        icon.innerText = "folder";
    }
}

function createTree() {
    const testUl = document.createElement('ul');
    structure.forEach(function(el) {
        const li = generateLiWithContent(el.title, "folder");
        li.addEventListener('click', (e) => {
            e.stopPropagation();
            onSectionClick(el.title);

        });
        const liInnerItems = walkThroughObject(el);
        li.appendChild(liInnerItems);
        testUl.appendChild(li);

    })
    rootNode.appendChild(testUl);
}


createTree();