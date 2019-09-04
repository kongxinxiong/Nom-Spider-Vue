import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Explore from "./views/Explore";
import Mynet from "./views/Mynet";
import Signup from "./views/Signup";
import ActivityInfo from "./views/EventInfo";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import EditEvent from "./views/EditEvent";
Vue.use(Router);
Vue.use(ElementUI);

const router = new Router({
  routes: [
    {
      path: "/index",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/signup",
      name: "signup",
      components: { default: Signup, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/editevent",
      name: "editevent",
      components: {
        default: EditEvent,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/explore",
      name: "explore",
      components: { default: Explore, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/mynet",
      name: "mynet",
      components: { default: Mynet, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/eventInfo",
      name: "eventInfo",
      components: {
        default: ActivityInfo,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" || to.path === "/signup") {
    next();
  } else {
    let token = localStorage.getItem("Authorization");

    if (token === null || token === "") {
      next("/login");
    } else {
      next();
    }
  }
});

export default router;
