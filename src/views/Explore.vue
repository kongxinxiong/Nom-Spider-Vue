<template>
  <div class="wrapper">
    <parallax
            class="section page-header header-filter"
            :style="headerStyle"
    ></parallax>
    <div class="wrapper">
      <div class="main main-raised">
        <div class="section">
          <div class="container">
            <div class="md-layout md-gutter md-alignment-top-left">
              <div
                      class="md-layout-item md-layout md-gutter md-size-30 md-small-size-30 md-xsmall-size-100"
              >
                <div
                        class="md-layout-item md-gutter md-layout md-size-100 md-small-size-100 md-xsmall-size-100"
                >
                  <div class="md-layout-item md-size-45">
                    <img
                            :src="'http://localhost:8080/api/user/image/'+this.userInfo.photoURL"
                            alt="Circle Image"
                            class="rounded-circle"
                    />
                  </div>
                  <div class="md-layout-item">
                    <h4 class="info-title">{{ this.userInfo.name }}</h4>
                    <h6 class="description">
                      <i class="material-icons">my_location</i
                      > &nbsp;{{ this.userInfo.location }}
                    </h6>
                  </div>
                </div>
                <md-table v-model="ranking" md-fixed-header style="width: 100%;padding-top: 45px">

                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                    <md-table-cell
                            md-label="Rank"
                            md-sort-by="rank"
                            md-numeric
                    >{{ item.rank }}</md-table-cell
                    >
                    <md-table-cell md-label="Name" md-sort-by="name">{{
                      item.name
                      }}</md-table-cell>
                    <md-table-cell
                            md-label="Score"
                            md-sort-by="score"
                            md-numeric
                    >{{ item.score }}</md-table-cell
                    >
                  </md-table-row>
                </md-table>
              </div>
              <div
                      class="md-layout-item md-layout md-gutter md-size-70 md-small-size-70 md-xsmall-size-100"
              >
                <div
                        class="md-layout-item md-size-100 md-small-size-100 md-xsmall-size-100"
                >
                  <md-field
                          md-clearable
                          class="md-toolbar-section-end md-form-group md-gray"
                  >
                    <md-icon>search</md-icon>
                    <md-input
                            placeholder="Search by title..."
                            v-model="search"
                            @input="searchOnTable"
                    />
                  </md-field>
                </div>
                <div class="md-layout-item">
                  <div class="md-toolbar-section-end">
                    <md-button class="md-success md-round" @click="createEvent">
                      <md-icon>add</md-icon>
                      create event</md-button
                    >
                  </div>
                </div>
                <md-table v-model="searched" md-fixed-header style="width: 100%;padding-top: 10px">
                  <md-table-empty-state
                          md-label="No Events found"
                          md-description="Try a different search term or create a new Events."
                  >
                    <md-button class="md-success md-raised" @click="createEvent"
                    >Create New Event</md-button
                    >
                  </md-table-empty-state>
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                    <md-table-cell md-label="Event" md-sort-by="rank">
                      <div class="img-container">
                        <img
                                :src="'http://localhost:8080/api/event/image/' + item.photoURL"
                                @click="go4Details(item.id)"
                        />
                      </div>
                    </md-table-cell>
                    <md-table-cell md-label="Detail" md-sort-by="detail">
                      <p><strong>{{item.title}}</strong><br/>Date: {{item.startDate}}<br/>Location: {{item.location}}</p>
                      </md-table-cell>
                    <md-table-cell md-label="Action">

                      <md-button
                              class="md-sm  md-just-icon" v-if="!item.isFavorate"
                              @click="clickLike(item.id)"
                      ><md-icon>favorite</md-icon></md-button
                      >
                      <md-button
                              class="md-sm md-rose md-just-icon" v-else
                      ><md-icon>favorite</md-icon></md-button
                      >
                      <md-button
                              class="md-success md-sm" v-if="!item.isJoint"
                              @click="participant(item.id)"
                      >JOIN NOW</md-button
                      >
                      <md-button
                              class="md-sm" v-else
                      >JOINED</md-button
                      >
                    </md-table-cell>
                  </md-table-row>
                </md-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import requestAPI from "../plugins/request";
  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item =>
              item.title.toLowerCase().includes(term.toLowerCase())
      );
    }

    return items;
  };
  export default {
    name: "Explore",
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
    data: () => ({
      search: null,
      searched: [],
      ranking: [],
      events: [],
    }),
    methods: {
      searchOnTable() {
        this.searched = searchByName(this.events, this.search);
        console.log(this.searched);
      },
      createEvent() {
        this.$router.push("/editevent");
      },
      go4Details(id) {
        this.$router.push({
          path: "/eventInfo",
          query: { eventid: id}
        });
      },
      participant(eventid) {
        requestAPI({
          url: "http://localhost:8080/api/user/jointEvent/",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: {
            userID: this.userInfo.id,
            eventID: eventid
          }
        })
                .then(res => {
                  // alert(
                  //         JSON.stringify(this.userInfo) + " success " + JSON.stringify(res)
                  // );
                  // console.log(JSON.stringify(this.userInfo) + " success "+JSON.stringify(res));
                  this.$router.push({
                    path: "/eventInfo",
                    query: { eventid: eventid}
                  });
                  console.log(res);
                })
                .catch(err => {
                  // alert(
                  //         JSON.stringify(this.userInfo) + " error " + JSON.stringify(err)
                  // );
                  console.log(err);
                });
      },
      clickLike(eventid) {
        requestAPI({
          url: "http://localhost:8080/api/user/favorateEvent/",
          method: "POST",
          headers:{
            'Content-Type':'application/json'
          },
          body: {
            userID: this.userInfo.id,
            eventID: eventid
          }
        })
                .then(res => {
                  console.log(JSON.stringify(this.userInfo) + " success "+JSON.stringify(res));
                  this.$router.push({
                    path: "/eventInfo",
                    query: { eventid: eventid}
                  });
                })
                .catch(err => {
                  // alert(JSON.stringify(this.userInfo) + " "+ this.eventId +" error "+JSON.stringify(err));
                  console.log(err);
                });
      },
    },
    created: function() {
      this.userInfo = JSON.parse(localStorage.getItem("Authorization"));
      console.log(this.userInfo);
    },
    mounted() {
      requestAPI({
        url: "http://localhost:8080/api/user/userRanking/",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
              .then(res => {
                this.ranking = JSON.parse(JSON.stringify(res)).data;
              })
              .catch(err => {
                console.log(err);
              });
      requestAPI({
        url: "http://localhost:8080/api/user/comingEventsWithStatusAndPreferences/"+this.userInfo.id,
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
              .then(res => {
                this.events = JSON.parse(JSON.stringify(res)).data;
                this.searched = this.events;
                console.log(this.events);
              })
              .catch(err => {
                console.log(err);
              });
    }
  };
</script>

<style scoped>
  .section {
    padding-top: 15px;
  }
  .main {
    justify-content: center;
    align-items: center;
  }
  .description {
    color: #3c4858;
    display: flex;
    align-items: center;
  }
  .avatar {
    height: 80%;
    width: 80%;
  }
  .md-table-cell {
    white-space: pre;
  }
  .md-overlay {
    background: rgba(0, 0, 0, 0.05);
  }
</style>
