class Route {
    constructor(name, path, view) {
        this.name = name;
        this.path = path;
        this.view = view;
    }
    setProps(newProps) {
        this.props = newProps;
    }
    renderView() {
        return this.view(this.props);
    }
}

class Router {
    constructor(routes = [], renderNode) {
        this.routes = routes;
        this.renderNode = renderNode;
        this.navigate(location.pathname + location.hash);
    }
    addRoutes(routes) {
        this.routes = [...this.routes, ...routes];
    }


    match(route, requestPath) {
        let paramNames = [];
        let regexPath = route.path.replace(/([:*])(\w+)/g, (full, colon, name) => { paramNames.push(name); return '([^\/]+)'; }) + '(?:\/|$)'
        let params = {};
        let routeMatch = requestPath.match(new RegExp(regexPath));
        if (routeMatch !== null) {
            params = routeMatch.slice(1).reduce((params, value, index) => {
                if (params === null) params = {};
                params[paramNames[index]] = value;
                return params;
            }, null);
        }
        route.setProps(params);
        return routeMatch;
    }


    navigate(path) {
        const route = this.routes.filter(route => this.match(route, path))[0];
        if (!route) this.renderNode.innerHTML = "404! Page not found";
        else {
            console.log(path);
            window.location.href = path.search('/#') === -1 ? '#' + path : path;
            this.renderNode.innerHTML = route.renderView();
        }
    }
}

const router = (routes) => {
    const router = new Router(routes, document.getElementById('root'));
    document.addEventListener('DOMContentLoaded', e => {
        document.querySelectorAll('[route]').forEach(route => route.addEventListener('click', e => {
            e.preventDefault();
            router.navigate(e.target.getAttribute('route'));
        }, false));
    });
    window.addEventListener('hashchange', e => router.navigate(e.target.location.hash.substr(1)));
}




const state = {
    sets: [{ name: "Lera", term: "Rieznik", definition: "developer", id: "1" },
        { name: "Anna", term: "Vihrogonova", definition: "good developer", id: "2" }
    ]
}



class Set {
    constructor(set) {
        this.set = set;
    }
    render() {
        const template = `
       <div data-id="${this.set.id}">
            <h1>${this.set.name}</h1>
            <div>
                <p>Term: ${this.set.term}</p>
                <p>Definition: ${this.set.definition}</p>
              </div>
           
       </div>`
        return template;
    }

}


class MainPageUI {
    constructor(sets) {
        this.sets = sets;
    }

    render() {
        const generatedSets = this.generateSets();
        const template = `
            <div>
                <button route="/add">Add New</button>
                <ul>${generatedSets}</ul>
            </div>
        `
        return template;
    }

    generateSets() {
        return this.sets.map((set) => {
            const setUI = new Set(set);
            const setHtml = setUI.render();
            const template = ` 
            <li data-id="${set.id}">
                ${setHtml}
            <div>
                <button route="/modify/${set.id}">Edit</button>
                <button data-id="${set.id}" class="removeSetButton">Remove</button>
            </div>
            </li>`
            return template;
        }).join("");

    }
    removeSet(elemId) {
        const item = document.querySelector(`[data-id="${elemId}"]`);
        if (item) {
            item.parentElement.removeChild(item);
        }
    }
}

class AddNewSetUI {
    constructor() {
        this.addTermsClicked = false;
    }
    render() {
        return `<p>Add New Set UI</p>`;
    }
}

class ModifySetUI {
    constructor(set) {
        this.set = set;
    }
    render() {
        const setUI = new Set(this.set);
        return setUI.render();
    }
}
const mainPage = new MainPageUI(state.sets);
const renderMainPageController = () => {
    return mainPage.render();
}
const renderAddNewSetController = () => {
    const addNewSetPage = new AddNewSetUI();
    return addNewSetPage.render();
}
const renderModifySetContoller = (props) => {
    const findedSet = state.sets.find(set => {
        return props.id === set.id
    });
    let modifySetPage;
    if (findedSet) {
        modifySetPage = new ModifySetUI(findedSet).render();
    } else {
        modifySetPage = `<p>Error</p>`;
    }
    return modifySetPage;
}

const routes = [
    new Route('main', '/', renderMainPageController),
    new Route('add', '/add', renderAddNewSetController),
    new Route('modify', '/modify/:id', renderModifySetContoller)
];

router(routes);


const removeSet = (e) => {
    e.preventDefault();
    const setId = e.target.dataset.id;
    const updatedListOfSets = state.sets.filter(set => setId !== set.id);
    state.sets = updatedListOfSets;
    mainPage.removeSet(setId);
}

const removeSetButtons = document.querySelectorAll(".removeSetButton");
removeSetButtons.forEach(button => {
    return button.addEventListener("click", removeSet);
});