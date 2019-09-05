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
                        :src="img"
                        alt="Circle Image"
                        class="rounded-circle avatar"
                />
              </div>
              <div class="md-layout-item">
                <h4 class="title">Carla Hortensia</h4>
<!--                <h6 class="description">-->
<!--                  <i class="material-icons">my_location</i>Hong Kong-->
<!--                </h6>-->
              </div>
            </div>
            <div
                    class="md-layout-item md-layout md-gutter md-size-60 md-small-size-100 md-xsmall-size-100"
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
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" @click="go4Details" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" @click="go4Details" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" @click="go4Details" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" @click="go4Details" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" @click="go4Details" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" @click="go4Details" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded"  @click="go4Details" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
          </md-content>
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
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
          </md-content>
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
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
          </md-content>
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
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
            <md-card style="max-width: 250px;">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="Rounded Image" class="rounded" />
              </md-card-media>
              <md-card-content style="text-align: center;padding:0">
                <strong>Hiking Saturaday</strong><br />2019-09-09
              </md-card-content>
            </md-card>
          </md-content>
          <div class="space-50"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import requestAPI from "../plugins/request";

  function getUserEvents(userId, eventType) {
    requestAPI({
      url: "http://localhost:8080/api/user/" + eventType + "/" + userId,
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
            .then(res => {
              alert(JSON.stringify(this.userInfo) + " success " + JSON.stringify(res));
              console.log(res);
            })
            .catch(err => {
              alert(JSON.stringify(this.userInfo) + " error " + JSON.stringify(err));
              console.log(err);
            });
  }

  export default {
    name: "Mynet",
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
      this.userInfo = JSON.parse(localStorage.getItem("Authorization"));
      //request for all joint but not yet started events
      getUserEvents(this.userInfo.userId, "userJointComingEvents");
      //request for all interested but not joint events ????? recommendation
      getUserEvents(this.userInfo.userId, "userInterestEvents");
      //request for all events that you created
      getUserEvents(this.userInfo.userId, "userCreatedEvents");
    },
    methods: {
      go4Details(id) {
        this.$router.push({
          name: "eventInfo",
          params: { eventid: id}
        });
      }
    },
    data: () => ({
      events: [
        {
          img: require("@/assets/img/profile_city.jpg"),
          title: "Hiking Saturaday",
          time: "2019-09-09"
        },
        {
          img: require("@/assets/img/city-profile.jpg"),
          title: "Karaoke Night",
          time: "2019-09-12"
        }
      ]
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



