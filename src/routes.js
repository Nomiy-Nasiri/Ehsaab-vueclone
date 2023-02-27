import Home from "./pages/Home.vue";
import Store from "./pages/Store.vue";
import Cart from "./pages/Cart.vue";
export default [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/store",
    component: Store,
    name: "store",
  },
  {
    path: "/cart",
    component: Cart,
    name: "cart",
  },
];
