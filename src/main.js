import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import AboutPage from "./pages/About";
import { render, router } from "./utils";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import ProductPage from "./pages/Products";

const app = document.querySelector('#app');

router.on("/", () => render(app, HomePage));
router.on("/about", () => render(app, AboutPage));
router.on("/products", () => render(app, ProductPage));
router.notFound(() => render(app, NotFoundPage));
router.resolve();
