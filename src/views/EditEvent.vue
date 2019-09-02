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
                        <md-button class="md-primary md-block md-success">
                            New Event
                        </md-button>
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
                                <md-icon>person_outline</md-icon>
                                <label>PARTICIPANTS LIMIT</label>
                                <md-input v-model="event.number"></md-input>
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

                            <md-checkbox slot="inputs" v-model="event.subject.t1" >Game</md-checkbox>
                            <md-checkbox slot="inputs" v-model="event.subject.t2" >Spots</md-checkbox>
                            <md-checkbox slot="inputs" v-model="event.subject.t3" >Travel</md-checkbox>
                            <md-checkbox slot="inputs" v-model="event.subject.t4" >Hiking</md-checkbox>
                            <md-checkbox slot="inputs" v-model="event.subject.t5" >Movie</md-checkbox>
                            <md-checkbox slot="inputs" v-model="event.subject.t6" >Reading</md-checkbox>
                            <p  class="description">Please choose subject of your event!</p>
                       </div>
                        <div class="md-layout-item md-white md-size-50 md-small-size-100 md-xsmall-size-100 md-medium-size-50 mx-auto">
                        <md-datepicker v-model="event.date">
                            <label>Select date</label>
                        </md-datepicker>
                    </div>
                        <div class="md-layout-item md-white md-size-50 md-small-size-100 md-xsmall-size-100 md-medium-size-50 mx-auto">
                            <md-field class="md-form-group md-green" slot="inputs">
                                <md-icon>person_outline</md-icon>
                                <label>Location</label>
                            <md-select v-model="event.location" name="location" id="location">
                                <md-option value="SH">Shang Hai</md-option>
                                <md-option value="BJ">Bei Jing</md-option>
                                <md-option value="TK">Tokyo</md-option>
                                <md-option value="HK">Hong Kong</md-option>
                                <md-option value="NY">Now York</md-option>
                                <md-option value="LN">London</md-option>
                                <md-option value="SINGAPORE">Singapore</md-option>
                                <md-option value="BOMBAY">Bombay</md-option>
                            </md-select>
                            </md-field>
                        </div>
                        <div  class="md-layout-item md-white md-size-100 md-small-size-100 md-xsmall-size-100 md-medium-size-100 mx-auto">
                        <md-field class="md-form-group md-green">
                            <label>DESCRIPTION</label>
                            <md-textarea v-model="event.description"></md-textarea>
                        </md-field>

                        </div>
                        <div  class="md-layout-item md-white md-size-10 md-small-size-20 md-xsmall-size-30 md-medium-size-20 mx-auto">
                            <md-button class="md-primary md-block md-success" @click="createEvent">
                                Submit
                            </md-button>

                        </div>


                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

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
                alert("event "+ JSON.stringify(this.event))
            }
        },
        data: () => ({
                event:{
                title:"",
                    number:"",
                    location:"",
                    description:"",
                    date:"",
                    subject:{
                        t1: false,
                        t2: false,
                        t3: false,
                        t4: false,
                        t5: false,
                        t6: false
                    }

                }

        }
        )
    }
</script>

<style scoped>

</style>