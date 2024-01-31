import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const render = (target, content) => {
   target.innerHTML = content()
}

export { render, router };