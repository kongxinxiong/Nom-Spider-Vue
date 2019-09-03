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
                <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <md-switch v-model="favorite" >&nbsp;MARK</md-switch>
            </div>
                <div class="avatar">
                <img :src="img" class="img-raised img-fluid" />
              </div>
              <h4 class="title"><span class="tim-note">Description</span></h4>

              <p>
                <span class="tim-note">{{event.description}}</span>
              </p>
            </div>
            <div class="md-layout-item md-size ">
              <div class="description text-center">
                <h4 class="title"><span class="tim-note">Title</span></h4>
                <p>
                  <span class="tim-note">{{ event.title }}</span>
                </p>
                <h4 class="title"><span class="tim-note">Enrollment</span></h4>
                <p>
                  <span class="tim-note"
                    >{{event.maxnumber}}</span
                  >
                </p>
                <h4 class="title">
                  <span class="tim-note">Time &nbsp; & &nbsp; Location</span>
                </h4>
                <p>
                  <span class="tim-note"
                    >{{event.startdate}} &nbsp; @ &nbsp; {{event.location}}</span
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
          <br />
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
                enctype="multipart/form-data"
                :file-list="carousel"
              >
                <md-button class="md-success md-sm">Upload</md-button>
<!--                <div slot="tip" class="el-upload__tip">You can only upload required picture format</div>-->
              </el-upload>
              <p>
                <br/>
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
            <div class="md-layout-item md-size-10"></div>
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
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  created: function() {
    this.eventid = this.$route.params.eventid;
    // eslint-disable-next-line no-undef
    this.changeDisabled(this.isDisabled) ;

    this.userInfo=JSON.parse(localStorage.getItem('Authorization'));
    // this.getEventPics();
    //
    // this.requestAPI({ url: "http://localhost:8080/api/event/" + this.eventid })
    //   .then(res => {
    //     // alert(JSON.stringify(res));
    //   })
    //   .catch(err => {
    //     // alert(JSON.stringify(err));
    //   });

  },
  data() {
    return {
      favorite: true,
      isDisabled:true,
      img: require("@/assets/img/faces/kendall.jpg"),
      event: {
        id: "",
        title: "Party",
        maxnumber: "30",
        location: "Shanghai Zhonghuan Square",
        description: "This is party desc",
        startdate: "2019-09-30",
        perferences: []
      },
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
    //trial 1
    uploadSectionFile(param){
      var fileObj = param.file;
      console.log("uploadSectionFile-param:"+param+";file:"+param.file);
      var xhr = createRequest({url: "/api/cc/json/mobile_tel_segment.htm", method: "POST"});
      sendFormRequest(xhr, {file: fileObj})
              .then(res => {
                console.log(res);
                this.$message({
                  type:'success',
                  message:res.data.msg
                });
              })
              .catch(err => {
                console.log(err);
                this.$message({
                  type:'failed',
                  message:err
                })
              })
    },
    //trial 2
    uploadImgUrl() {
      //上传的地址
      console.log("uploadImgUrl");
      return "http://localhost:8080/api/user/image/";
    },
    uploadImgError() {
      console.log("uploadImgError");
      //刷新当前页面，应该只在成功的时候调用，此处只是为了测试，应该注释
      let NewPage = "_empty" + "?time=" + new Date().getTime() / 500;
      this.$router.push(NewPage);
      this.$router.go(-1);
    },
    uploadImgSuccess(res,file) {
      console.log("uploadImgSuccess");
      this.$notify.success()
      //在此处刷新当前界面
      let NewPage = "_empty" + "?time=" + new Date().getTime() / 500;
      this.$router.push(NewPage);
      this.$router.go(-1);
    },
    beforImgUpload(file) {
      console.log("beforImgUpload");
    },
    submitUpload() {
      console.log("submitUpload");
    },
    changeDisabled(isDisabled) {
      alert("come to change to disable " +isDisabled);
      if(!isDisabled)
        this.isDisabled = true;
      alert("exit change to disable "+ this.isDisabled)

    },
    getEventPics(){
      alert("come to get pics")
      this.requestAPI({ url: " http://localhost:8080/api/user/image/" + this.eventid })
              .then(res => {
                // alert(JSON.stringify(res));
              })
              .catch(err => {
                // alert(JSON.stringify(err));
              });
    }
  }


};
</script>

<style scoped>
.section {
  padding: 0;
}
</style>
