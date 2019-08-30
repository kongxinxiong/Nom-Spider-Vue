<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Welcome to <br/> Nom Hub</h1>
            <h4>
              Create your events and make friends with others. Enjoy you life!
            </h4>
          </div>
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Login</h4>
              <p slot="description" class="description">Welcome to Nom Hub</p>
              <md-field class="md-form-group md-green" slot="inputs">
                <md-icon>person_outline</md-icon>
                <label>username/email</label>
                <md-input v-model="username"></md-input>
              </md-field>
              <md-field class="md-form-group md-green" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <p slot="inputs" class="">Don't have an account?
                <router-link to="/signup">
                  sign up
                </router-link>
              </p>
              <md-button slot="footer" class="md-simple md-success md-lg">
                SIGN IN
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg")
    },
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
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

<style lang="scss" scoped></style>
