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
                      >{{ this.userInfo.location }}
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
                    <md-table-cell md-label="Detail" md-sort-by="detail">{{
                      item.title
                      }}</md-table-cell>
                    <md-table-cell md-label="Action">
                      <md-button
                              class="md-success md-sm"
                              @click="participant(item.id)"
                      ><md-icon>plus_one</md-icon>JOIN NOW</md-button
                      >
                      <md-dialog-alert
                              :md-active.sync="second"
                              md-title="Favorite created!"
                              md-content="Your favorite <strong> Interest </strong> has been created."
                      />
                      <md-button
                              class="md-warning md-sm"
                              @click="clickLike(item.id)"
                      ><md-icon>favorite</md-icon>Add To favorite</md-button
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
      second: false,
      ranking: [
        {
          rank: 1,
          name: "Shawna Dubbin",
          score: 314
        },
        {
          rank: 2,
          name: "Odette Demageard",
          score: 301
        },
        {
          rank: 3,
          name: "Vera Taleworth",
          score: 299
        },
        {
          rank: 4,
          name: "Lonnie Izkovitz",
          score: 288
        },
        {
          rank: 5,
          name: "Thatcher Stave",
          score: 277
        },
        {
          rank: 6,
          name: "Karim Chipping",
          score: 266
        },
        {
          rank: 7,
          name: "Helge Holyard",
          score: 255
        },
        {
          rank: 8,
          name: "Rod Titterton",
          score: 244
        },
        {
          rank: 9,
          name: "Gawen Applewhite",
          score: 189
        },
        {
          rank: 10,
          name: "Nero Mulgrew",
          score: 132
        }
      ],
      events: [
        {
          img: require("@/assets/img/profile_city.jpg"),
          title: "Hiking Saturaday\n",
          detail:
                  "Location: Hong Kong\n" +
                  "Date: 20190909\n" +
                  "Time: 3:00pm\n" +
                  "Number of Participants: 30\n" +
                  "Fees: Free"
        },
        {
          img: require("@/assets/img/profile_city.jpg"),
          title: "Karaoke Night",
          detail:
                  "Location: Hong Kong\n" +
                  "Date: 20190909\n" +
                  "Time: 3:00pm\n" +
                  "Number of Participants: 30\n" +
                  "Fees: Free"
        },
        {
          img: require("@/assets/img/profile_city.jpg"),
          title: "Karaoke Night",
          detail:
                  "Location: Hong Kong\n" +
                  "Date: 20190909\n" +
                  "Time: 3:00pm\n" +
                  "Number of Participants: 30\n" +
                  "Fees: Free"
        },
        {
          img: require("@/assets/img/profile_city.jpg"),
          title: "Karaoke Night",
          detail:
                  "Location: Hong Kong\n" +
                  "Date: 20190909\n" +
                  "Time: 3:00pm\n" +
                  "Number of Participants: 30\n" +
                  "Fees: Free"
        },
        {
          img: require("@/assets/img/profile_city.jpg"),
          title: "Karaoke Night",
          detail:
                  "Location: Hong Kong\n" +
                  "Date: 20190909\n" +
                  "Time: 3:00pm\n" +
                  "Number of Participants: 30\n" +
                  "Fees: Free"
        },
        {
          img: require("@/assets/img/profile_city.jpg"),
          title: "Karaoke Night",
          detail:
                  "Location: Hong Kong\n" +
                  "Date: 20190909\n" +
                  "Time: 3:00pm\n" +
                  "Number of Participants: 30\n" +
                  "Fees: Free"
        },
        {
          img: require("@/assets/img/profile_city.jpg"),
          title: "Karaoke Night",
          detail:
                  "Location: Hong Kong\n" +
                  "Date: 20190909\n" +
                  "Time: 3:00pm\n" +
                  "Number of Participants: 30\n" +
                  "Fees: Free"
        },
        {
          img: require("@/assets/img/profile_city.jpg"),
          title: "Karaoke Night",
          detail:
                  "Location: Hong Kong\n" +
                  "Date: 20190909\n" +
                  "Time: 3:00pm\n" +
                  "Number of Participants: 30\n" +
                  "Fees: Free"
        },
        {
          img: require("@/assets/img/profile_city.jpg"),
          title: "Karaoke Night",
          detail:
                  "Location: Hong Kong\n" +
                  "Date: 20190909\n" +
                  "Time: 3:00pm\n" +
                  "Number of Participants: 30\n" +
                  "Fees: Free"
        },
        {
          img: require("@/assets/img/profile_city.jpg"),
          title: "Karaoke Night",
          detail:
                  "Location: Hong Kong\n" +
                  "Date: 20190909\n" +
                  "Time: 3:00pm\n" +
                  "Number of Participants: 30\n" +
                  "Fees: Free"
        },
        {
          img: require("@/assets/img/profile_city.jpg"),
          title: "Karaoke Night",
          detail:
                  "Location: Hong Kong\n" +
                  "Date: 20190909\n" +
                  "Time: 3:00pm\n" +
                  "Number of Participants: 30\n" +
                  "Fees: Free"
        },
        {
          img: require("@/assets/img/profile_city.jpg"),
          title: "Karaoke Night",
          detail:
                  "Location: Hong Kong\n" +
                  "Date: 20190909\n" +
                  "Time: 3:00pm\n" +
                  "Number of Participants: 30\n" +
                  "Fees: Free"
        }
      ]
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
          name: "eventInfo",
          params: { eventid: id}
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
                  alert(
                          JSON.stringify(this.userInfo) + " success " + JSON.stringify(res)
                  );
                  console.log(res);
                })
                .catch(err => {
                  alert(
                          JSON.stringify(this.userInfo) + " error " + JSON.stringify(err)
                  );
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
                  this.second = true;
                })
                .catch(err => {
                  alert(JSON.stringify(this.userInfo) + " "+ this.eventId +" error "+JSON.stringify(err));
                  console.log(err);
                });
      },
    },
    created: function() {
      localStorage.setItem(
              "Authorization",
              "{\n" +
              '"id": 25,\n' +
              '"name": "Wu Dan",\n' +
              '"birthday": "2019-08-26T09:26:57.000+0000",\n' +
              '"location": "Shanghai",\n' +
              '"username": null,\n' +
              '"password": null,\n' +
              '"email": null,\n' +
              '"photoURL": null\n' +
              "}"
      );
      this.userInfo = JSON.parse(localStorage.getItem("Authorization"));
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
        url: "http://localhost:8080/api/comingEvents",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
              .then(res => {
                this.events = JSON.parse(JSON.stringify(res)).data;
                this.searched = this.events;
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
