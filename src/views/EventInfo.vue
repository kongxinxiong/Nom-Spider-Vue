<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout md-gutter padding">
            <div class="md-layout-item md-size-40 md-small-size-100 ml-auto">
              <div class="avatar">
                <img
                  :src="
                    'http://localhost:8080/api/event/image/' + event.photoURL
                  "
                  class="img-raised rounded img-fluid"
                />
              </div>
            </div>
            <div class="md-layout-item md-size-40 md-small-size-100 mr-auto">
              <div class="description text-left">
                <h4 class="title"><span class="tim-note">Title</span></h4>
                <p>
                  <strong>{{ event.title }}</strong>
                </p>
                <h4 class="title"><span class="tim-note">Description</span></h4>
                <p>
                  <span class="tim-note">{{ event.description }}</span>
                </p>

                <h4 class="title"><span class="tim-note">Number</span></h4>
                <p>
                  <span class="tim-note"
                    >{{ attended }}/{{ event.maxNumber }}</span
                  >
                </p>
                <h4 class="title">
                  <span class="tim-note">Time &nbsp; & &nbsp; Location</span>
                </h4>
                <p>
                  <span class="tim-note"
                    >{{ event.startDate }} &nbsp; @ &nbsp;
                    {{ event.location }}</span
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-layout md-size-50">
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100 mr-auto">
              <h4 class="title">
                <span class="tim-note">Joiners:{{ attended }}</span>
              </h4>
              <md-content class="md-scrollbar"
                          style="overflow-x: auto; white-space: nowrap;width:100%;z-index: 5;background-color: rgba(0,0,0,0)">
                <md-avatar v-for="item in enrollment">
                  <img :src="'http://localhost:8080/api/user/image/'+item.username+'.jpg'"/>
                  <md-tooltip md-direction="bottom">{{item.name}}</md-tooltip>
                </md-avatar>
              </md-content>
            </div>
            <div
              class="md-layout-item md-size-40 md-small-size-100 mr-auto"
            ></div>
          </div>
          <div class="md-layout md-gutter" style="margin-top: 10px">
            <div class="md-layout-item md-size-50"></div>
            <div class="md-layout-item " style="justify-content: center">
              <md-button
                class="md-success"
                v-if="!isFinished"
                @click="participant"
                style="margin-right: 5px"
                >Join</md-button
              >
              <md-button
                      style="margin-right: 5px" v-else>Joined</md-button>
              <md-button
                      class="md-just-icon"
                      v-if="!isLiked"
                      @click="clickLike"
                      style="margin-bottom: 30px"
              >
                <md-icon>favorite</md-icon>
              </md-button>
              <md-button
                      class="md-just-icon md-rose"
                      v-if="isLiked"
                      @click="clickLike"
                      style="margin-bottom: 30px"
              >
                <md-icon>favorite</md-icon>
              </md-button>
            </div>
          </div>

<!--          <md-card>-->
<!--            <md-card-expand>-->
<!--              <md-card-expand-trigger>-->
<!--                <md-button class="md-icon-button md-simple">-->
<!--                  <md-icon>keyboard_arrow_down</md-icon>-->
<!--                </md-button>-->
<!--              </md-card-expand-trigger>-->
<!--              <md-card-expand-content>-->
<!--                <div class="md-layout md-gutter">-->
<!--                  <div class="md-layout-item md-size-10"></div>-->
<!--                  <div class="md-layout-item mx-auto md-small-size-100">-->
<!--                    <h4 class="title"><span class="tim-note">Moment</span></h4>-->
<!--                    <el-upload-->
<!--                      :show-file-list="false"-->
<!--                      accept=".png,jpg,jpeg"-->
<!--                      with-credentials-->
<!--                      name="file"-->
<!--                      :action="uploadImgUrl()"-->
<!--                      :on-error="uploadImgError"-->
<!--                      :on-success="uploadImgSuccess"-->
<!--                      :before-upload="beforImgUpload"-->
<!--                      enctype="multipart/form-data"-->
<!--                      :file-list="carousel"-->
<!--                    >-->
<!--                      <md-button class="md-success md-sm">Upload</md-button>-->
<!--                      &lt;!&ndash;                <div slot="tip" class="el-upload__tip">You can only upload required picture format</div>&ndash;&gt;-->
<!--                    </el-upload>-->
<!--                    <p>-->
<!--                      <br />-->
<!--                      <span class="tim-note"-->
<!--                        >Share you Moment within the Activity</span-->
<!--                      >-->
<!--                    </p>-->
<!--                    <md-card>-->
<!--                      <el-carousel trigger="click" :interval="5000">-->
<!--                        <el-carousel-item-->
<!--                          v-for="item in carousel"-->
<!--                          :key="item.image"-->
<!--                        >-->
<!--                          <h4 class="carousel-caption">-->
<!--                            <md-icon>location_on</md-icon>-->
<!--                            {{ item.title }}-->
<!--                          </h4>-->
<!--                          <img :src="item.image" alt="" />-->
<!--                        </el-carousel-item>-->
<!--                      </el-carousel>-->
<!--                    </md-card>-->
<!--                  </div>-->
<!--                  <div class="md-layout-item md-size-10"></div>-->
<!--                </div>-->
<!--              </md-card-expand-content>-->
<!--            </md-card-expand>-->
<!--          </md-card>-->
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
  bodyClass: "profile-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  mounted() {
    //request to get all the attendees for this event
    requestAPI({
      url: "http://localhost:8080/api/event/eventJointUsers/" + this.eventid,
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        this.enrollment = res.data;
        console.log(res.data);
        this.attended = this.enrollment.length;
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      });

    //get event-user status : joint or not
    requestAPI({
      url: "http://localhost:8080/api/user/userJointParticularEvents",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        userID: this.userInfo.id,
        eventID: this.eventid
      }
    })
      .then(res => {
        this.isFinished = res.data.status;
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      });

    //get event-user status : liked or not
    requestAPI({
      url: "http://localhost:8080/api/user/userInterestParticularEvents",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        userID: this.userInfo.id,
        eventID: this.eventid
      }
    })
      .then(res => {
        this.isLiked = res.data.status;
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      });
  },
  created: function() {
    this.eventid = this.$route.params.eventid;
    this.userInfo = JSON.parse(localStorage.getItem("Authorization"));

    //request to get all the detailed information of an event
    requestAPI({
      url: "http://localhost:8080/api/event/" + this.eventid,
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        this.event = JSON.parse(JSON.stringify(res)).data;
        console.log(JSON.stringify(this.event));
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      });
  },

  data() {
    return {
      attended: "",
      isLiked: false,
      isFinished: false,
      enrollment: [],
      event: [],
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
    uploadSectionFile(param) {
      var fileObj = param.file;
      console.log("uploadSectionFile-param:" + param + ";file:" + param.file);
      var xhr = createRequest({
        url: "/api/cc/json/mobile_tel_segment.htm",
        method: "POST"
      });
      sendFormRequest(xhr, { file: fileObj })
        .then(res => {
          console.log(res);
          this.$message({
            type: "success",
            message: res.data.msg
          });
        })
        .catch(err => {
          console.log(err);
          this.$message({
            type: "failed",
            message: err
          });
        });
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
      // let NewPage = "_empty" + "?time=" + new Date().getTime() / 500;
      // this.$router.push(NewPage);
      // this.$router.go(-1);
    },
    uploadImgSuccess(res) {
      console.log("uploadImgSuccess");
      console.log(JSON.stringify(res));
      // this.$notify.success();
      //在此处刷新当前界面
      // let NewPage = "_empty" + "?time=" + new Date().getTime() / 500;
      // this.$router.push(NewPage);
      // this.$router.go(-1);
    },
    beforImgUpload() {
      console.log("beforImgUpload");
    },
    submitUpload() {
      console.log("submitUpload");
    },

    getEventPics() {
      this.requestAPI({
        url: " http://localhost:8080/api/user/image/" + this.eventid,
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        body: this.eventid
      })
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(err => {
          console.log(JSON.stringify(err));
        });
    },
    //like request, add/remove record from DB
    clickLike() {
      this.isLiked = !this.isLiked;
      requestAPI({
        url: "http://localhost:8080/api/user/favorateEvent/",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          userID: this.userInfo.id,
          eventID: this.$route.params.eventid
        }
      })
        .then(res => {
          console.log(
            JSON.stringify(this.userInfo) + " success " + JSON.stringify(res)
          );
          console.log(res);
        })
        .catch(err => {
          console.log(
            JSON.stringify(this.userInfo) +
              " " +
              this.eventId +
              " error " +
              JSON.stringify(err)
          );
          console.log(err);
        });
    },
    //participant request, add or remove record from DB
    participant() {
      requestAPI({
        url: "http://localhost:8080/api/user/jointEvent/",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          userID: this.userInfo.id,
          eventID: this.eventid
        }
      })
        .then(res => {
          console.log(
            JSON.stringify(this.userInfo) + " success " + JSON.stringify(res)
          );
          console.log(res);
        })
        .catch(err => {
          console.log(
            JSON.stringify(this.userInfo) + " error " + JSON.stringify(err)
          );
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.section {
  padding: 0;
}
.padding {
  padding-top: 20px;
}
.title {
  margin: 0;
}
  .md-avatar{
    margin-right: 5px;
  }
</style>
