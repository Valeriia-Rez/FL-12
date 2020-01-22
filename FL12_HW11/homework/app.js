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



function createTree() {
    const ul = document.createElement("ul");
    structure.forEach(function(el) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(el.title));
        li.addEventListener("click", open);
        ul.appendChild(li);

    })
    rootNode.appendChild(ul);
}
createTree();

/*function open() {

    const childUl = document.createElement("ul");
    structure.children[].forEach(function(el) {
        const childLi = document.createElement("li");
        childLi.appendChild(document.createTextNode(el.title));
        childUl.appendChild(childLi);
    })
}*/