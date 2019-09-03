import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        Authorization:localStorage.getItem('Authorization')?localStorage.getItem('Authorization'):null
    },
    mutations:{
        changeLogin(Authorization){
            // alert("JSON.stringify(Authorization):"+JSON.stringify(Authorization))
            // localStorage.setItem('Authorization',JSON.stringify(Authorization));

            // alert(localStorage.getItem('Authorization'))
        }
    }
});

export default store;
