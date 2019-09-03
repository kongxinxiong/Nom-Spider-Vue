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
            <md-card style="max-width: 300px">
              <md-card-media md-ratio="16:9">
                <img :src="img" alt="People" />
              </md-card-media>
              <md-card-content>
                aaa
              </md-card-content>
            </md-card>
            <md-card style="max-width: 300px">
              <md-card-media md-ratio="16:9">
                <img :src="header" alt="People" />
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
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
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
