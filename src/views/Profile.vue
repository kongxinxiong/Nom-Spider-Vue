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
                        <div class="md-layout-item md-size-50 mx-auto">
                            <div class="profile">
                                <div class="avatar">
                                    <img
                                            :src="'http://localhost:8080/api/user/image/'+this.userProfile.photoURL"
                                            alt="Circle Image"
                                            class="img-raised rounded-circle img-fluid"
                                    />
                                </div>
                                <div class="name">
                                    <h3 class="title">{{this.userProfile.name}}</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="description text-center">
                        <h4>
                            Your Profile
                        </h4>
                    </div>
                    <div>
                        <div class="md-layout">
                            <div class="md-layout-item md-size-50 mx-auto">
                                <md-field slot="inputs">
                                    <md-icon>face</md-icon>
                                    <label>Nick Name...</label>
                                    <md-input v-model="userProfile.name"></md-input>
                                </md-field>
                                <md-field slot="inputs">
                                    <md-icon>email</md-icon>
                                    <label>Email...</label>
                                    <md-input v-model="userProfile.email" type="email"></md-input>
                                </md-field>
                                <md-datepicker v-model="userProfile.birthday">
                                    <label>Birthday</label>
                                </md-datepicker>
                                <md-field slot="inputs">
                                    <md-icon>explore</md-icon>
                                    <label>Location</label>
                                    <md-input v-model="userProfile.location"></md-input>
                                </md-field>
                                <div class="space-30"></div>
                                <div class="description text-left">
                                    <h5>
                                        Your Preferences
                                    </h5>
                                </div>
                                <div class="md-layout">
                                    <div class="flex-column md-layout-item md-size-50 md-xsmall-size-100 md-small-size-50 md-medium-size-50">
                                        <md-checkbox v-model="userProfile.preferences" value=1>Party</md-checkbox>
                                        <md-checkbox v-model="userProfile.preferences" value=2>Reading</md-checkbox>
                                        <md-checkbox v-model="userProfile.preferences" value=3>Skiing</md-checkbox>
                                        <md-checkbox v-model="userProfile.preferences" value=4>Badminton</md-checkbox>
                                        <md-checkbox v-model="userProfile.preferences" value=5>Hiking</md-checkbox>
                                    </div>
                                    <div class="flex-column md-layout-item md-size-50 md-xsmall-size-100 md-small-size-50 md-medium-size-50">
                                        <md-checkbox v-model="userProfile.preferences" value=6>Climbing</md-checkbox>
                                        <md-checkbox v-model="userProfile.preferences" value=7>Video Game</md-checkbox>
                                        <md-checkbox v-model="userProfile.preferences" value=8>Basket Ball</md-checkbox>
                                        <md-checkbox v-model="userProfile.preferences" value=9>Family Event</md-checkbox>
                                        <md-checkbox v-model="userProfile.preferences" value=20>Pet</md-checkbox>
                                    </div>
                                </div>
                                <div class="space-50"></div>
                            </div>
                        </div>
                    </div>
                    <div class="md-layout text-center">
                        <div class="md-layout-item md-size-100 mx-auto">
                            <md-button class="md-success" @click="updateProfile">Update Profile</md-button>
                        </div>
                    </div>
                    <div class="space-50"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Tabs} from "@/components";
    import requestAPI from "../plugins/request";
    export default {
        components: {
            Tabs,
            requestAPI
        },
        bodyClass: "profile-page",
        data:() =>({
            userProfile:{
                    username: null,
                    email: null,
                    password:null,
                    name:null,
                    photoURL:null,
                    birthday:null,
                    location:null,
                    preferences:[]
            }

        }),
        props: {
            header: {
                type: String,
                default: require("@/assets/img/city-profile.jpg")
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
        created: function() {
            this.userInfo=JSON.parse(localStorage.getItem('Authorization'));
        },
        mounted() {
            requestAPI({
                url: "http://localhost:8080/api/user/"+36,
                method: "GET",
                headers:{
                    'Content-Type':'application/json'
                },
            })
                .then(res => {
                    this.userProfile = JSON.parse(JSON.stringify(res)).data;
                })
                .catch(err => {
                    alert(JSON.stringify(err));
                });
        },
        methods:{
            updateProfile(){
                requestAPI({url: "http://localhost:8080/api/user/",
                    method: "POST",
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body: this.userProfile}).then(res => {
                    alert(JSON.stringify(this.userProfile) + " success "+JSON.stringify(res));
                    this.$router.push('/explore');
                    console.log(res);
                })
                    .catch(err => {
                        alert(" error "+JSON.stringify(err));
                        console.log(err);
                    });
            }
        }
    };
</script>

<style lang="scss" scoped>
    .vertical-center {
        display: flex;
        align-items: center;
    }
    .flex-column {
        display: flex;
        flex-direction: column;
    }
    .md-checkbox,
    .md-radio {
        display: flex;
        margin: 0;
        margin-bottom: 0.5rem;
    }
    .section {
        padding: 0;
    }
    .profile-tabs /deep/ {
        .md-card-tabs .md-list {
            justify-content: center;
        }

        [class*="tab-pane-"] {
            margin-top: 3.213rem;
            padding-bottom: 50px;

            img {
                margin-bottom: 2.142rem;
            }
        }
    }
</style>
