<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="space-50"></div>
          <div class="md-layout">
            <div
              class="md-layout-item md-layout md-gutter md-size-40 md-small-size-100 md-xsmall-size-100"
            >
              <div class="md-layout-item md-size-30">
                <img
                  :src="
                    'http://localhost:8080/api/user/image/' +
                      this.userInfo.photoURL
                  "
                  alt="Circle Image"
                  class="rounded-circle avatar"
                />
              </div>
              <div class="md-layout-item">
                <h4 class="title">{{ this.userInfo.name }}</h4>
                <!--                <h6 class="description">-->
                <!--                  <i class="material-icons">my_location</i>Hong Kong-->
                <!--                </h6>-->
              </div>
            </div>
            <div
              class="md-layout-item md-layout md-gutter md-size-60 md-small-size-100 md-xsmall-size-100"
            >
              <div class="md-layout-item">
                <md-button class="md-rose md-round"
                  >hosted: {{ this.hostedNum }}</md-button
                >
              </div>
              <div class="md-layout-item ">
                <md-button class="md-rose md-round"
                  >Joined: {{ this.joinedNum }}</md-button
                >
              </div>
              <div class="md-layout-item">
                <md-button class="md-rose md-round" style="align-items: center"
                  >Score: {{ this.score }}</md-button
                >
              </div>
            </div>
          </div>
          <div class="space-50"></div>
          <div class="md-layout">
            <div class="md-layout-item">
              <h3 class="md-title">Upcoming Events</h3>
            </div>
          </div>
          <md-content
            class="md-scrollbar md-card main-raised"
            style="overflow-x: auto; white-space: nowrap;width:100%;z-index: 5;background-color: rgba(0,0,0,0)"
          >
            <event-card v-for="item in upcoming">
              <img
                :src="'http://localhost:8080/api/event/image/' + item.photoURL"
                alt="Rounded Image"
                class="rounded"
                @click="go4Details(item.id)"
                slot="image"
              />
              <p slot="description">
                <strong>{{ item.title }}</strong
                ><br />{{ item.startdate }}
              </p>
            </event-card>
          </md-content>
          <div class="space-50"></div>
          <div class="md-layout">
            <div class="md-layout-item">
              <h3 class="md-title">Favorite Events</h3>
            </div>
          </div>
          <md-content
            class="md-scrollbar md-card main-raised"
            style="overflow-x: auto; white-space: nowrap;width:100%;z-index: 5;background-color: rgba(0,0,0,0)"
          >
            <event-card v-for="item in favorite">
              <img
                :src="'http://localhost:8080/api/event/image/' + item.photoURL"
                alt="Rounded Image"
                class="rounded"
                @click="go4Details(item.id)"
                slot="image"
              />
              <p slot="description">
                <strong>{{ item.title }}</strong
                ><br />{{ item.startdate }}
              </p>
            </event-card>
          </md-content>
          <div class="space-50"></div>
          <div class="md-layout">
            <div class="md-layout-item">
              <h3 class="md-title">Hosted Events</h3>
            </div>
          </div>
          <md-content
            class="md-scrollbar md-card main-raised"
            style="overflow-x: auto; white-space: nowrap;width:100%;z-index: 5;background-color: rgba(0,0,0,0)"
          >
            <event-card v-for="item in hosted">
              <img
                :src="'http://localhost:8080/api/event/image/' + item.photoURL"
                alt="Rounded Image"
                class="rounded"
                @click="go4Details(item.id)"
                slot="image"
              />
              <p slot="description">
                <strong>{{ item.title }}</strong
                ><br />{{ item.startdate }}
              </p>
            </event-card>
          </md-content>
          <div class="space-50"></div>
          <div class="md-layout">
            <div class="md-layout-item">
              <h3 class="md-title">Attended Events</h3>
            </div>
          </div>
          <md-content
            class="md-scrollbar md-card main-raised"
            style="overflow-x: auto; white-space: nowrap;width:100%;z-index: 5;background-color: rgba(0,0,0,0)"
          >
            <event-card v-for="item in attended">
              <img
                :src="'http://localhost:8080/api/event/image/' + item.photoURL"
                alt="Rounded Image"
                class="rounded"
                @click="go4Details(item.id)"
                slot="image"
              />
              <p slot="description">
                <strong>{{ item.title }}</strong
                ><br />{{ item.startdate }}
              </p>
            </event-card>
          </md-content>
          <div class="space-50"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import requestAPI from "../plugins/request";
import EventCard from "../components/cards/EventCard";


export default {
  name: "Mynet",
  components: { EventCard },
  bodyClass: "profile-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile_city.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  created() {
    // localStorage.setItem(
    //   "Authorization",
    //   "{\n" +
    //     '"id": 39,\n' +
    //     '"name": "Wu Dan",\n' +
    //     '"birthday": "2019-08-26T09:26:57.000+0000",\n' +
    //     '"location": "Shanghai",\n' +
    //     '"username": null,\n' +
    //     '"password": null,\n' +
    //     '"email": null,\n' +
    //     '"photoURL": null\n' +
    //     "}"
    // );
    this.userInfo = JSON.parse(localStorage.getItem("Authorization"));
    //request for all joint but not yet started events
    this.getUserEvents(this.userInfo.id, "userJointComingEvents", 1);
    //request for all interested but not joint events ????? recommendation
    this.getUserEvents(this.userInfo.id, "userInterestEvents", 2);
    //request for all events that you created
    this.getUserEvents(this.userInfo.id, "userCreatedEvents", 3);
    //request for all evetns that you've ever attened
    this.getUserEvents(this.userInfo.id, "userJointHistoryEvents", 4);
    this.getUserScore(this.userInfo.id);
  },
  methods: {
    go4Details(id) {
      this.$router.push({
        path: "/eventInfo",
        query: { eventid: id }
      });
    },
    getUserEvents(userId, eventType, returnType) {
      requestAPI({
        url: "http://localhost:8080/api/user/" + eventType + "/" + userId,
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
              .then(res => {
                let temp = JSON.parse(JSON.stringify(res)).data;
                // console.log(temp);
                // console.log(returnType);
                console.log(this.upcoming);
                switch (returnType) {
                  case 1:
                    this.upcoming = temp;
                    break;
                  case 2:
                    this.favorite = temp;
                    break;
                  case 3:
                    this.hosted = temp;
                    break;
                  case 4:
                    this.attended = temp;
                    break;
                }
              })
              .catch(err => {
                console.log(err);
              });
    },
    getUserScore(userId) {
      requestAPI({
        url: "http://localhost:8080/api/user/userScore/" + userId,
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
              .then(res => {
                this.score = JSON.parse(JSON.stringify(res)).data.score;
                this.joinedNum = this.upcoming.length + this.attended.length;
                this.hostedNum = this.hosted.length;
              })
              .catch(err => {
                console.log(err);
              });
    }
  },
  data: () => ({
    events: [
      {
        img: require("@/assets/img/profile_city.jpg"),
        title: "Hiking Saturaday",
        startdate: "2019-09-09"
      },
      {
        img: require("@/assets/img/city-profile.jpg"),
        title: "Karaoke Night",
        startdate: "2019-09-12"
      },
      {
        img: require("@/assets/img/city-profile.jpg"),
        title: "Karaoke Night",
        startdate: "2019-09-12"
      },
      {
        img: require("@/assets/img/city-profile.jpg"),
        title: "Karaoke Night",
        startdate: "2019-09-12"
      },
      {
        img: require("@/assets/img/city-profile.jpg"),
        title: "Karaoke Night",
        startdate: "2019-09-12"
      },
      {
        img: require("@/assets/img/city-profile.jpg"),
        title: "Karaoke Night",
        startdate: "2019-09-12"
      }
    ],
    upcoming: [],
    favorite: [],
    hosted: [],
    attended: [],
    hostedNum: 0,
    joinedNum: 0,
    score: 0
  })
};
</script>
<style lang="scss" scoped>
.description {
  color: #ffffff;
  display: flex;
  align-items: center;
}
.md-card {
  margin: 0 10px 0 0;
}
.vertical-center {
  display: flex;
  align-items: center;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.md-checkbox,
.md-radio {
  display: flex;
  margin: 0;
  margin-bottom: 0.5rem;
}
.section {
  padding: 0;
}
.profile-tabs /deep/ {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
