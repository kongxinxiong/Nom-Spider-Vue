<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <router-link to="/"><h3 class="md-title">Nom Hub</h3></router-link>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <md-list-item href="#/explore">
                <i class="material-icons">explore</i>
                <p>Explore</p>
              </md-list-item>

              <md-list-item href="#/mynet">
                <i class="material-icons">view_list</i>
                <p>My-Net</p>
              </md-list-item>

              <md-list-item href="#/profile">
                <i class="material-icons">account_circle</i>
                <p>Profile</p>
              </md-list-item>

              <li class="md-list-item">
                <a
                  href="#"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                  @click="readNotification"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">notifications</i>
                        <p>Notification</p>
                        <md-badge
                          :md-content="notificationNum"
                          v-if="hasNotification"
                        ></md-badge>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li v-for="event in events">
                          <a @click="go4Details(event.id)">
                            <i class="material-icons">access_time</i>
                            <p><strong>{{event.startdate}} {{event.title}}</strong></p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>

              <li class="md-list-item" v-if="!isLogin">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button class="md-success md-round" href="#/login"
                      >Sign In</md-button
                    >
                  </div>
                </a>
              </li>
              <li class="md-list-item" v-if="isLogin">
                <a
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down" class="profile-photo">
                      <div
                        class="profile-photo-small"
                        slot="title"
                        data-toggle="dropdown"
                      >
                        <img :src="img" alt="Circle Image" />
                      </div>
                      <ul class="dropdown-menu dropdown-menu-right">
                        <li>
                          <a href="#pablo" class="dropdown-item">Sign Out</a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
import requestAPI from "../plugins/request";
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
import { Badge } from "@/components";
export default {
  components: {
    MobileMenu,
    Badge
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    }
  },
  created() {
    this.userInfo = JSON.parse(localStorage.getItem("Authorization"));
    this.isLogin = localStorage.getItem("Authorization") != null;
    this.getNotification(this.userInfo.id);
    localStorage.setItem("readNotification", "false");
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
      isLogin: false,
      notificationNum: 11,
      events: [
        {
          title: "Hiking Saturday",
          startdate: "2019-09-09",
          id:1
        },
        {
          title: "Kakaro Night",
          startdate: "2019-09-15",
          id:2
        }
      ],
      read: false
    };
  },
  computed: {
    hasNotification() {
      console.log(this.read);
      return this.notificationNum > 0 && !(this.read === "true");
    }
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    },
    getNotification(userId) {
      requestAPI({
        url:
          "http://localhost:8080/api//user/userJoint7DaysComingEvents/" +
          userId,
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => {
          this.events = JSON.parse(JSON.stringify(res)).data;
          this.notificationNum = this.events.length;
        })
        .catch(err => {
          console.log(err);
        });
    },
    readNotification() {
      localStorage.setItem("readNotification", "true");
      this.read = localStorage.getItem("readNotification");
    },
    go4Details(id) {
      this.$router.push({
        name: "eventInfo",
        params: {eventid: id}
      });
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>

<style lang="scss" scoped>
.md-badge {
  display: inline-block;
  border-radius: 50%;
  padding: 4px 4px;
  text-transform: uppercase;
  font-size: 10px;
  color: #ffffff;
  font-weight: 500;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  width: 18px;
  height: 18px;
  margin-left: 5px;
}
.md-button.md-simple i,
.md-button.md-simple:hover i,
.md-button.md-simple:focus i,
.md-button.md-simple:active i,
.md-button.md-simple.active i,
.md-button.md-simple:active:focus i,
.md-button.md-simple:active:hover i,
.md-button.md-simple.active:focus i,
.md-button.md-simple.active:hover i,
.open > .md-button.md-simple.dropdown-toggle i,
.open > .md-button.md-simple.dropdown-toggle:focus i,
.open > .md-button.md-simple.dropdown-toggle:hover i,
.md-button.md-default.md-simple i,
.md-button.md-default.md-simple:hover i,
.md-button.md-default.md-simple:focus i,
.md-button.md-default.md-simple:active i,
.md-button.md-default.md-simple.active i,
.md-button.md-default.md-simple:active:focus i,
.md-button.md-default.md-simple:active:hover i,
.md-button.md-default.md-simple.active:focus i,
.md-button.md-default.md-simple.active:hover i,
.open > .md-button.md-default.md-simple.dropdown-toggle i,
.open > .md-button.md-default.md-simple.dropdown-toggle:focus i,
.open > .md-button.md-default.md-simple.dropdown-toggle:hover i {
  color: #ffffff !important;
}

.md-button.md-simple,
.md-button.md-simple:hover,
.md-button.md-simple:focus,
.md-button.md-simple:active,
.md-button.md-simple.active,
.md-button.md-simple:active:focus,
.md-button.md-simple:active:hover,
.md-button.md-simple.active:focus,
.md-button.md-simple.active:hover,
.open > .md-button.md-simple.dropdown-toggle,
.open > .md-button.md-simple.dropdown-toggle:focus,
.open > .md-button.md-simple.dropdown-toggle:hover,
.md-button.md-default.md-simple,
.md-button.md-default.md-simple:hover,
.md-button.md-default.md-simple:focus,
.md-button.md-default.md-simple:active,
.md-button.md-default.md-simple.active,
.md-button.md-default.md-simple:active:focus,
.md-button.md-default.md-simple:active:hover,
.md-button.md-default.md-simple.active:focus,
.md-button.md-default.md-simple.active:hover,
.open > .md-button.md-default.md-simple.dropdown-toggle,
.open > .md-button.md-default.md-simple.dropdown-toggle:focus,
.open > .md-button.md-default.md-simple.dropdown-toggle:hover {
  color: #ffffff !important;
}
</style>
