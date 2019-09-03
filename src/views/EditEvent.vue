<template>
    <div class="wrapper">
        <parallax
                class="section page-header header-filter"
                :style="headerStyle"
        ></parallax>
        <div class="main main-raised">
            <div class="section profile-content">
                <div class="container">
                    <div class="md-layout">
                        <div  class="md-layout-item md-white md-size-100 md-small-size-100 md-xsmall-size-100 md-medium-size-100 mx-auto">
                            <!--                        <md-button class="md-primary md-block md-success">-->
                            <!--                            New Event-->
                            <!--                        </md-button>-->
                            <div class="text-center">
                                <h2>
                                    New Event
                                </h2>
                            </div>
                            <div class="space-50"></div>
                            <p  class="description">Please input follow information to create your own Event!</p>
                        </div>

                        <div  class="md-layout-item md-white md-size-100 md-small-size-100 md-xsmall-size-100 md-medium-size-100 mx-auto">
                            <md-field class="md-form-group md-green" slot="inputs">
                                <md-icon>person_outline</md-icon>
                                <label>TITLE</label>
                                <md-input v-model="event.title"></md-input>
                                <span class="md-helper-text">Please input the shot description of your event</span>
                            </md-field>

                        </div>
                        <div  class="md-layout-item md-white md-size-100 md-small-size-100 md-xsmall-size-100 md-medium-size-100 mx-auto">
                            <md-field class="md-form-group md-green" slot="inputs">
                                <!--                                <md-icon>person_outline</md-icon>-->

                                <!--                                <label>PARTICIPANTS LIMIT</label>-->
                                <i class="fas fa-users"></i>
                                <md-input v-model="event.maxnumber" placeholder="PARTICIPANTS LIMIT"></md-input>
                                <span class="md-helper-text">Please input the number of participants</span>
                            </md-field>
                        </div>
<!--                                                <div  class="md-layout-item md-white md-size-50 md-small-size-50 md-xsmall-size-100 md-medium-size-50 mx-auto">-->
<!--                                                <md-field class="md-form-group md-green" slot="inputs">-->
<!--                                                    <label>image</label>-->
<!--                                                    <md-file v-model="image">-->
<!--                                                    </md-file>-->
<!--                                                    <span class="md-helper-text">You can upload more image files</span>-->
<!--                                                </md-field>-->
<!--                                                </div>-->
                        <div  class="md-layout-item md-white md-size-100 md-small-size-100 md-xsmall-size-100 md-medium-size-100 mx-auto">

                            <md-checkbox slot="inputs" v-model="event.perferences" value=1>Game</md-checkbox>
                            <md-checkbox slot="inputs" v-model="event.perferences" value=2>Spots</md-checkbox>
                            <md-checkbox slot="inputs" v-model="event.perferences" value=3>Travel</md-checkbox>
                            <md-checkbox slot="inputs" v-model="event.perferences" value=4>Hiking</md-checkbox>
                            <md-checkbox slot="inputs" v-model="event.perferences" value=5>Movie</md-checkbox>
                            <md-checkbox slot="inputs" v-model="event.perferences" value=6>Reading</md-checkbox>
                            <p  class="description">Please choose subject of your event!</p>
                        </div>

                        <div class="md-layout-item md-white md-size-50 md-small-size-100 md-xsmall-size-100 md-medium-size-50 mx-auto">
                            <md-datepicker v-model="event.startdate">
                                <label>Select date</label>
                            </md-datepicker>
                        </div>
                        <div class="md-layout-item md-white md-size-50 md-small-size-100 md-xsmall-size-100 md-medium-size-50 mx-auto">
                            <md-field class="md-green">
                                <md-icon>explore</md-icon>
                                <label>Location</label>
                                <md-select v-model="event.location" name="location" id="location">
                                    <md-option value="Shang Hai">&nbsp;&nbsp; &nbsp;&nbsp; Shang Hai</md-option>
                                    <md-option value="Bei Jing"> &nbsp;&nbsp; &nbsp;&nbsp; Bei Jing</md-option>
                                    <md-option value="Tokyo"> &nbsp;&nbsp; &nbsp;&nbsp; Tokyo</md-option>
                                    <md-option value="Hong Kong"> &nbsp;&nbsp; &nbsp;&nbsp; Hong Kong</md-option>
                                    <md-option value="New York"> &nbsp;&nbsp; &nbsp;&nbsp; New York</md-option>
                                    <md-option value="London"> &nbsp;&nbsp; &nbsp;&nbsp; London</md-option>
                                    <md-option value="Singapore">&nbsp;&nbsp; &nbsp;&nbsp;  Singapore</md-option>
                                    <md-option value="Mumbai"> &nbsp;&nbsp; &nbsp;&nbsp; Mumbai</md-option>
                                </md-select>
                            </md-field>
                        </div>
                        <div  class="md-layout-item md-white md-size-100 md-small-size-100 md-xsmall-size-100 md-medium-size-100 mx-auto">
                            <md-field class="md-form-group md-green">
                                <label>DESCRIPTION</label>
                                <md-textarea v-model="event.description"></md-textarea>
                            </md-field>

                        </div>

                        <div class="md-layout-item md-white md-size-100 md-small-size-100 md-xsmall-size-100 md-medium-size-50 mx-auto">
                            <div class="space-50"></div>
                            <el-upload
                                    action=""
                                    accept="image/jpeg,image/gif,image/png"
                                    :limit="1"
                                    :on-change="onUploadChange"
                                    :auto-upload="false"
                                    :show-file-list="true"
                                    >
                                <el-button slot="trigger" size="small" type="primary">选取</el-button>

                            </el-upload>
                            <p class="description">please upload images for your event</p>
                        </div>
                        <div  class="md-layout-item md-white md-size-20 md-small-size-20 md-xsmall-size-30 md-medium-size-20 mx-auto">
                            <div class="space-50"></div>
                            <md-button class="md-primary md-block md-success" @click="createEvent">
                                Submit
                            </md-button>
                            <div class="space-50"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import requestAPI from "../plugins/request";

    export default {

        name: "EditEvent",
        components:{
            requestAPI
        },
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
        methods:{
            onUploadChange(file)
            {
                var This=this
                This.event.file.name=file.name
                const isIMAGE = (file.raw.type === 'image/jpeg' || file.raw.type === 'image/png'|| file.raw.type === 'image/gif');
                const isLt1M = file.size / 1024 / 1024 < 1;

                if (!isIMAGE) {
                    this.$message.error('上传文件只能是图片格式!');
                    return false;
                }
                if (!isLt1M) {
                    this.$message.error('上传文件大小不能超过 1MB!');
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file.raw);
                reader.onload = function(e){
                    This.event.file.data=this.result
                }
                //console.log(this.eventpic)
            },
            createEvent(){
                this.event.user=this.userInfo.id
                console.log(JSON.stringify(this.event));
                requestAPI({url: "http://localhost:8080/api/event/",
                    method: "POST",
                    headers:{
                    'Content-Type':'application/json',
                },
                body: this.event}).then(res => {
                    //alert(JSON.stringify(this.event) + " success "+JSON.stringify(res));
                    this.$router.push('/explore');
                    console.log(res);
                })
                    .catch(err => {
                        alert(" error "+JSON.stringify(err));
                        console.log(err);
                    });

            },
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
                console.log(res,file)
                //在此处刷新当前界面
                // let NewPage = "_empty" + "?time=" + new Date().getTime() / 500;
                // this.$router.push(NewPage);
                // this.$router.go(-1);
            },
            beforeImgUpload(file) {
                console.log(file);
            }
        },
        created: function() {
            localStorage.setItem('Authorization',"{\n" +
                "\"id\": 25,\n" +
                "\"name\": \"mark\",\n" +
                "\"birthday\": \"2019-08-26T09:26:57.000+0000\",\n" +
                "\"location\": null,\n" +
                "\"username\": null,\n" +
                "\"password\": null,\n" +
                "\"email\": null,\n" +
                "\"photoURL\": null\n" +
                "}")
            this.userInfo=JSON.parse(localStorage.getItem('Authorization'));


        },
        data: () => ({
                eventpic:[],
                event:{
                    id:"",
                    user:0,
                    title:"",
                    maxnumber:"",
                    location:"",
                    description:"",
                    startdate:"",
                    perferences:[],
                    file:{
                        name:'',
                        data:''
                    }

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

        }
        )
    }
</script>

<style scoped>

</style>