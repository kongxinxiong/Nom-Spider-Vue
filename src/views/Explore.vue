<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout md-gutter md-alignment-top-left" style="margin-top: 100px">
          <div
            class="md-layout-item md-layout md-gutter md-size-33 md-small-size-33 md-xsmall-size-100"
          >
            <div
              class="md-layout-item md-gutter md-layout md-size-100 md-small-size-100 md-xsmall-size-100 main main-raised"
            >
              <div class="md-layout-item md-size-40">
                <img :src="'http://localhost:8080/api/user/image/'+this.userInfo.photoURL"
                  alt="Circle Image"
                  class="rounded-circle avatar"
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
            <md-table v-model="ranking" md-card md-fixed-header>
              <md-table-toolbar>
                <h4 class="card-title">Ranking</h4>
              </md-table-toolbar>

              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Rank" md-sort-by="rank" md-numeric>{{
                  item.rank
                }}</md-table-cell>
                <md-table-cell md-label="Name" md-sort-by="name">{{
                  item.name
                }}</md-table-cell>
                <md-table-cell md-label="Score" md-sort-by="score" md-numeric>{{
                  item.score
                }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
          <div
            class="md-layout-item md-layout md-gutter md-size-66 md-small-size-66 md-xsmall-size-100"
          >
            <div
              class="md-layout-item md-size-100 md-small-size-100 md-xsmall-size-100"
            >
              <md-field
                md-clearable
                class="md-toolbar-section-end md-form-group"
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
                <md-button class="md-primary md-round" @click="createEvent">
                  <md-icon>add</md-icon>
                  create event</md-button
                >
              </div>
            </div>
            <md-table v-model="searched" md-card md-fixed-header>
              <md-table-empty-state
                md-label="No Events found"
                md-description="Try a different search term or create a new Events."
              >
                <md-button class="md-primary md-raised" @click="createEvent"
                  >Create New Event</md-button
                >
              </md-table-empty-state>
              <md-table-row
                slot="md-table-row"
                slot-scope="{ item }"
              >
                <md-table-cell md-label="Event" md-sort-by="rank">
                  <div class="img-container">
                    <img
                      :src="
                        'http://localhost:8080/api/user/image/' + item.photoURL
                      "
                      @click="go4Details(item.id)"
                    />
                  </div>
                </md-table-cell>
                <md-table-cell md-label="Detail" md-sort-by="detail">{{
                  item.title
                }}</md-table-cell>
                <md-table-cell md-label="Action">
                  <md-button class="md-primary md-sm"
                    ><md-icon>plus_one</md-icon>JOIN NOW</md-button
                  >
                  <md-dialog-alert
                    :md-active.sync="second"
                    md-title="Post created!"
                    md-content="Your post <strong>Material Design is awesome</strong> has been created."
                  />
                  <md-button class="md-primary md-sm" @click="second = true"
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
  bodyClass: "explore-page",
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
    ranking: [],
    events: ["aaa"]
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
    }
  },
  created: function() {
    localStorage.setItem(
      "Authorization",
      "{\n" +
        '"id": 25,\n' +
        '"name": "mark",\n' +
        '"birthday": "2019-08-26T09:26:57.000+0000",\n' +
        '"location": null,\n' +
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
      url: "http://localhost:8080/api/comingEvents",
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
      url: "http://localhost:8080/api/user/userRanking",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        this.events = JSON.parse(JSON.stringify(res)).data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.section {
  padding: 0;
}
.main {
  display: flex;
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
