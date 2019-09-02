<template>
    <div class="wrapper">
        <div class="section page-header header-filter" :style="headerStyle">
            <div class="container">
                <div class="md-layout">
                    <div  class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
                        <md-button
                                class="md-success"
                                @click="goEvent"
                        >Enroll
                            <md-tooltip md-direction="bottom">
                                Finished/Full
                            </md-tooltip></md-button
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Mynet",
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
        methods: {
            goEvent(){
                this.$router.push({name:"activityInfo", params:{id:this.eventid}})
            }
        },
        data() {
            return{
            eventid : "21"
        }
        }
    }
</script>

<style scoped>

</style>