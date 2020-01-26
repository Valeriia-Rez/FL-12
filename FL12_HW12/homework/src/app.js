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

/*let mainPage = () => `<p>main page</p>`;*/
let addNewSet = () => `<p>addNewSet</p>`;
let modifySet = (props) => `<p>${props.id}modifySet</p>`;

class Set {
    constructor(set) {
        this.set = set;
    }
    render() {
        console.log(this.set);
        return `<p>${this.set.name},${this.set.term},${this.set.definition}</p>`;
    }
}
class MainPageUI {
    constructor(sets) {
        this.sets = sets;
    }

    render() {
        return this.sets.map((set) => {
            const setUI = new Set(set);
            return setUI.render();
        });
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

const renderMainPageController = () => {
    const mainPage = new MainPageUI([{ name: "Lera", term: "Rieznik", definition: "developer" }, { name: "Anna", term: "Vihrogonova", definition: "good developer" }]);
    return mainPage.render();
}
const renderAddNewSetController = () => {
    const addNewSetPage = new AddNewSetUI();
    return addNewSetPage.render();
}
const renderModifySetContoller = (props) => {
    console.log(props.id);
    const modifySetPage = new ModifySetUI({ name: "Lera", term: "Rieznik", definition: "developer" });
    return modifySetPage.render();
}

const routes = [
    new Route('main', '/', renderMainPageController),
    new Route('add', '/add', renderAddNewSetController),
    new Route('modify', '/modify/:id', renderModifySetContoller)
];



router(routes);