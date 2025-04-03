<template>
  <div id="app">
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>

</template>

<style>
  html,body{
    margin: 0;
    padding: 0;
  }
</style>
<script scoped>
export default {
  name: 'App',
  components: {

  }
}
</script>