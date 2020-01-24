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

function generateLiWithContent(liContentText) {
    const li = document.createElement("li");
    li.innerHTML = `<a><i class="material-icons">folder</i><span>${liContentText}</span></a>`
    return li;
}

function walkThroughObject(item) {
    const ul = document.createElement("ul");
    ul.id = item.title;
    ul.className = " hide";
    item.children.forEach(function(innerItemEl) {
        if (innerItemEl.folder && innerItemEl.children) {
            const li = generateLiWithContent(innerItemEl.title);
            const test = walkThroughObject(innerItemEl);
            li.appendChild(test);
            li.addEventListener("click", (e) => {
                e.stopPropagation();
                onSectionClick(innerItemEl.title)
            });
            ul.appendChild(li);
        } else if (innerItemEl.folder && !innerItemEl.children && innerItemEl.children !== "undefined") {
            const li = generateLiWithContent(innerItemEl.title);
            const innerUl = document.createElement("ul");
            innerUl.className = " hide";
            innerUl.id = innerItemEl.title;

            const innerLi = document.createElement("li");
            innerLi.appendChild(document.createTextNode("Folder is empty"));

            innerUl.appendChild(innerLi);

            li.addEventListener("click", (e) => {
                e.stopPropagation();
                onSectionClick(innerItemEl.title);
            });
            li.appendChild(innerUl);

            ul.appendChild(li);
        } else {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(innerItemEl.title));
            ul.appendChild(li);
        }
    })
    return ul;
}

function onSectionClick(id) {

    const element = document.getElementById(id);
    if (element.className.indexOf("show") == -1) {
        element.className += " show";
    } else {
        element.className = element.className.replace(" show", " hide");
    }
}

function createTree() {
    const testUl = document.createElement("ul");
    structure.forEach(function(el) {
        const li = generateLiWithContent(el.title);
        li.addEventListener("click", (e) => {
            e.stopPropagation();
            onSectionClick(el.title)
        });
        const liInnerItems = walkThroughObject(el);
        li.appendChild(liInnerItems);

        testUl.appendChild(li);

    })
    rootNode.appendChild(testUl);
}


console.log(createTree());
let arr = [1, -2, 3, 4];

function getMin(el) {
    let min = el[0];
    for (let i = 0; i < el.length; i++) {
        if (min > el[i]) {
            min = el[i];
        }
    }
    return min;
}
console.log("hh", getMin(arr));