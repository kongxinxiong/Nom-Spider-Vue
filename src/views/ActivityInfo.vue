<template>
  <div class="wrapper">
    <parallax
            class="section page-header header-filter"
            :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-15"></div>
            <div class="md-layout-item md-size-30">
              <br />
              <div class="avatar">
                <img :src="img" class="img-raised img-fluid" />
              </div>
              <h4 class="title"><span class="tim-note">Description</span></h4>
              <p>
                <span class="tim-note">Paragraph</span>
                This is the activity Description
              </p>
            </div>
            <div class="md-layout-item md-size ">
              <div class="description text-center">
                <h4 class="title"><span class="tim-note">Title</span></h4>
                <p>
                  <span class="tim-note">{{activityTitle}}</span>
                </p>
                <h4 class="title"><span class="tim-note">Enrollment</span></h4>
                <p>
                  <span class="tim-note"
                  >This is the activity Enrollment/Total</span
                  >
                </p>
                <h4 class="title">
                  <span class="tim-note">Time/Location</span>
                </h4>
                <p>
                  <span class="tim-note"
                  >This is the activity Time and Location</span
                  >
                </p>
                <br /><br />
                <md-button
                        class="md-success"
                        id="enroll"
                        v-bind:disabled="isDisabled"
                >Enroll
                  <md-tooltip md-direction="bottom">
                    Finished/Full
                  </md-tooltip></md-button
                >
              </div>
            </div>
            <div class="md-layout-item md-size-10"></div>
          </div>
          <br/>
          <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-15"></div>
          <div class="md-layout-item mx-auto md-small-size-100">
              <h4 class="title"><span class="tim-note">Moment</span></h4>
            <el-upload
                    :show-file-list="false"
                    accept=".png,jpg,jpeg"
                    with-credentials
                    name="file"
                    :action="uploadImgUrl()"
                    :on-error="uploadImgError"
                    :on-success="uploadImgSuccess"
                    :before-upload="beforImgUpload"
                    enctype="multipart/form-data">
              <md-button class="md-success md-sm" >Upload</md-button>
            </el-upload>
            <p>
                <span class="tim-note"
                >Share you Moment within the Activity</span
                >
            </p>
              <md-card>
                <el-carousel trigger="click" :interval="5000">
                  <el-carousel-item v-for="item in carousel" :key="item.image">
                    <h4 class="carousel-caption">
                      <md-icon>location_on</md-icon>
                      {{ item.title }}
                    </h4>
                    <img :src="item.image" alt="" />
                  </el-carousel-item>
                </el-carousel>
              </md-card>
            </div>
          <div class="md-layout-item md-size-10">
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import requestAPI from "../plugins/request";
import { createRequest, sendFormRequest } from "../plugins/request";
import { setTimeout } from "timers";

  export default {
  name: "ActivityInfo",
  components: {
    requestAPI,
    createRequest,
    sendFormRequest,
    setTimeout
  },
  bodyClass: "login-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile_city.jpg")
    },
    isDisabled: {
      // 是否可点击
      type: Boolean,
      default: false
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/kendall.jpg")
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
   this.eventid = this.$route.params.eventid;
    requestAPI({url: "http://localhost:8080/api/event/"+this.eventid})
            .then(res => {
              alert(JSON.stringify(res));

            })
            .catch(err => {
              alert(JSON.stringify(err));
            });
    },
  data() {
    return {
      activityTitle:"",
      carousel: [
        {
          image: require("@/assets/img/nature-2.jpg"),
          title: "Somewhere Beyond, United States"
        },
        {
          image: require("@/assets/img/nature.jpg"),
          title: "Yellowstone National Park, United States"
        },
        {
          image: require("@/assets/img/nature-3.jpg"),
          title: "National Park, United States"
        }
      ]
    };
  },
  methods: {
    changeDisabled() {
      if (this.isDisabled) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
    uploadImgUrl() {//上传的地址
      console.log("uploadImgUrl");
      return "";
    },
    uploadImgError() {
      console.log("uploadImgError");
      //刷新当前页面，应该只在成功的时候调用，此处只是为了测试，应该注释
      let NewPage = '_empty' + '?time=' + new Date().getTime()/500;
      this.$router.push(NewPage);
      this.$router.go(-1);
    },
    uploadImgSuccess() {
      console.log("uploadImgSuccess");
      //在此处刷新当前界面
      let NewPage = '_empty' + '?time=' + new Date().getTime()/500;
      this.$router.push(NewPage);
      this.$router.go(-1);
    },
    beforImgUpload() {
      console.log("beforImgUpload");
    },
    submitUpload(){
      console.log("submitUpload");
    }
  }
};
</script>

<style scoped>
  .section {
    padding: 0;
  }
</style>
