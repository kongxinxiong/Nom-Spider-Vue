<template>
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" v-if="isRouterAlive"/>
      <div>
        <router-view />
      </div>
      <router-view name="footer" />
    </div>
  </div>
</template>


<script>
  export default {
    name: 'App',
    provide() { // 注册一个方法
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterAlive: true
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false
        this.$nextTick(function() {
          this.isRouterAlive = true
          console.log('reload')
        })
      }
    }
  }
</script>
