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
                                            :src="img"
                                            alt="Circle Image"
                                            class="img-raised rounded-circle img-fluid"
                                    />
                                </div>
                                <div class="name">
                                    <h3 class="title">Ella Chow</h3>

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
                                    <md-input v-model="name"></md-input>
                                </md-field>
                                <md-field slot="inputs">
                                    <md-icon>email</md-icon>
                                    <label>Email...</label>
                                    <md-input v-model="email" type="email"></md-input>
                                </md-field>
                                <md-datepicker v-model="birthday">
                                    <label>Birthday</label>
                                </md-datepicker>
                                <md-field slot="inputs">
                                    <md-icon>explore</md-icon>
                                    <label>Location</label>
                                    <md-input v-model="location"></md-input>
                                </md-field>
                                <div class="space-30"></div>
                                <div class="description text-left">
                                    <h5>
                                        Your Preferences
                                    </h5>
                                </div>
                                <div class="md-layout">
                                    <div class="flex-column md-layout-item md-size-50 md-xsmall-size-100 md-small-size-50 md-medium-size-50">
                                        <md-checkbox v-model="checkbox1">Party</md-checkbox>
                                        <md-checkbox v-model="checkbox2">Reading</md-checkbox>
                                        <md-checkbox v-model="checkbox3">Skiing</md-checkbox>
                                        <md-checkbox v-model="checkbox4">Badminton</md-checkbox>
                                        <md-checkbox v-model="checkbox5">Hiking</md-checkbox>
                                    </div>
                                    <div class="flex-column md-layout-item md-size-50 md-xsmall-size-100 md-small-size-50 md-medium-size-50">
                                        <md-checkbox v-model="checkbox6">Climbing</md-checkbox>
                                        <md-checkbox v-model="checkbox7">Video Game</md-checkbox>
                                        <md-checkbox v-model="checkbox8">Basket Ball</md-checkbox>
                                        <md-checkbox v-model="checkbox9">Family Event</md-checkbox>
                                        <md-checkbox v-model="checkbox10">Pet</md-checkbox>
                                    </div>
                                </div>
                                <div class="space-50"></div>
                            </div>
                        </div>
                    </div>
                    <div class="md-layout text-center">
                        <div class="md-layout-item md-size-100 mx-auto">
                            <md-button class="md-success">Update</md-button>
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
    export default {
        components: {
            Tabs
        },
        bodyClass: "profile-page",
        data() {
            return {
                checkbox1: null,
                checkbox2: null,
                checkbox3: null,
                checkbox4: null,
                checkbox5: null,
                checkbox6: null,
                checkbox7: null,
                checkbox8: null,
                checkbox9: null,
                checkbox10: null,
                tabPane1: [
                    {image: require("@/assets/img/examples/studio-1.jpg")},
                    {image: require("@/assets/img/examples/studio-2.jpg")},
                    {image: require("@/assets/img/examples/studio-4.jpg")},
                    {image: require("@/assets/img/examples/studio-5.jpg")}
                ],
                tabPane2: [
                    {image: require("@/assets/img/examples/olu-eletu.jpg")},
                    {image: require("@/assets/img/examples/clem-onojeghuo.jpg")},
                    {image: require("@/assets/img/examples/cynthia-del-rio.jpg")},
                    {image: require("@/assets/img/examples/mariya-georgieva.jpg")},
                    {image: require("@/assets/img/examples/clem-onojegaw.jpg")}
                ],
                tabPane3: [
                    {image: require("@/assets/img/examples/mariya-georgieva.jpg")},
                    {image: require("@/assets/img/examples/studio-3.jpg")},
                    {image: require("@/assets/img/examples/clem-onojeghuo.jpg")},
                    {image: require("@/assets/img/examples/olu-eletu.jpg")},
                    {image: require("@/assets/img/examples/studio-1.jpg")}
                ]
            };
        },
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
