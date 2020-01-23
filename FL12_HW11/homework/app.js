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
        const ul2 = document.createElement("ul");
        const li2 = document.createElement("li");
        li2.appendChild(document.createTextNode(el.children));
        li.appendChild(li2);

        li2.style.display = "none";
        ul.appendChild(li);

        function open() {
            li2.style.display = "block";
        }
    });
    rootNode.appendChild(ul);




}
console.log(createTree());