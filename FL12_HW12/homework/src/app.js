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


class StorageCtrl {
    storeItem(set) {
        let items;
        // Check if any items in ls
        if (localStorage.getItem("items") === null) {
            items = [];
            // Push new item
            items.push(set);
            // Set ls
            localStorage.setItem("items", JSON.stringify(items));
        } else {
            // Get what is already in ls
            items = JSON.parse(localStorage.getItem("items"));

            // Push new item
            items.push(set);

            // Re set ls
            localStorage.setItem("items", JSON.stringify(items));
        }
    }

    getItemsFromStorage() {
        let items;
        if (localStorage.getItem("items") === null) {
            items = [];
        } else {
            items = JSON.parse(localStorage.getItem("items"));
        }
        return items;
    }
    updateItemStorage(updatedItem) {
        let items = JSON.parse(localStorage.getItem("items"));

        items.forEach(function(item, index) {
            if (updatedItem.id === item.id) {
                items.splice(index, 1, updatedItem);
            }
        });
        localStorage.setItem("items", JSON.stringify(items));
    }
    deleteItemFromStorage(id) {
        let items = JSON.parse(localStorage.getItem("items"));

        items.forEach(function(item, index) {
            if (id === item.id) {
                items.splice(index, 1);
            }
        });
        localStorage.setItem("items", JSON.stringify(items));
    }
    clearItemsFromStorage() {
        localStorage.removeItem("items");
    }
    storeItems(items) {
        localStorage.setItem("items", JSON.stringify(items));
    }
}



const state = {
    sets: []
}

class Set {
    constructor(set) {
        this.set = set;
    }
    render() {
        const template = `
       <div class="setItem" data-id="${this.set.id}">
            <h1>${this.set.name}</h1>
            <p>Term: ${this.set.term}</p>
            <p>Definition: ${this.set.definition}</p>
        </div>`
        return template;
    }

}


class MainPageUI {
    constructor(sets) {
        this.sets = sets;

    }


    render(sets = this.sets) {
        console.log(sets, "clicked");
        const generatedSets = this.generateSets(sets);
        const template = `
            <div>
                <button route="/add">Add New</button>
                <ul class="setsList">${generatedSets}</ul>
            </div>
        `
        return template;
    }

    generateSets(sets) {
        return sets.map((set) => {
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
    reorderSets(sets) {
        const reorderedSet = this.generateSets(sets);
        const list = document.querySelector(".setsList");
        list.innerHTML = reorderedSet;
    }
}

class AddNewSetUI {
    render() {
        return `
        <div class="newSet">
        <p>Name: <input type="text" class="setName" placeholder="Name"/></p>
        <button class="addTermsButton">Add terms</button>
        <button class="saveNewSetButton">Save changes</button>
        <button route="/">Cancel</button>
        <div class="newSetTerms"></div>
        </div>`;
    }
    addTerms() {
        console.log("fff");
        const newSetTerms = document.querySelector(".newSetTerms");
        const termsTemplate = `<p>Term <input type="text" class="setTerm" placeholder="Enter term"/></p>
        <p>Definition <input type="text" class="setDefinition" placeholder="Enter definition"/></p>
        <button>Remove</button></<p>`;
        newSetTerms.innerHTML = termsTemplate;
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
const mainPage = new MainPageUI();
const addNewSetPage = new AddNewSetUI();
const localStore = new StorageCtrl();
const renderMainPageController = () => {
    console.log("render");
    const sets = localStore.getItemsFromStorage();
    if (sets.length > 0) {
        state.sets = sets;
    }
    return mainPage.render(state.sets);
}
const renderAddNewSetController = () => {

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
    localStore.deleteItemFromStorage(setId);
    const updatedSets = localStore.getItemsFromStorage();
    state.sets = updatedSets;
    mainPage.removeSet(setId);
    removeSetButtonClickHandler();
}

const complitedSet = (e) => {
    e.preventDefault();
    const setId = e.target.parentNode.dataset.id;
    const findedSet = state.sets.find(set => setId === set.id);
    const updatedSet = {
        ...findedSet,
        complited: true
    }
    localStore.updateItemStorage(updatedSet);
    const updatedSets = localStore.getItemsFromStorage();
    const sortedAndUpdatedSets = updatedSets.sort((item1, item2) => {
        return item1.complited - item2.complited;
    });
    localStore.storeItems(sortedAndUpdatedSets);
    state.sets = sortedAndUpdatedSets;
    mainPage.reorderSets(state.sets);
    complitedSetClickHandler();
}

const addTerms = () => {
    addTermsClickHandler();
    return addNewSetPage.addTerms();

}

const saveNewSet = () => {
    const term = document.querySelector(".setTerm").value;
    const definition = document.querySelector(".setDefinition").value;
    const name = document.querySelector(".setName").value;
    if (name) {
        console.log(term, definition, name);
        const newSet = { name, term, definition, complited: false, id: Math.floor(Math.random() * 500).toString() };

        console.log(state.sets);
        localStore.storeItem(newSet);
        location.hash = "/";
    } else {
        console.log("Error..");
    }
}


const removeSetButtonClickHandler = () => {
    const removeSetButtons = document.querySelectorAll(".removeSetButton");
    removeSetButtons.forEach(button => {
        button.addEventListener("click", removeSet);
    });
}
const complitedSetClickHandler = () => {
    const setItemElem = document.querySelectorAll(".setItem");
    setItemElem.forEach(element => {
        element.addEventListener("click", complitedSet);
    });
}

const addTermsClickHandler = () => {
    const addTermsButton = document.querySelector(".addTermsButton");
    addTermsButton.addEventListener("click", addTerms);
}
const saveNewSetClickHandler = () => {
    const saveNewSetButton = document.querySelector(".saveNewSetButton");
    saveNewSetButton.addEventListener("click", saveNewSet);
}
removeSetButtonClickHandler();
complitedSetClickHandler();
addTermsClickHandler();
saveNewSetClickHandler();