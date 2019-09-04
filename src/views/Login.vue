<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Login</h4>
              <p slot="description" class="description">Welcome to Nom Hub</p>
              <md-field class="md-form-group md-green" slot="inputs">
                <md-icon>person_outline</md-icon>
                <label>username/email</label>
                <md-input v-model="userInfo.username"></md-input>
              </md-field>
              <md-field class="md-form-group md-green" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="userInfo.password"></md-input>
              </md-field>
              <p slot="inputs">
                Don't have an account?
                <router-link to="/signup">
                  sign up
                </router-link>
              </p>
              <md-button slot="footer" class="md-simple md-success md-lg" @click="signin">
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
  import {mapMutations} from 'vuex'
import { LoginCard } from "@/components";
import requestAPI from "../plugins/request";

export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data: () => ({
            userInfo: {
              username: null,
              email: null,
              password: null
            },
            userToken:''
  }
  ),
  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile_city.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    ...mapMutations(['changeLogin']),
    signin(){
      requestAPI({
        url: "http://localhost:8080/api/user/login",
        method: "POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: this.userInfo
      })
              .then(res => {
                if(res.data==null){
                alert("please input correct username and password");}
                else{
                this.userToken=res.data;
                // alert(JSON.stringify(this.userToken))
                // this.changeLogin(this.userToken);
                    localStorage.setItem('Authorization',JSON.stringify(this.userToken));
                this.$router.push('/explore');}
                console.log(res);
              })
              .catch(err => {
                alert(JSON.stringify(this.userInfo) + " error "+JSON.stringify(err));
                console.log(err);
              });
    }
  }
};
</script>

<style lang="css" scoped>
h4 {
  line-height: 3em;
}
</style>
