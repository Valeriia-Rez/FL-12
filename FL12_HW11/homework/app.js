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

function walkThroughObject(item) {
    const ul = document.createElement("ul");
    item.children.forEach(function(innerItemEl) {
        const li = document.createElement("li");
        const liContent = document.createTextNode(innerItemEl.title);
        li.appendChild(liContent);
        if (innerItemEl.folder && innerItemEl.children) {
            const test = walkThroughObject(innerItemEl);
            li.appendChild(test);
            ul.appendChild(li);
        } else if (innerItemEl.folder && !innerItemEl.children && innerItemEl.children !== "undefined") {
            const innerUl = document.createElement("ul");
            const innerLi = document.createElement("li");
            const innerLiContent = document.createTextNode("Folder is empty");
            innerLi.appendChild(innerLiContent);
            innerUl.appendChild(innerLi);
            li.appendChild(innerUl);
            ul.appendChild(li);
        } else {
            ul.appendChild(li);
        }
    })
    return ul;
}

function createTree() {
    const testUl = document.createElement("ul");
    structure.forEach(function(el) {
        const testLi = document.createElement("li");
        const testLiContent = document.createTextNode(el.title);
        testLi.appendChild(testLiContent);
        const testLiElements = walkThroughObject(el);
        testLi.appendChild(testLiElements);
        testUl.appendChild(testLi);
    })
    rootNode.appendChild(testUl);
}


console.log(createTree());