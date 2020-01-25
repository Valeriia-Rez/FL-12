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

let mainPage = () => `<p>main page</p>`;
let addNewSet = () => `<p>addNewSet</p>`;
let modifySet = (props) => `<p>${props.id}modifySet</p>`;
const routes = [
    new Route('main', '/', mainPage),
    new Route('add', '/add', addNewSet),
    new Route('modify', '/modify/:id', modifySet)
];
router(routes);