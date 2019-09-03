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
<!--                        <div  class="md-layout-item md-white md-size-50 md-small-size-50 md-xsmall-size-100 md-medium-size-50 mx-auto">-->
<!--                        <md-field class="md-form-group md-green" slot="inputs">-->
<!--                            <label>image</label>-->
<!--                            <md-file v-model="image">-->
<!--                            </md-file>-->
<!--                            <span class="md-helper-text">You can upload more image files</span>-->
<!--                        </md-field>-->
<!--                        </div>-->
                        <div  class="md-layout-item md-white md-size-100 md-small-size-100 md-xsmall-size-100 md-medium-size-100 mx-auto">

                            <md-checkbox slot="inputs" v-model="event.perferences" value="1" >Game</md-checkbox>
                            <md-checkbox slot="inputs" v-model="event.perferences" value="2">Spots</md-checkbox>
                            <md-checkbox slot="inputs" v-model="event.perferences" value="3">Travel</md-checkbox>
                            <md-checkbox slot="inputs" v-model="event.perferences" value="4">Hiking</md-checkbox>
                            <md-checkbox slot="inputs" v-model="event.perferences" value="5">Movie</md-checkbox>
                            <md-checkbox slot="inputs" v-model="event.perferences" value="6">Reading</md-checkbox>
                            <p  class="description">Please choose subject of your event!</p>
                       </div>
                        <div class="md-layout-item md-white md-size-50 md-small-size-100 md-xsmall-size-100 md-medium-size-50 mx-auto">
                        <md-datepicker v-model="event.date">
                            <label>Select date</label>
                        </md-datepicker>
                    </div>
                        <div class="md-layout-item md-white md-size-50 md-small-size-100 md-xsmall-size-100 md-medium-size-50 mx-auto">
                            <md-field class="md-green">
                                <md-icon>explore</md-icon>
                                <label>Location</label>
                            <md-select v-model="event.location" name="location" id="location">
                                <md-option value="SH">&nbsp;&nbsp; &nbsp;&nbsp; Shang Hai</md-option>
                                <md-option value="BJ"> &nbsp;&nbsp; &nbsp;&nbsp; Bei Jing</md-option>
                                <md-option value="TK"> &nbsp;&nbsp; &nbsp;&nbsp; Tokyo</md-option>
                                <md-option value="HK"> &nbsp;&nbsp; &nbsp;&nbsp; Hong Kong</md-option>
                                <md-option value="NY"> &nbsp;&nbsp; &nbsp;&nbsp; New York</md-option>
                                <md-option value="LN"> &nbsp;&nbsp; &nbsp;&nbsp; London</md-option>
                                <md-option value="SINGAPORE">&nbsp;&nbsp; &nbsp;&nbsp;  Singapore</md-option>
                                <md-option value="BOMBAY"> &nbsp;&nbsp; &nbsp;&nbsp; Mumbai</md-option>
                            </md-select>
                            </md-field>
                        </div>
                        <div  class="md-layout-item md-white md-size-100 md-small-size-100 md-xsmall-size-100 md-medium-size-100 mx-auto">
                        <md-field class="md-form-group md-green">
                            <label>DESCRIPTION</label>
                            <md-textarea v-model="event.description"></md-textarea>
                        </md-field>

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
            createEvent(){
                alert("event "+ JSON.stringify(this.event));
                requestAPI({url: "http://localhost:8080/api/event/",
                    method: "POST",
                    headers:{
                    'Content-Type':'application/json',
                },
                body: this.event}).then(res => {
                    alert(JSON.stringify(this.event) + " success "+JSON.stringify(res));
                    _this.$router.push('/explore');
                    console.log(res);
                })
                    .catch(err => {
                        alert(JSON.stringify(this.userInfo) + " error "+JSON.stringify(err));
                        console.log(err);
                    });

            }
        },
        created: function() {
            this.userInfo=localStorage.getItem('Authorization')
        },
        data: () => ({
                event:{
                    id:"",
                    user:this.userInfo,
                    title:"",
                    maxnumber:"",
                    location:"",
                    description:"",
                    startdate:"",
                    perferences:[]

                }

        }
        )
    }
</script>

<style scoped>

</style>