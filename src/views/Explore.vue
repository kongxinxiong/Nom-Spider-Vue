<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout md-gutter md-alignment-top-left">
          <div
            class="md-layout-item md-layout md-gutter md-size-33 md-small-size-33 md-xsmall-size-100"
          >
            <div
              class="md-layout-item md-gutter md-layout md-size-100 md-small-size-100 md-xsmall-size-100 main main-raised"
            >
              <div class="md-layout-item md-size-40">
                <img
                  :src="img"
                  alt="Circle Image"
                  class="rounded-circle avatar"
                />
              </div>
              <div class="md-layout-item">
                <h4 class="info-title">Carla Hortensia</h4>
                <h6 class="description">
                  <i class="material-icons">my_location</i>Hong Kong
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
              <md-field md-clearable class="md-toolbar-section-end md-form-group">
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
                <md-button class="md-primary md-round">
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
                <md-button class="md-primary md-raised"
                  >Create New Event</md-button
                >
              </md-table-empty-state>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Event" md-sort-by="rank">
                  <div class="img-container"><img :src="item.img" /></div>
                </md-table-cell>
                <md-table-cell md-label="Detail" md-sort-by="detail">{{
                  item.detail
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
    second:false,
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
        title: "Hiking Saturaday",
        detail:
          "Hiking Saturaday\n" +
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
          "Karaoke Night\n" +
          "Location: Hong Kong\n" +
          "Date: 20190909\n" +
          "Time: 3:00pm\n" +
          "Number of Participants: 30\n" +
          "Fees: Free"
      },
      {
        img: require("@/assets/img/profile_city.jpg"),
        title: "Hiking Saturaday",
        detail:
          "Hiking Saturaday\n" +
          "Location: Hong Kong\n" +
          "Date: 20190909\n" +
          "Time: 3:00pm\n" +
          "Number of Participants: 30\n" +
          "Fees: Free"
      },
      {
        img: require("@/assets/img/profile_city.jpg"),
        title: "Hiking Saturaday",
        detail:
          "Hiking Saturaday\n" +
          "Location: Hong Kong\n" +
          "Date: 20190909\n" +
          "Time: 3:00pm\n" +
          "Number of Participants: 30\n" +
          "Fees: Free"
      },
      {
        img: require("@/assets/img/profile_city.jpg"),
        title: "Hiking Saturaday",
        detail:
          "Hiking Saturaday\n" +
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
    }
  },
  created() {
    this.searched = this.events;
    this.userInfo=JSON.parse(localStorage.getItem('Authorization'));
    alert(JSON.stringify(this.userInfo))
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
.md-overlay{
  background: rgba(0,0,0,0.05);
}
</style>
