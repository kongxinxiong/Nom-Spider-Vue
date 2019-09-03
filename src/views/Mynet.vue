<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-layout md-gutter md-size-50 md-small-size-100 md-xsmall-size-100"
          >
            <div class="md-layout-item md-size-40">
              <img
                :src="img"
                alt="Circle Image"
                class="rounded-circle avatar"
              />
            </div>
            <div class="md-layout-item">
              <h3 class="title">Carla Hortensia</h3>
              <h6 class="description">
                <i class="material-icons">my_location</i>Hong Kong
              </h6>
            </div>
          </div>
          <div
            class="md-layout-item md-layout md-gutter md-size-50 md-small-size-100 md-xsmall-size-100"
          >
            <div class="md-layout-item">
              <md-button class="md-rose md-round">posted: 20</md-button>
            </div>
            <div class="md-layout-item ">
              <md-button class="md-rose md-round">Joined: 25</md-button>
            </div>
            <div class="md-layout-item">
              <md-button class="md-rose md-round" style="align-items: center"
                >Score: 305</md-button
              >
            </div>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item" style="max-height: 300px">
            <md-card style="max-width: 300px" @click="go4Details">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="People" @click="go4Details"/>
              </md-card-media>
              <md-card-content>
                aaa
              </md-card-content>
            </md-card>
            <md-card style="max-width: 300px" @click="go4Details">
              <md-card-media md-ratio="16:9">
                <img :src="header" alt="People" @click="go4Details"/>
              </md-card-media>
              <md-card-content>
                aaa
              </md-card-content>
            </md-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import requestAPI from "../plugins/request";

function getUserEvents(userId,eventType) {
  requestAPI({
    url: "http://localhost:8080/api/user/"+eventType+"/"+ userId,
    method: "POST",
    headers:{
      'Content-Type':'application/json'
    }
  })
          .then(res => {
            alert(JSON.stringify(this.userInfo) + " success "+JSON.stringify(res));
            console.log(res);
          })
          .catch(err => {
            alert(JSON.stringify(this.userInfo) + " error "+JSON.stringify(err));
            console.log(err);
          });
}
  export default {
  name: "Mynet",
  bodyClass: "login-page",
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
  created: function() {
    this.userInfo=JSON.parse(localStorage.getItem('Authorization'));
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  created() {
    //request for all joint but not yet started events
    getUserEvents(this.userInfo.userId, "userJointEvents");
    //request for all interested but not joint events ????? recommendation
    getUserEvents(this.userInfo.userId, "userInterestEvents");
    //request for all events that you created
    getUserEvents(this.userInfo.userId, "userCreatedEvents");
  },
    methods:{
      go4Details(){
        this.$router.push({name:"eventInfo", params:{eventid:this.eventid}})
      }
    }
};
</script>

<style scoped>
.description {
  color: #ffffff;
  display: flex;
  align-items: center;
}
</style>
